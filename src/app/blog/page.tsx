"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Config from "../utilities/config";

interface Blog {
  title?: string;
  description?: string;
  author?: string;
  pubDate?: string;
  link?: string;
  [key: string]: any;
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState<string[]>([]);
  const [showLikedOnly, setShowLikedOnly] = useState(false);

  /* ---------------- Fetch Blogs ---------------- */
  useEffect(() => {
    axios
      .get<{ items: Blog[] }>(Config.MEDIUM_BLOG_URL)
      .then((res) => setBlogs(res.data?.items ?? []))
      .catch((err) =>
        setError(err?.message ?? "Failed to load blogs")
      )
      .finally(() => setLoading(false));
  }, []);

  /* ---------------- Persist Likes ---------------- */
  useEffect(() => {
    const saved = localStorage.getItem("likedBlogs");
    if (saved) setLiked(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("likedBlogs", JSON.stringify(liked));
  }, [liked]);

  /* ---------------- Helpers ---------------- */
  const stripHtml = (html?: string): string => {
    if (!html) return "";
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || "";
  };

  const extractImage = (html?: string): string => {
    if (!html) return "/default-blog.jpg";
    const div = document.createElement("div");
    div.innerHTML = html;
    const img = div.querySelector("img") as HTMLImageElement | null;
    return img?.src ?? "/default-blog.jpg";
  };

  const getReadTime = (text: string) =>
    `${Math.max(1, Math.ceil(text.split(" ").length / 200))} min read`;

  const toggleLike = (link?: string) => {
    if (!link) return;

    setLiked((prev) =>
      prev.includes(link)
        ? prev.filter((l) => l !== link)
        : [...prev, link]
    );
  };

  /* ---------------- Filters ---------------- */
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title?.toLowerCase().includes(search.toLowerCase()) ||
      stripHtml(blog.description)
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesLiked = showLikedOnly
      ? liked.includes(blog.link ?? "")
      : true;

    return matchesSearch && matchesLiked;
  });

  /* ---------------- UI ---------------- */
  return (
    <section id="blogs" className="w-full pb-[60px]">
      <h2 className="text-center text-[42px] font-bold mb-8 pt-10 pb-10 text-[#8754d0] bg-[#e0d9fb]">
        Blogs
      </h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search blogs"
        className="block mx-auto mb-6 w-full max-w-md px-4 py-2 border rounded"
      />

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setShowLikedOnly(false)}
          className={`px-4 py-2 rounded text-sm font-semibold ${
            !showLikedOnly
              ? "bg-[#8a49d3] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          All Posts
        </button>

        <button
          onClick={() => setShowLikedOnly(true)}
          className={`px-4 py-2 rounded text-sm font-semibold ${
            showLikedOnly
              ? "bg-[#8a49d3] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          ❤️ Liked Posts
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-8 px-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 animate-pulse"
              >
                <div className="h-[180px] bg-gray-300 rounded mb-4" />
                <div className="h-4 bg-gray-300 mb-2 rounded" />
                <div className="h-3 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="text-red-500 text-center">{error}</p>
      )}

      {/* Empty State */}
      {!loading && filteredBlogs.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          {showLikedOnly
            ? "You haven't liked any blogs yet."
            : "No blogs found. Try another search."}
        </p>
      )}

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-8 px-10">
          {filteredBlogs.map((blog, index) => (
            <article
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-300"
            >
              <img
                src={extractImage(blog.description)}
                alt={blog.title ?? "Blog image"}
                loading="lazy"
                className="w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-[16px] font-bold">
                    {blog.title}
                  </h4>
                  <button
                    onClick={() => toggleLike(blog.link)}
                    aria-label="Like blog"
                    className="text-lg"
                  >
                    {liked.includes(blog.link ?? "") ? "❤️" : "🤍"}
                  </button>
                </div>

                <span className="text-[11px] text-gray-500 block mb-2">
                  {getReadTime(stripHtml(blog.description))}
                </span>

                <p className="text-[13px] text-[#666] mb-3 line-clamp-3">
                  {stripHtml(blog.description)}
                </p>

                <p className="font-semibold mb-4 text-sm">
                  — {blog.author ?? "Unknown"} —
                </p>

                <div className="flex justify-between items-center">
                  <div className="bg-[#f4e7ff] px-3 py-2 rounded">
                    <small className="block text-[10px] text-[#444]">
                      Published On
                    </small>
                    <span className="text-[12px] font-semibold text-[#8a49d3]">
                      {blog.pubDate?.split(" ")[0] ?? "Unknown"}
                    </span>
                  </div>

                  <a
                    href={blog.link ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#8a49d3] text-white px-5 py-2 rounded text-xs font-semibold hover:bg-[#742fc8]"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Medium CTA */}
      <div className="mt-16 text-center">
        <p className="text-[18px] text-[#555] mb-2">
          Follow us on Medium for insights on Data, AI & Software Engineering
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Join a growing community of tech learners and builders.
        </p>
        <a
          href="https://medium.com/sliitwif"
          target="_blank"
          rel="noreferrer"
          className="px-10 py-3 bg-[#8a49d3] text-white rounded-full font-semibold hover:bg-[#742fc8]"
        >
          Read More on Medium
        </a>
      </div>
    </section>
  );
};

export default Blog;

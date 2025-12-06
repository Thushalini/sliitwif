"use client";

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Light Purple Banner */}
      <div className="w-full bg-purple-200 py-12 text-center">
        <h1 className="text-5xl font-bold text-[#914FA8]">Code of Conduct</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Purpose of Code of Conduct */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Purpose of Code of Conduct</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              
The purpose of our Community Code of Conduct is to ensure that all 
participants in the SLIIT Women In FOSS community have the best possible 
experience. We are all here to help each other learn, grow our skill sets, 
and have a good time! The SLIIT Women In FOSS Community Code of Conduct covers
 our behavior as members of the SLIIT Women In FOSS community, in any forum, 
 mailing list, wiki, web site, code repository, IRC channel, private correspondence, 
 or public meetings. </p> 
 <p> As a worldwide community, diversity is one of our huge strengths, 
 but it can also lead to communication issues and unhappiness. To that end, we have a few ground 
 rules that we ask people to adhere to, to ensure that the SLIIT Women In FOSS community continues 
 to be an excellent space in which like-minded individuals are able to communicate, collaborate, and
  contribute. This isn&apos;t an exhaustive list of things that you can&apos;t do. Rather, take it in the spirit 
  in which it&apos;s intended - a guide to make it easier to be excellent to one another. 
  We expect it to be followed in spirit as much as in the letter. If you believe someone
   is violating the Code of Conduct, we ask that you report it by emailing <a href="mailto:infowifsliit@gmail.com" className="text-purple-600 hover:underline">infowifsliit@gmail.com</a>.
            </p>
          </div>
        </section>

        {/* Expected Behavior */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Expected Behavior</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="font-bold text-gray-800 mt-1">•</span>
              <div>
                <span className="font-bold text-gray-800">Be considerate </span> - Your work will be used 
                by other people, and you in turn will depend on the work of others.
                 Any decision you take will affect users and colleagues, 
                 and you should take those consequences into account when
                  making decisions.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-gray-800 mt-1">•</span>
              <div>
                <span className="font-bold text-gray-800">Be patient</span> - That&apos;ll helps you build empathy towards others.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-gray-800 mt-1">•</span>
              <div>
                <span className="font-bold text-gray-800">Be respectful</span> - Receiving 
                respect from others is important because it helps us to feel safe
                 and to express ourselves.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-gray-800 mt-1">•</span>
              <div>
                <span className="font-bold text-gray-800">Be nice</span> -This community 
                is formed and visited by like-minded individuals in their own quests
                 for knowledge. Treat them as you would like to be treated.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-gray-800 mt-1">•</span>
              <div>
                <span className="font-bold text-gray-800">Communicate effectively</span> - Effective communication 
                can help foster a good working relationship with others.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-gray-800 mt-1">•</span>
              <div>
                <span className="font-bold text-gray-800">Get for help when unsure</span> -Don&apos;t be afraid to ask for help from your peers.

              </div>
            </li>
          </ul>
        </section>

        {/* Unacceptable Behaviors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Unacceptable Behaviors</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="font-bold text-gray-800 mt-1">•</span>
              <span>Violent threats directed against another person.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-gray-800 mt-1">•</span>
              <span>Discriminatory jokes.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-gray-800 mt-1">•</span>
              <span>Posting (or threatening to post) other people&apos;s personally identifiable information on social media or somewhere.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-gray-800 mt-1">•</span>
              <span>Personal insults.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-gray-800 mt-1">•</span>
              <span>Unwelcome sexual attention.</span>
            </li>
          </ul>
        </section>

        {/* Reporting Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Reporting Guide</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            If you believe someone is violating the code of conduct, we ask that you 
            report it to the SLIIT Women In FOSS Community by emailing <a href="mailto:infowifsliit@gmail.com" className="text-purple-600 hover:underline">infowifsliit@gmail.com</a>.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">In your report please include:</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li className="list-disc">Your contact info (so we can get in touch with you).</li>
            <li className="list-disc">When and where the incident occurred. Please be as specific as possible.</li>
            <li className="list-disc">Any extra context in relation to the incident.</li>
            <li className="list-disc">If you believe this incident is ongoing.</li>
            <li className="list-disc">Any other information you believe we should have.</li>
          </ul>
        </section>

        {/* What happens after you file a report? */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What happens after you file a report?</h2>
          <p className="text-gray-700 leading-relaxed">
          You will receive an email from us immediately. We promise to take action within 24 hours. (We&apos;ll try to be quicker than that)
          </p>
        </section>

        {/* Consequences of Bad Behavior */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Consequences of Bad Behavior</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
          After gathering and processing sufficient information,
           we&apos;ll take appropriate action. Respond to a Code of Conduct violation will be as follows:
          </p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li className="list-disc">We&apos;ll give the person in question a public or private warning and explain how their behavior negatively impacted others.</li>
            <li className="list-disc">Suspend the person enforced through a temporary ban on participating in any aspect of future community activities.</li>
            <li className="list-disc">Permanently ban the person from the SLIIT Women In FOSS Community.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

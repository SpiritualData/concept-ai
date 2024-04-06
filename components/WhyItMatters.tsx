const WhyItMatters = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-gray-800">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4">
            <h2 className="h2 mb-4">Why It Matters</h2>
            <p className="text-xl text-gray-400 mb-10 text-left">
              Some AI tasks are simply not possible with standard prompt engineering. Concept AI is not only ensuring AI is as reliable as humans; our mission is to calculate truth with more accuracy and less bias than any human could.
            </p>

            <ul className="text-gray-400 -mb-2">
              <li className="flex items-center mb-4">
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  How can you trust an AI to do important tasks? Automation requires precision.
                </span>
              </li>
              <li className="flex items-center mb-4">
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Real-time hypothesis testing enables a new level of contextual personalization.
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Concept AI offers a bridge between philosophy and science, and a holistic
                  approach to knowledge.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;

const WhyItMatters = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-gray-800">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4">
            <h2 className="h2 mb-4">Why It Matters</h2>
            <p className="text-xl text-gray-400 mb-10">
              Combining AI with analytics to transform data into actionable
              insights, bridging science and humanities for integrated knowledge
              discovery and application.
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
                  Accelerating research in scientific fields to providing
                  personalized mental health recommendations
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
                  Concept AI enables real-time applications of complex data
                  analysis and hypotheses assessment
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
                  Bridge between humanities and science, allowing holistic
                  approach to truth and knowledge
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

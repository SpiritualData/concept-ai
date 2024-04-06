import Image from "next/image";

// import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
// import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
// import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

import Joshua from "@/public/images/Joshua.jpeg";

export default function Market() {
  return (
    <section>
      <div className="pb-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-10 md:py-12 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Creating Value Through Reliable AI</h2>
            <p className="text-xl text-gray-400">
              Breaking new ground in knowledge automation, merging large
              language models, statistical analysis, and AI to transform
              precision in both research and decision-making tasks
            </p>
          </div>

          {/* Market */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st Opportunity */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              {/* <div>
                <div className="relative inline-flex flex-col mb-10">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div> */}
              <blockquote className="text-lg text-gray-400 grow">
                — A survey revealed that 72% of companies experienced a notable
                boost in efficiency after integrating AI chatbots into their
                operations. This highlights the critical role of AI in enhancing
                productivity by providing swift insights, allowing professionals
                to concentrate on high-value work.
              </blockquote>
              {/* <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div> */}
            </div>

            {/* 2nd Opportunity */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* <div>
                <div className="relative inline-flex flex-col mb-10">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div> */}
              <blockquote className="text-lg text-gray-400 grow">
                — The AI chatbot sector is expected to soar to $9.4 billion by
                2024, signaling a significant opportunity for AI solutions to
                lead in streamlining processes and becoming a fundamental tool
                for businesses seeking to adopt innovative technologies for
                efficiency.
              </blockquote>
              {/* <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div> */}
            </div>

            {/* 3rd Opportunity */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {/* <div>
                <div className="relative inline-flex flex-col mb-10">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div> */}
              <blockquote className="text-lg text-gray-400 grow">
                — Research shows that incorporating AI into customer service can
                elevate satisfaction levels by up to 40%. By offering instant,
                pertinent information, AI technologies stand out in improving
                the customer service experience, ensuring timely and effective
                responses to inquiries.
              </blockquote>
              {/* <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="max-w-sm mx-auto grid lg:grid-cols-1 items-start lg:max-w-none">
          {/* Our Plan */}
          <div
            className="flex flex-col h-full p-6 bg-gray-800"
            data-aos="fade-up"
          >
            <div>
              <div className="relative inline-flex flex-col mb-10">
                <Image className="rounded-full" src={Joshua} width={48} height={48} alt="Joshua" />
                <svg
                  className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                  viewBox="0 0 24 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                </svg>
              </div>
            </div>
            <blockquote className="text-lg text-gray-400 grow">
              — Our initial focus targets R&D departments within tech-centric
              organizations, addressing their need for an efficient process to
              sift through and evaluate vast amounts of research and
              documentation. Concept AI promises to streamline innovation
              pipelines, enhance decision-making, and automate experimentation.
            </blockquote>
            {/* <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

import Fade from "react-reveal/Fade";
import Job1 from "../assets/job1.jpg";
import Job2 from "../assets/job2.jpeg";
const Experience = () => {
  return (
    <Fade left>
      <section className="max-w-screen-xl mx-auto pt-10">
        <section className=" sm:py-12  flex items-center flex-col">
          <div className=" p-6 mx-auto space-y-8 w-full ">
            <div className="space-y-2 text-center">
              <h2 className="text-5xl font-bold mb-10">
                Work/Volunteer Experience
              </h2>
            </div>
            <div className="max-w-screen-xl p-5 mx-auto grid md:grid-cols-1 gap-5 ">
              <div className="w-full">
                <div className="group mx-2  bg-white dark:bg-black   grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8  shadow transition hover:shadow-lg sm:mx-auto">
                  <div class="order-2 col-span-3 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
                    <div class="group relative h-40 w-40 overflow-hidden rounded-lg">
                      <img
                        src={Job1}
                        alt=""
                        class="h-full w-full object-contain text-gray-700"
                      />
                    </div>
                  </div>
                  <div className="col-span-9 flex flex-col pr-8 text-left sm:pl-4">
                    <div className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">
                      {" "}
                      IIIT- H
                    </div>
                    <p className="overflow-hidden pr-7 text-sm">
                      Role: NLP Expertise
                    </p>
                    <p className="overflow-hidden pr-7 text-sm">
                      During my NLP internship, I immersed myself in the
                      intricate world of Natural Language Processing, applying
                      theoretical knowledge to real-world projects. Engaging in
                      tasks such as sentiment analysis and language modeling, I
                      honed my skills in leveraging machine learning algorithms
                      for language understanding. This hands-on experience
                      significantly deepened my understanding of NLP
                      applications and their impact on advancing language
                      technologies.
                    </p>

                    <div className="mt-5 flex flex-col space-y-3 text-sm font-medium  sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                      <div className="">
                        Time: 10th Feb 2022 - 10th May 2022
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="group mx-2  bg-white dark:bg-black   grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8  shadow transition hover:shadow-lg sm:mx-auto">
                  <div class="order-2 col-span-3 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
                    <div class="group relative h-40 w-40 overflow-hidden rounded-lg">
                      <img
                        src={Job2}
                        alt=""
                        class="h-full w-full object-contain text-gray-700"
                      />
                    </div>
                  </div>
                  <div className="col-span-9 flex flex-col pr-8 text-left sm:pl-4">
                    <div className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">
                      {" "}
                      RGUKTB
                    </div>
                    <p className="overflow-hidden pr-7 text-sm">
                      Role: Volunteer
                    </p>
                    <p className="overflow-hidden pr-7 text-sm">
                      As a dedicated volunteer at IIIT Basar, I actively
                      contributed to facilitating IT workshops from March 2018
                      to December 2019. During this period, I played a pivotal
                      role in empowering participants with valuable IT skills,
                      fostering a collaborative and enriching learning
                      environment.
                    </p>

                    <div className="mt-5 flex flex-col space-y-3 text-sm font-medium  sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                      <div className="">Time: Mar 2018 - Dec 2019</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Fade>
  );
};

export default Experience;

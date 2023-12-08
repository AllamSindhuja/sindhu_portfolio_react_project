import Fade from "react-reveal/Fade";

const Education = () => {
  return (
    <Fade left>
      <section className="max-w-screen-xl mx-auto pt-20">
        <section className=" sm:py-12  flex items-center flex-col">
          <div className=" p-6 mx-auto space-y-8 w-full ">
            <div className="space-y-2 text-center">
              <h2 className="text-5xl font-bold mb-10">Education History</h2>
            </div>
            <div className="max-w-screen-xl p-5 mx-auto grid md:grid-cols-2 gap-5 ">
              <div className="w-full">
                <div className="group mx-2  bg-white dark:bg-black   grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8  shadow transition hover:shadow-lg sm:mx-auto">
                  <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
                    <a
                      href="#"
                      className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
                    >
                      {" "}
                      Rajiv Gandhi University of Knowledge Technologies
                    </a>
                    <p className="overflow-hidden pr-7 text-sm">High School</p>

                    <div className="mt-5 flex flex-col space-y-3 text-sm font-medium  sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                      <div className="">
                        Graduation Year: :
                        <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                          {" "}
                          2019{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="group mx-2  bg-white dark:bg-black   grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8  shadow transition hover:shadow-lg sm:mx-auto">
                  <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
                    <a
                      href="#"
                      className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
                    >
                      {" "}
                      Rajiv Gandhi University of Knowledge Technologies
                    </a>
                    <p className="overflow-hidden pr-7 text-sm">
                      Degree: Bachelor of Technology in Computer Science
                    </p>

                    <div className="mt-5 flex flex-col space-y-3 text-sm font-medium  sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                      <div className="">
                        Graduation Year: :
                        <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                          {" "}
                          2023{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="group mx-2  bg-white dark:bg-black   grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8  shadow transition hover:shadow-lg sm:mx-auto">
                  <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
                    <a
                      href="#"
                      className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
                    >
                      {" "}
                      Saint Louis University
                    </a>
                    <p className="overflow-hidden pr-7 text-sm">
                      Degree: Masters in Computer Science
                    </p>

                    <div className="mt-5 flex flex-col space-y-3 text-sm font-medium  sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                      <div className="">
                        Graduation Year: :
                        <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                          {" "}
                          2025{" "}
                        </span>
                      </div>
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

export default Education;

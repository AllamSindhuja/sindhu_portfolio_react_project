import Job1 from "../assets/job1.jpg";
import Job2 from "../assets/job2.jpeg";
import UserImg from "../assets/profile.jpeg";

import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <Fade left>
      <section className="max-w-screen-md mx-auto mb-[4.5rem] pt-20">
        <section className=" sm:py-12 dark:text-gray-100 flex items-center flex-col">
          <div className=" p-6 mx-auto space-y-8 w-full ">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold mb-10">Projects</h2>
            </div>

            <div className="max-w-screen-xl p-5 mx-auto  dark:text-gray-100">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 sm:grid-cols-2">
                <div
                  className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-72 bg-gray-500 text-white cursor-pointer "
                  style={{
                    backgroundImage: `url(${Job1})`,
                  }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b hover:via-transparent hover:from-gray-900 hover:to-gray-900"></div>
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a
                      rel="noopener noreferrer"
                      href="/"
                      className="px-3 py-2 text-xs font-semibold tracki uppercase hover:text-gray-100 bgundefined"
                    >
                      Project One
                    </a>
                  </div>
                  <h2 className="z-10 p-5">
                    <a
                      rel="noopener noreferrer"
                      href="/"
                      className="font-medium text-md hover:underline hover:text-gray-100"
                    >
                      IIIT- H
                    </a>
                  </h2>
                </div>
                <div
                  className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-72 bg-gray-500 text-white cursor-pointer "
                  style={{
                    backgroundImage: `url(${Job2})`,
                  }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b hover:via-transparent hover:from-gray-900 hover:to-gray-900"></div>
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a
                      rel="noopener noreferrer"
                      href="/"
                      className="px-3 py-2 text-xs font-semibold tracki uppercase hover:text-gray-100 bgundefined"
                    >
                      Project Two
                    </a>
                  </div>
                  <h2 className="z-10 p-5">
                    <a
                      rel="noopener noreferrer"
                      href="/"
                      className="font-medium text-md hover:underline hover:text-gray-100"
                    >
                      RGUKTB
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Fade>
  );
};

export default Projects;

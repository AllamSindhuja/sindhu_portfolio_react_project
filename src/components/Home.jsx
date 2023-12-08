import UserImg from "../assets/profile.jpeg";

import Fade from "react-reveal/Fade";

function Home() {
  return (
    <Fade left>
      <div className="relative pt-40 flex flex-col items-center max-w-screen-lg mx-auto">
        <img
          src={UserImg}
          alt="user Img"
          className="w-52 rounded-full mx-auto"
        />
        <h1 className="text-2xl font-max text-center my-2">Sindhuja Allam</h1>

        <p className="text-center font-min text-base my-4">
          Hello! I'm Sindhuja Allam, a Computer Science master's student at
          Saint Louis University. I'm really into making computers learn from
          data (machine learning) and understanding how computers can understand
          human language (NLP). I've worked on cool projects using these
          technologies and even did an internship focusing on language stuff.
          Check out my portfolio to see some of the interesting things I've
          done, from creating smart algorithms to exploring the wonders of
          language. I'm always up for new projects and collaborations, so let's
          chat and create some awesome things together!
        </p>
      </div>
    </Fade>
  );
}

export default Home;

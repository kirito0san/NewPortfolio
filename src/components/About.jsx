const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center w-full h-full animate__animated animate__fadeInDown about"
    >
      <div className="flex flex-col">
        <div className="text-4xl font-bold cursor-default article md:text-5xl">
          <p>Hi ,I am Ahmed Syed Web Developer</p>
          <div className="text-xl font-normal capitalize aboutParagraph">
            <p className="px-5 pt-5 font-light">
              I’m from egypt, My journey with FWD started as the gateway into the world of
              programming. Upon completing the introductory stage, I began searching for other
              resources to deepen my knowledge in the field. Along the way, I stumbled upon a
              valuable treasure, which was found on YouTube under the name
              <a
                rel="noreferrer"
                className="font-semibold hoverMe"
                target="_blank"
                href="https://www.youtube.com/@ElzeroWebSchool"
              >
                {" "}
                Elzero Web School{" "}
              </a>
              . Professor
              <a
                rel="noreferrer"
                className="font-semibold hoverMe"
                target="_blank"
                href="https://www.facebook.com/OsElzero"
              >
                {" "}
                Osama Mohamed{" "}
              </a>
              was a major catalyst for me to fall in love with web design and development. And now,
              I am part of the DEPI scholarship to further develop my technical skills. This
              opportunity has allowed me to deepen my knowledge, refine my abilities, and stay
              up-to-date with the latest trends and technologies in web development. My goal is to
              continue growing as a developer and contribute effectively to the tech community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

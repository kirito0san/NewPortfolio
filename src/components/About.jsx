const About = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full about animate__animated animate__fadeInDown">
      <div className="flex flex-col">
        <div className="text-4xl font-bold cursor-default card article md:text-5xl">
          <div className="flex flex-col gap-4">
            <p>Ahmed Syed</p>
            <p>Front End Developer</p>
          </div>
          <div className="text-xl font-normal capitalize aboutParagraph">
            <p className="px-5 pt-5 font-light">
              I’m Ahmed Syed, a dedicated Front End Developer based in Egypt. My programming journey
              began with FWD, which provided a solid foundation and sparked my passion for
              development. As I progressed, I sought out additional resources to broaden my
              knowledge. A pivotal moment was discovering{" "}
              <a
                rel="noreferrer"
                className="font-semibold hoverMe"
                target="_blank"
                href="https://www.youtube.com/@ElzeroWebSchool"
              >
                Elzero Web School
              </a>{" "}
              and learning from Professor{" "}
              <a
                rel="noreferrer"
                className="font-semibold hoverMe"
                target="_blank"
                href="https://www.facebook.com/OsElzero"
              >
                Osama Mohamed
              </a>
              , whose insights significantly influenced my approach to web design and development.
              Currently, I am part of the DEPI scholarship program, where I am enhancing my
              technical skills and staying updated with the latest trends and technologies. I
              specialize in creating responsive and visually engaging web applications using modern
              tools and frameworks. My objective is to continue growing as a developer, contribute
              to innovative projects, and engage with the tech community. Feel free to explore my
              work or get in touch for potential collaborations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

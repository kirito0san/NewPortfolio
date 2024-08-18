import "animate.css";
const Skills = () => {
  return (
    <div className="flex flex-col gap-20 justify-center h-full animate__animated animate__fadeInDown Skills">
      <p className="text-4xl font-bold cursor-default md:text-5xl">
        <span>M</span>
        <span>y </span>
        <span>S</span>
        <span>k</span>
        <span>i</span>
        <span>l</span>
        <span>l</span>
        <span>s</span>
      </p>
      <div className="text-xl font-normal Skill">
        <div className="">
          {" "}
          <img src={require("../assets/Html.svg").default} alt="" />
          <p className="hover:animate__jello hover:animate__animated">HTML</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/Visual Studio.svg").default} alt="" />
          <p>Visual Studio</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/git.svg").default} alt="" />
          <p>git</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/css.svg").default} alt="" />
          <p>css</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/js.svg").default} alt="" />
          <p>javascript</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/react.js.svg").default} alt="" />
          <p>react.js</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/tailwind.svg").default} alt="" />
          <p>tailwind css</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/redux.svg").default} alt="" />
          <p>Redux Toolkit</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/ts.svg").default} alt="" />
          <p>type script</p>
        </div>
        <div>
          {" "}
          <img
            src={
              require("../assets/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbG.svg")
                .default
            }
            alt=""
          />
          <p>rest api</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Spinner from "./ui/Spinner";

function Projects() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setData(data);
        }, 1000);
      })
      .catch((err) => {
        throw new Error("This is an error message" + err.message);
      });
  }, []);
  return (
    <div className="flex flex-wrap gap-4 justify-center py-5 project">
      {data.length === 0 ? (
        <Spinner />
      ) : (
        data.map((item) => (
          <div key={item._id} className="animate__animated animate__fadeInUp">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.name}
                </CardItem>

                <CardItem translateZ="100" rotateX={0} rotateZ={0} className="mt-4 w-full">
                  <img
                    src={item.preview}
                    className="object-contain w-full rounded-xl md:h-60 md:object-cover w- group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="flex gap-3 mt-2 max-w-sm text-xl text-neutral-500 dark:text-neutral-300"
                >
                  {item.Techs.map((elment) => {
                    return <span key={elment}>{elment} </span>;
                  })}
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={0}
                    as="button"
                    className="px-4 py-2 text-xs font-normal bg-black rounded-xl hover:bg-blue-500 dark:text-white"
                  >
                    <a target="_blank" href={item.live} rel="noreferrer">
                      {" "}
                      Live
                    </a>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={0}
                    as="button"
                    className="px-4 py-2 text-xs font-bold text-white bg-black rounded-xl hover:bg-gray-500 dark:bg-white dark:text-black"
                  >
                    <a target="_blank" href={item.github} rel="noreferrer">
                      {" "}
                      Github
                    </a>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))
      )}
    </div>
  );
}
export default Projects;

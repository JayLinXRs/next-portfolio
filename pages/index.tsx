import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <main>
      <div className={"mt-[110px]"}>
        <Image
          alt="left_0"
          src={"/left_0.svg"}
          width={"282.64px"}
          height={"291.78px"}
        />
      </div>
      <div className={"absolute top-12 right-0"}>
        <Image
          alt="left_1"
          src={"/left_1.svg"}
          width={"260px"}
          height={"350px"}
        />
      </div>
      <div className={"absolute right-0"}>
        <Image
          alt="left_2"
          src={"/left_2.svg"}
          width={"260px"}
          height={"344px"}
        />
      </div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   flex justify-center items-center flex-col"
      >
        <div>
          <Image alt="Me" src={"/me.svg"} width={"168px"} height={"400px"} />
        </div>
        <div>
          <p className="font-bold text-2xl text-center mt-[40px]">
            Hi, my name is Jay and I am a Front-End Developer
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;

import React, {useState , useEffect} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import FeatureCard from "../components/FeatureCard";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const [messiStats, setMessiStats] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/fetchMessiStat");
      const data = await response.json();
      setMessiStats(data.result);
    };
    console.log(messiStats);
    fetchData();
  }, []);

  return (
    <div className="flex flex-col bg-black min-h-[200vh]">
      <Head>
        <title>Messi All Time Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="relative w-full max-h-[40rem] h-screen" ref={ref}>
        <div className="relative flex flex-col h-full z-10">
          <Navbar />
          <div className="flex-1 flex flex-col justify-center items-center">
            <h1 className="text-white font-bold text-6xl">
            Lionel Andreas Messi
            </h1>
            <h1 className="text-white mt-3 font-bold text-5xl">
            All Time Stats
            </h1>
          </div>
        </div>
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{ y }}
        >
          <Image
            src="/assets/image1.jpg"
            alt="MESSI"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black" />
        </motion.div>
      </header>

      <main className="max-w-[70%] w-[70%] mx-auto my-8 z-50">
        <h1 className="text-white font-bold text-6xl my-8">
          ALL TIME STATS
        </h1>
        <div className="grid grid-cols-3 gap-x-8 gap-y-16">
          <FeatureCard feature="GAMES" desc={messiStats[0]} />
          <FeatureCard feature="GOALS" desc={messiStats[1]} />
          <FeatureCard feature="ASSISTS" desc={messiStats[2]} />
          <FeatureCard feature="HATTRICKS" desc={messiStats[3]} />
          <FeatureCard feature="PANELTIES" desc={messiStats[4]} />
          <FeatureCard feature="WINS" desc={messiStats[5]} />
          <FeatureCard feature="DRAWS" desc={messiStats[6]} />
          <FeatureCard feature="DEFEATS" desc={messiStats[7]} />

          
        </div>
        <div className="relative w-full h-96 mx-auto my-16 ">
          <Image
            src="/assets/image2.jpg"
            alt="messi"
            className="rounded-lg"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;

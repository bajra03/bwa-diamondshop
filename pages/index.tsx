import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/TransactionStep";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import Footer from "../components/organisms/Footer";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HEADER */}
      <MainBanner />

      {/* 3 COL FEATURE */}
      <TransactionStep />

      {/* 5 COL FEATURE GAME */}
      <FeaturedGame />

      {/* REACHED */}
      <Reached />

      {/* STORY */}
      <Story />

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;

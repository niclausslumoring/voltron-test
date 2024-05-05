import Head from "next/head";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Banner } from "../../components/Banner";
import { Banner2 } from "../../components/Banner2";
import { Feature } from "../../components/Feature";
import { Discover } from "../../components/Discover";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Voltron Study Case</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <meta name="description" content="Created by Niclauss Lumoring" />
      </Head>
      <Navbar />
      <Banner />
      <Feature />
      <Banner2 />
      <Discover />
      <Footer />
    </div>
  );
}

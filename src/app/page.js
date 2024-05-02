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

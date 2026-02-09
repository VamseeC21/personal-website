import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vamsee Cheruvu</title>
        <meta name="description" content="Vamsee Cheruvu - Software Engineer. Prev. @ Google, JPMorgan Chase. CS + Business at Ohio State." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Main />
      <About />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

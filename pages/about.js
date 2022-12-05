import { Header, Main } from "../components";
import Head from "next/head";
import axios from "axios";
import styles from "./../styles/About.module.css";
const About = (props) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Bitcoin</title>
          <link
            rel="icon"
            href="https://www.pngarts.com/files/3/Bitcoin-PNG-Image-with-Transparent-Background.png"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          ></link>
        </Head>
        <Header />
        <div className="container">
          <Main data={JSON.parse(props?.data)} />
        </div>
      </div>
    </>
  );
};
About.getInitialProps = async () => {
  const _ = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  return {
    data: JSON.stringify(_.data),
  };
};
export default About;

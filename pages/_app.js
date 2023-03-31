import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/icofont.min.css";
import "../styles/pe-icon-7-stroke.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-image-lightbox/style.css";
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/rtl.css";
import "../styles/corex.scss";
import "../styles/referal.css";
import App from "next/app";
import Head from "next/head";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";
import Script from "next/script";
import swal from "sweetalert2";

export default class MyApp extends App {
  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      2000
    );
  }
  componentWillUnmount() {
    window.Swal = swal;
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    function myVal() {
      console.log("thisss");
    }

    function optionSelected(answer) {
      console.log(answer);
      MySwal.clickConfirm();
    }

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="stylesheet" type="text/css" href="/styles/corex.scss" />
          <title>IO Investment Academy</title>
        </Head>

        <Component {...pageProps} />

        {/* Preloader */}
        <Loader loading={this.state.loading} />

        {/* Go Top Button */}
        <GoTop />

        <Script
          src="https://cdn.jsdelivr.net/npm/merkletreejs@latest/merkletree.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(
              `script loaded correctly, window.FB has been populated 3`
            )
          }
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/keccak256@latest/keccak256.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(
              `script loaded correctly, window.FB has been populated 4`
            )
          }
        />
      </>
    );
  }
}

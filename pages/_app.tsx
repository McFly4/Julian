import "../styles/globals.scss";
import "../styles/utilities/font.module.scss";
import Layout from "../components/Layout/Layout";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;

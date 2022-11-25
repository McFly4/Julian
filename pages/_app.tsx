import "../styles/globals.scss";
import "../styles/utilities/font.module.scss";
import Layout from "../components/Layout/Layout";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;

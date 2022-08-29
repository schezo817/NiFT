import "../styles/globals.css";
import type { AppProps } from "next/app";
import { BaseContext } from "next/dist/shared/lib/utils";
import Layout from "components/Layout";

function MyApp({ Component, pageProps }: AppProps): BaseContext {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;

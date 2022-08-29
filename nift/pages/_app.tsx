import "../styles/globals.css";
import Layout from "components/Layout";
import type { AppProps } from "next/app";
import { BaseContext } from "next/dist/shared/lib/utils";

function MyApp({ Component, pageProps }: AppProps): BaseContext {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;

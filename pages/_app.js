import "../styles/globals.css";

import Loyout from "../components/Loyout";

function MyApp({ Component, pageProps }) {
    return (
        <Loyout>
            <Component {...pageProps} />
        </Loyout>
    );
}

export default MyApp;

import "../styles/globals.css";

import Head from "next/head";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
					crossorigin="anonymous"
				></link>
				<link rel="preconnect" href="https://fonts.gstatic.com"></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&family=Fraunces:wght@900&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

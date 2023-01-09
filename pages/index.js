import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
	return (
		<>
			<Head>
				<title>Hulu V2</title>
			</Head>
			<Header />
			<Nav />
			<Results results={results} />
		</>
	);
}

export async function getServerSideProps(context) {
	const genre = context.query.genre;
	const request = await fetch(
		`https://api.themoviedb.org/3${
			requests[genre]?.url || request.fetchTrending.url
		}`
	);
	const data = await request.json();

	return {
		props: {
			results: data.results,
		},
	};
}

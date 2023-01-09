import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

const Thumbnail = ({ result }) => {
	return (
		<div>
			<Image
				layout="responsive"
				src={
					`https://image.tmdb.org/t/p/original${result.poster_path}` ||
					`https://image.tmdb.org/t/p/original${result.backdrop_path}`
				}
				width="1080"
				height="1920"
				alt="film poster"
			/>
			<div className="p-2">
				<p className="truncate max-w-md">{result.overview}</p>
				<h2>{result.title}</h2>
				<p>
					{result.media_type && `${result.media_type} • `}
					{result.release_date || result.first_air_date} •{" "}
					<ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
				</p>
			</div>
		</div>
	);
};

export default Thumbnail;

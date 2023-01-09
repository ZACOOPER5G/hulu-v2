import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
	return (
		<div
			ref={ref}
			className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 max-w-md"
		>
			<Image
				layout="responsive"
				src={
					`https://image.tmdb.org/t/p/original${result.backdrop_path}` ||
					`https://image.tmdb.org/t/p/original${result.poster_path}`
				}
				width={1920}
				height={1080}
				alt={
					result.backdrop_path === null || result.poster_path === null
						? "Film poster not available"
						: "film poster"
				}
			/>
			<div className="p-2">
				<p className="truncate max-w-md">{result.overview}</p>
				<h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
					{result.title}
				</h2>
				<p className="flex items-center opacity-0 group-hover:opacity-100">
					{result.media_type && `${result.media_type} • `}
					{result.release_date || result.first_air_date} •
					<ThumbUpIcon className="h-5 mx-2" />• {result.vote_count}
				</p>
			</div>
		</div>
	);
});

export default Thumbnail;

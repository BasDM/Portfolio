import React, { useRef, useEffect } from "react";

interface ProjectCardProps {
	title: string;
	description: string;
	coverImage?: string;
	isVideo?: boolean;
	githubLink?: string;
	shouldAutoplay?: boolean; // new prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	coverImage,
	isVideo,
	githubLink,
	shouldAutoplay = false,
}) => {
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		if (!isVideo || !videoRef.current) return;

		if (shouldAutoplay) {
			videoRef.current.play().catch(() => {
				/* autoplay blocked by browser; user can use controls */
			});
		} else {
			try {
				videoRef.current.pause();
				videoRef.current.currentTime = 0;
				videoRef.current.volume = 0.25;
			} catch {}
		}
	}, [isVideo, shouldAutoplay]);

	return (
		<div className="group relative bg-gray-800 hover:bg-gray-600 h-full rounded-2xl overflow-hidden shadow-xl mx-auto border border-gray-700 transition-colors duration-200">
			{/* Media Section */}
			<div className="relative w-full overflow-hidden bg-black">
				{coverImage && (
					<>
						{isVideo ? (
							<video
								ref={videoRef}
								src={coverImage}
								className="w-full h-full object-cover bg-black"
								controls
								autoPlay={shouldAutoplay}
								playsInline
								loop
								preload="metadata"
								controlsList="nodownload"
								disablePictureInPicture
								onContextMenu={(e) => e.preventDefault()}
							/>
						) : (
							<img
								src={coverImage}
								alt={title}
								className="w-full h-auto object-cover"
							/>
						)}
						{/* subtle gradient overlay to help text contrast */}
						<div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/60 to-transparent" />
					</>
				)}
			</div>

			{/* Content */}
			<div className="p-4 flex flex-col justify-between">
				<div>
					<h2 className="text-lg font-semibold text-white mb-1 line-clamp-1">
						{title}
					</h2>
					<p className="text-sm text-gray-100 line-clamp-3">{description}</p>
				</div>

				{githubLink && (
					<a
						href={githubLink}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-3 text-sm text-blue-300 hover:underline truncate">
						{githubLink}
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;

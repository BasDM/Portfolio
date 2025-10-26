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
			} catch {}
		}
	}, [isVideo, shouldAutoplay]);

	return (
		<div className="group relative bg-white rounded-2xl overflow-hidden shadow-md w-200 mx-auto border border-gray-200">
			{/* Media Section */}
			<div className="relative w-full h-100 overflow-hidden">
				{coverImage && (
					<>
						{isVideo ? (
							<video
								ref={videoRef}
								src={coverImage}
								className="w-full h-full object-cover"
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
								className="w-full h-full object-center"
							/>
						)}
					</>
				)}
			</div>

			{/* Content */}
			<div className="p-4 flex flex-col justify-between h-40">
				<div>
					<h2 className="text-lg font-semibold text-black mb-1 line-clamp-1">
						{title}
					</h2>
					<p className="text-sm text-gray-700 line-clamp-3">{description}</p>
				</div>

				{githubLink && (
					<a
						href={githubLink}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-3 text-sm text-blue-600 hover:underline truncate">
						{githubLink}
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;

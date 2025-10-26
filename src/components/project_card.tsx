import React from "react";

interface ProjectCardProps {
	title: string;
	description: string;
	coverImage?: string;
	isVideo?: boolean;
	githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	coverImage,
	isVideo,
	githubLink,
}) => {
	return (
		<div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-200 mx-auto border border-gray-200">
			{/* Media Section */}
			<div className="relative w-full h-100 overflow-hidden">
				{coverImage && (
					<>
						{isVideo ? (
							<video
								src={coverImage}
								className="w-full h-full object-cover"
								muted
								playsInline
								loop
								preload="metadata"
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
				{/* Soft overlay on hover */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

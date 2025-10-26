import { useState } from "react";
import ProjectCard from "../components/project_card";
import periskal from "../assets/periskal.png";
import GameDevVid from "../assets/GameDev.mp4";
import StarsBackground from "../components/StarsBackground";

function Projects() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const projects = [
		{
			title: "Periskal Academy",
			description:
				"An eductational platform built for skippers to learn the basics of navigating using Periskal software. Built with Java Spring Boot, Angular and MySQL and deployed using Docker.",
			isVideo: false,
			coverImage: periskal,
			githubLink: "https://github.com/SkyPromp/SoftwareProjectPeriskalAcademy",
		},
		{
			title: "Demon Dasher",
			description:
				"A 2D platformer built in Monogame, demonstrating SOLID principles and OOP design. The player must defeat enemies to progress through multiple levels.",
			isVideo: true,
			coverImage: GameDevVid,
			githubLink: "https://github.com/BasDM/GameDev_Project",
		},
	];

	const nextProject = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
	};

	const prevProject = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + projects.length) % projects.length
		);
	};

	return (
		<div className="relative flex flex-col items-center h-[calc(100vh-4rem)] bg-gray-900 text-gray-100 p-10">
			{/* subtle moving stars background */}
			<StarsBackground className="-z-1" />
			{/* Header Section */}
			<div className="max-w-3xl text-center mb-12 z-0">
				<h1 className="text-4xl font-bold mb-2 text-white">My Projects</h1>
				<p className="text-gray-100 text-base">
					A selection of my work. From software projects to creative
					experiments.
				</p>
			</div>

			{/* Carousel Section */}
			<div className="relative w-full max-w-4xl flex items-center justify-center px-6">
				{/* Left Arrow */}
				<button
					onClick={prevProject}
					className="absolute left-0 z-10 transform -translate-x-12 bg-gray-800 hover:bg-gray-700 text-gray-100 p-3 rounded-full shadow-md transition-all duration-200 hover:scale-110">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>

				{/* Carousel Container */}
				<div className="w-full overflow-hidden">
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
						{projects.map((project, index) => (
							<div
								key={index}
								className="w-full flex-shrink-0 flex justify-center px-0">
								<div
									className={`transition-all duration-500 ${
										index === currentIndex
											? "opacity-100 scale-100"
											: "opacity-30 scale-95"
									}`}>
									<ProjectCard
										title={project.title}
										description={project.description}
										isVideo={project.isVideo}
										coverImage={project.coverImage}
										githubLink={project.githubLink}
										shouldAutoplay={index === currentIndex && project.isVideo}
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Right Arrow */}
				<button
					onClick={nextProject}
					className="absolute right-0 z-10 transform translate-x-12 bg-gray-800 hover:bg-gray-700 text-gray-100 p-3 rounded-full shadow-md transition-all duration-200 hover:scale-110">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>

			{/* Dots Indicator */}
			<div className="flex gap-3 mt-10">
				{projects.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`w-3 h-3 rounded-full transition-all duration-200 ${
							index === currentIndex
								? "bg-blue-500 scale-110"
								: "bg-gray-600 hover:bg-gray-500"
						}`}
					/>
				))}
			</div>
		</div>
	);
}

export default Projects;

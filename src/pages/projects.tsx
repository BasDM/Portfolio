import { useState } from "react";
import ProjectCard from "../components/project_card";
import periskal from "../assets/periskal.png";
import GameDevVid from "../assets/GameDev.mp4";

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
		<div className="flex flex-col items-center h-[calc(100vh-4rem)] bg-gray-50 text-black p-10">
			{/* Header Section */}
			<div className="max-w-3xl text-center mb-12">
				<h1 className="text-4xl font-bold mb-2">My Projects</h1>
				<p className="text-gray-600 text-base">
					A selection of my work — from software projects to creative
					experiments.
				</p>
			</div>

			{/* Carousel Section */}
			<div className="relative w-full max-w-4xl flex items-center justify-center">
				{/* Left Arrow */}
				<button
					onClick={prevProject}
					className="absolute left-0 z-10 bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-900 p-3 rounded-full shadow-md transition-all duration-200 transform hover:scale-110"
					style={{ transform: "translateX(-50%)" }}>
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
								className="w-full flex-shrink-0 px-6 flex justify-center">
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
					className="absolute right-0 z-10 bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-900 p-3 rounded-full shadow-md transition-all duration-200 transform hover:scale-110"
					style={{ transform: "translateX(50%)" }}>
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
								? "bg-blue-600 scale-110"
								: "bg-gray-300 hover:bg-gray-400"
						}`}
					/>
				))}
			</div>
		</div>
	);
}

export default Projects;

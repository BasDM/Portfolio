import periskal from "../assets/periskal.png";
import GameDevVid from "../assets/GameDev.mp4";

export interface Project {
	title: string;
	description: string;
	coverImage: string;
	isVideo: boolean;
	githubLink: string;
	shouldAutoplay?: boolean;
}

export const projects: Project[] = [
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
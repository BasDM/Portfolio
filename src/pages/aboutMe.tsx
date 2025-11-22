import { motion } from "framer-motion";
import ProjectCard from "../components/project_card";
import ThemeParkBackground from "../components/rollercoaster_background";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projects } from "../Models/projects";
import { skills } from "../Models/skills";

export default function AboutMe() {
	const skillsRef = useRef(null);
	const isInView = useInView(skillsRef, { once: true, margin: "-100px" });
	const [projectsList, setProjectsList] = useState(projects);

	useEffect(() => {
		setProjectsList(projects);
	}, [projectsList]);

	return (
		<div className="relative min-h-[200vh] w-full px-6 md:px-12 lg:px-24 py-10 bg-linear-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
			<ThemeParkBackground />
			<div className="relative z-10">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-4xl md:text-5xl font-bold mb-6 text-center">
					About Me
				</motion.h1>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {},
						visible: {
							transition: {
								staggerChildren: 0.12,
							},
						},
					}}
					className="flex justify-center align-center gap-8 flex-wrap">
					{
						projectsList.map((project, index) => (
						<motion.div
							key={index}
							variants={{
								hidden: { opacity: 0, y: 40 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.5, ease: "easeOut" }}>
							<ProjectCard {...project} />
						</motion.div>
					))}
				</motion.div>

				<motion.div
					ref={skillsRef}
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="mt-20 flex flex-col items-center">
					<h2 className="text-3xl font-semibold mb-6">My Skills</h2>
					<div className="flex flex-wrap max-w-150 gap-4 justify-center">
						{skills.map((skill, idx) => (
							<motion.span
								key={skill}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={isInView ? { opacity: 1, scale: 1 } : {}}
								transition={{ delay: idx * 0.08, duration: 0.4 }}
								className="bg-slate-700 px-4 py-2 rounded-lg text-lg font-medium shadow">
								{skill}
							</motion.span>
						))}
					</div>
				</motion.div>

				<motion.div
					ref={skillsRef}
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="mt-20 flex flex-col items-center">
					<h2 className="text-3xl font-semibold mb-6">Who Am I?</h2>
					<div className="flex justify-center w-full">
						<motion.div
							key={"aboutMe"}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.5 }}
							className="bg-linear-to-br from-slate-700 to-slate-800 border border-slate-600 px-8 py-6 rounded-xl text-xl font-normal shadow-lg max-w-2xl">
							I'm Bas. A student software developer student with a passion for
							building user-friendly and sustainable applications.
							<br />
							<br />
							I'm energized by creating solutions that make a real impact on my
							clients' lives. With an eye for detail and a drive to continuously
							learn, I strive to make technology accessible and valuable.
							<br />
							<br />
							If i'm not working, you'll probably find me exploring new
							themeparks.
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

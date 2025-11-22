import { motion } from "framer-motion";

interface ProjectCardProps {
	title: string;
	description: string;
	coverImage: string;
	isVideo: boolean;
	githubLink: string;
	shouldAutoplay?: boolean;
}

export default function ProjectCard({
	title,
	description,
	coverImage,
	isVideo,
	githubLink,
	shouldAutoplay = true,
}: ProjectCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col w-200 h-full gap-10">
			<div className="w-full h-80 overflow-hidden rounded-xl">
				{isVideo ? (
					<video
						src={coverImage}
						className="w-full h-full object-cover"
						autoPlay={shouldAutoplay}
						muted
						loop
						playsInline
						controls={true}
						controlsList="nodownload noplaybackrate"
					/>
				) : (
					<img
						src={coverImage}
						alt={title}
						className="w-full h-full object-top object-cover"
					/>
				)}
			</div>

			<div className="flex flex-col gap-2">
				<h2 className="text-xl font-semibold text-white">{title}</h2>
				<p className="text-white/70 text-sm leading-relaxed">{description}</p>
			</div>

			<a
				href={githubLink}
				target="_blank"
				className="mt-auto inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
				<button className="bg-white/5 hover:bg-white/15 p-4 rounded-xl">View on GitHub</button>
			</a>
		</motion.div>
	);
}

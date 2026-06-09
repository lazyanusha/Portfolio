import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { projects, type Project } from "../../data/projects";

const filters = [
	{ label: "All", value: "all" },
	{ label: "Full Stack", value: "fullstack" },
	{ label: "Frontend", value: "frontend" },
	{ label: "Backend", value: "backend" },
];

export function Projects() {
	const [activeFilter, setActiveFilter] = useState("all");

	const filtered =
		activeFilter === "all"
			? projects
			: projects.filter((p) => p.category === activeFilter);

	return (
		<section id="projects" className="py-24 relative bg-surface-light/30">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeading
					label="Projects"
					title="Featured Work"
					description="Real-world applications and projects I've built."
				/>

				<div className="flex justify-center gap-2 mb-10">
					{filters.map((f) => (
						<button
							key={f.value}
							type="button"
							onClick={() => setActiveFilter(f.value)}
							className={`px-4 py-2 text-sm rounded-xl transition-all duration-300 ${
								activeFilter === f.value
									? "bg-primary text-white shadow-lg shadow-primary/20"
									: "text-text-muted hover:text-text bg-white/5 hover:bg-white/10"
							}`}
						>
							{f.label}
						</button>
					))}
				</div>

				<motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
					<AnimatePresence mode="popLayout">
						{filtered.map((project, idx) => (
							<ProjectCard key={project.id} project={project} index={idx} />
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
	return (
		<motion.a
			href={`/project/${project.id}`}
			layout
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ duration: 0.3, delay: index * 0.05 }}
			className="glass rounded-2xl p-6 group cursor-pointer hover:bg-surface-lighter/80 transition-all duration-300 flex flex-col"
		>
			<div className="w-full h-40 rounded-xl bg-gradient-to-br from-primary/10 via-surface-lighter to-accent/5 mb-5 flex items-center justify-center overflow-hidden">
				<div className="text-center p-4">
					<div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
						<svg
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							className="text-primary-light"
							aria-label="Project Icon"
						>
							<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
							<line x1="8" y1="21" x2="16" y2="21" />
							<line x1="12" y1="17" x2="12" y2="21" />
						</svg>
					</div>
					<p className="text-xs text-text-dim">{project.title}</p>
				</div>
			</div>

			<h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary-light transition-colors">
				{project.title}
			</h3>
			<p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
				{project.description}
			</p>

			<div className="flex flex-wrap gap-1.5 mb-4">
				{project.technologies.slice(0, 4).map((tech) => (
					<span
						key={tech}
						className="px-2.5 py-1 text-xs font-mono text-text-dim bg-white/5 rounded-lg border border-border/50"
					>
						{tech}
					</span>
				))}
			</div>

			<div className="flex items-center gap-2 text-sm text-primary-light font-medium">
				<span>View Details</span>
				<svg
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="group-hover:translate-x-1 transition-transform"
					aria-label="View Details"
				>
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</div>
		</motion.a>
	);
}

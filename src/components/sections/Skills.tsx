import type { JSX } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { skillCategories } from "../../data/skills";

const iconMap: Record<string, JSX.Element> = {
	Layout: (
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
			<line x1="3" y1="9" x2="21" y2="9" />
			<line x1="9" y1="21" x2="9" y2="9" />
		</svg>
	),
	Server: (
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
			<rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
			<line x1="6" y1="6" x2="6.01" y2="6" />
			<line x1="6" y1="18" x2="6.01" y2="18" />
		</svg>
	),
	Database: (
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<ellipse cx="12" cy="5" rx="9" ry="3" />
			<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
			<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
		</svg>
	),
	Wrench: (
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
		</svg>
	),
};

export function Skills() {
	return (
		<section id="skills" className="py-24 relative">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeading
					label="Skills"
					title="Technologies I Work With"
					description="A comprehensive overview of the tools and technologies I use daily."
				/>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{skillCategories.map((category, idx) => (
						<motion.div
							key={category.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.4, delay: idx * 0.1 }}
						>
							<div className="glass rounded-2xl p-6 h-full hover:bg-surface-lighter/80 transition-all duration-300 group">
								<div className="flex items-center gap-3 mb-5">
									<span className="text-primary-light group-hover:text-primary transition-colors">
										{iconMap[category.icon]}
									</span>
									<h3 className="text-sm font-semibold text-text">
										{category.label}
									</h3>
								</div>

								<div className="space-y-3">
									{category.skills.map((skill) => (
										<div key={skill.name}>
											<div className="flex justify-between items-center mb-1">
												<span className="text-sm text-text-muted">
													{skill.name}
												</span>
												<span className="text-xs text-text-dim font-mono">
													{skill.proficiency}%
												</span>
											</div>
											<div className="h-1 bg-border rounded-full overflow-hidden">
												<motion.div
													initial={{ width: 0 }}
													whileInView={{ width: `${skill.proficiency}%` }}
													viewport={{ once: true }}
													transition={{
														duration: 0.8,
														delay: idx * 0.1 + 0.3,
														ease: "easeOut",
													}}
													className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
												/>
											</div>
										</div>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

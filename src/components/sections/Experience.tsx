import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { experiences } from "../../data/experience";

export function Experience() {
	return (
		<section id="experience" className="py-24 relative bg-surface-light/30">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeading
					label="Experience"
					title="Professional Journey"
					description="My work experience and contributions to real-world projects."
				/>

				<div className="relative">
					<div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

					{experiences.map((exp, index) => (
						<motion.div
							key={exp.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="relative pl-8 md:pl-20 pb-12 last:pb-0"
						>
							<div className="absolute left-0 md:left-8 top-0 w-px h-full -translate-x-1/2">
								<div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-surface" />
							</div>

							<div className="glass rounded-2xl p-6 md:p-8 hover:bg-surface-lighter/80 transition-colors">
								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
									<div>
										<h3 className="text-lg font-semibold text-text">
											{exp.position}
										</h3>
										<p className="text-primary-light font-medium">
											{exp.company}
										</p>
									</div>
									<span className="text-sm text-text-dim font-mono whitespace-nowrap px-3 py-1 rounded-full bg-white/5 border border-border/50">
										{exp.duration}
									</span>
								</div>

								<ul className="space-y-2.5">
									{exp.highlights.map((highlight) => (
										<li
											key={`${exp.id}-${highlight}`}
											className="flex items-start gap-3 text-text-muted text-sm"
										>
											<span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
											{highlight}
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

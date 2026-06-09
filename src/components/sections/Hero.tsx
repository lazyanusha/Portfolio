import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { Button } from "../ui/Button";
import { GradientText } from "../ui/GradientText";

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
					<div className="flex-1 text-center lg:text-left">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-primary-light bg-primary/10 rounded-full border border-primary/20 mb-6">
								<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
								{profile.location}
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
						>
							Hi, I'm <GradientText as="span">{profile.name}</GradientText>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-lg sm:text-xl text-text-muted leading-relaxed mb-3 max-w-2xl lg:mx-0"
						>
							{profile.role}
						</motion.p>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.25 }}
							className="text-base text-text-dim leading-relaxed mb-8 max-w-xl lg:mx-0"
						>
							{profile.headline}
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="flex flex-wrap gap-3 justify-center lg:justify-start"
						>
							<Button href="#projects" variant="primary" size="lg">
								View Projects
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<title>View projects</title>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</Button>
							<a
								href="/Anusha_Shrestha_Fullstack_Intern_CV.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-text-muted bg-surface-lighter hover:bg-surface-lightest border border-surface-lightest hover:border-primary/30 rounded-lg transition-all duration-300 hover:text-text"
							>
								View CV
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<title>View CV</title>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>

							<Button href="#contact" variant="ghost" size="lg">
								Contact Me
							</Button>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{ scale: 1.03 }}
						transition={{
							duration: 0.6,
							delay: 0.2,
							type: "spring",
							stiffness: 200,
						}}
						className="shrink-0"
					>
						<div className="relative">
							<div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden glass-hover gradient-border">
								<div className="w-full h-full bg-gradient-to-br from-primary/20 via-surface-lighter to-accent/10 flex items-center justify-center">
									<motion.div
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.8, delay: 0.4 }}
										className="w-full h-full"
									>
										<picture>
											<img
												src="/anusha.jpeg"
												alt="Profile"
												loading="lazy"
												className="w-full h-full object-cover rounded-2xl"
											/>
										</picture>
									</motion.div>
								</div>
							</div>
							<div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl -z-10 blur-xl" />
						</div>
					</motion.div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<motion.a
					href="#about"
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
					className="block text-text-dim hover:text-text transition-colors"
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<title>Scroll down</title>
						<path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
					</svg>
				</motion.a>
			</motion.div>
		</section>
	);
}

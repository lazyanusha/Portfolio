import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { navigation, profile } from "../../data/profile";

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
				scrolled
					? "bg-surface/80 backdrop-blur-xl border-b border-border/50"
					: "bg-transparent"
			}`}
		>
			<nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<a
					href="./"
					className="text-lg font-semibold text-text hover:text-primary-light transition-colors"
				>
					{profile.name.split(" ")[0]}
					<span className="text-primary-light">.</span>
				</a>

				<div className="hidden md:flex items-center gap-1">
					{navigation.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="px-3 py-2 text-sm text-text-muted hover:text-text transition-colors rounded-lg hover:bg-white/5"
						>
							{item.label}
						</a>
					))}
				</div>

				<button
					type="button"
					onClick={() => setMobileOpen(!mobileOpen)}
					className="md:hidden p-2 text-text-muted hover:text-text"
					aria-label="Toggle menu"
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						role="img"
					>
						<title>{mobileOpen ? "Close menu" : "Open menu"}</title>

						{mobileOpen ? (
							<path
								d="M15 5L5 15M5 5l10 10"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
						) : (
							<path
								d="M3 5h14M3 10h14M3 15h14"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
						)}
					</svg>
				</button>
			</nav>

			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2 }}
						className="md:hidden border-t border-border/50 bg-surface/95 backdrop-blur-xl"
					>
						<div className="px-4 py-3 space-y-1">
							{navigation.map((item) => (
								<a
									key={item.href}
									href={item.href}
									onClick={() => setMobileOpen(false)}
									className="block px-3 py-2.5 text-sm text-text-muted hover:text-text rounded-lg hover:bg-white/5 transition-colors"
								>
									{item.label}
								</a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
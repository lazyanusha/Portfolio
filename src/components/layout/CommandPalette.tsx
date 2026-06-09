import { useCallback, useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { navigation } from "../../data/profile";
import { projects } from "../../data/projects";

export function CommandPalette() {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === "k") {
				e.preventDefault();
				setOpen((prev) => !prev);
			}
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, []);

	const prevOpen = useRef(open);
	useEffect(() => {
		if (open) {
			setTimeout(() => inputRef.current?.focus(), 100);
		} else if (prevOpen.current) {
			setQuery("");
		}
		prevOpen.current = open;
	}, [open]);

	const scrollTo = useCallback((href: string) => {
		setOpen(false);
		if (href.startsWith("#")) {
			const el = document.querySelector(href);
			el?.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	const filteredNav = navigation.filter((item) =>
		item.label.toLowerCase().includes(query.toLowerCase()),
	);
	const filteredProjects = projects.filter((item) =>
		item.title.toLowerCase().includes(query.toLowerCase()),
	);

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/60 backdrop-blur-sm"
					onClick={() => setOpen(false)}
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.96, y: -10 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.96, y: -10 }}
						transition={{ duration: 0.2 }}
						onClick={(e) => e.stopPropagation()}
						className="w-full max-w-lg mx-4 bg-surface-lighter border border-border-light rounded-2xl shadow-2xl overflow-hidden"
					>
						<div className="flex items-center gap-3 px-4 py-3 border-b border-border">
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								className="text-text-muted shrink-0"
								aria-label="Search"
							>
								<title>Search</title>
								<circle cx="11" cy="11" r="8" />
								<path d="M21 21l-4.35-4.35" />
							</svg>
							<input
								ref={inputRef}
								type="text"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder="Search sections and projects..."
								className="flex-1 bg-transparent text-sm text-text placeholder-text-dim outline-none"
							/>
							<kbd className="text-xs text-text-dim bg-surface px-1.5 py-0.5 rounded border border-border">
								ESC
							</kbd>
						</div>

						<div className="max-h-80 overflow-y-auto p-2">
							{filteredNav.length > 0 && (
								<div className="mb-2">
									<p className="px-2 py-1.5 text-xs font-semibold text-text-dim uppercase tracking-wider">
										Sections
									</p>
									{filteredNav.map((item) => (
										<button
											key={item.href}
											type="button"
											onClick={() => scrollTo(item.href)}
											className="w-full flex items-center gap-3 px-2 py-2.5 text-sm text-text-muted hover:text-text rounded-lg hover:bg-white/5 transition-colors text-left"
										>
											<span className="w-1.5 h-1.5 rounded-full bg-primary-light/50" />
											{item.label}
										</button>
									))}
								</div>
							)}

							{filteredProjects.length > 0 && (
								<div>
									<p className="px-2 py-1.5 text-xs font-semibold text-text-dim uppercase tracking-wider">
										Projects
									</p>
									{filteredProjects.map((item) => (
										<button
											key={item.id}
											type="button"
											onClick={() => scrollTo("#projects")}
											className="w-full flex items-center gap-3 px-2 py-2.5 text-sm text-text-muted hover:text-text rounded-lg hover:bg-white/5 transition-colors text-left"
										>
											<span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
											{item.title}
										</button>
									))}
								</div>
							)}

							{filteredNav.length === 0 && filteredProjects.length === 0 && (
								<p className="px-2 py-6 text-sm text-text-dim text-center">
									No results found
								</p>
							)}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

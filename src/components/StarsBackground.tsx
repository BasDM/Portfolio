import { useEffect, useRef } from "react";
import stars from "../assets/stars.jpeg";

export default function StarsBackground({ className }: { className?: string }) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const bgRef = useRef<HTMLDivElement | null>(null);
	const target = useRef({ x: 0, y: 0 });
	const pos = useRef({ x: 0, y: 0 });
	const raf = useRef<number | null>(null);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const updateTarget = (clientX: number, clientY: number) => {
			const rect = el.getBoundingClientRect();
			// normalized -0.5 .. 0.5
			const nx = (clientX - rect.left) / rect.width - 0.5;
			const ny = (clientY - rect.top) / rect.height - 0.5;
			target.current = { x: nx, y: ny };
		};

		const onMove = (e: MouseEvent) => updateTarget(e.clientX, e.clientY);
		const onTouch = (e: TouchEvent) => {
			if (e.touches[0])
				updateTarget(e.touches[0].clientX, e.touches[0].clientY);
		};
		const onLeave = () => (target.current = { x: 0, y: 0 });

		// listen on window so the cursor is tracked even when other elements are on top
		window.addEventListener("mousemove", onMove);
		window.addEventListener("touchmove", onTouch, { passive: true });
		window.addEventListener("mouseleave", onLeave);
		window.addEventListener("blur", onLeave);

		const tick = () => {
			const t = target.current;
			const p = pos.current;
			const ease = 0.08; // adjust for smoothness
			p.x += (t.x - p.x) * ease;
			p.y += (t.y - p.y) * ease;

			if (bgRef.current) {
				const maxPx = 40; // max translation
				bgRef.current.style.transform = `translate(${p.x * maxPx}px, ${
					p.y * maxPx
				}px) scale(1.12) translate(-50%, -50%)`;
			}
			raf.current = requestAnimationFrame(tick);
		};

		raf.current = requestAnimationFrame(tick);

		return () => {
			window.removeEventListener("mousemove", onMove);
			window.removeEventListener("touchmove", onTouch);
			window.removeEventListener("mouseleave", onLeave);
			window.removeEventListener("blur", onLeave);
			if (raf.current) cancelAnimationFrame(raf.current);
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className={`absolute inset-0 overflow-hidden z-0 ${className || ""}`}
			aria-hidden>
			{/* bg doesn't capture pointer events so it won't block UI */}
			<div
				ref={bgRef}
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					width: "130%",
					height: "130%",
					backgroundImage: `url(${stars})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					transform: "translate(-50%, -50%) scale(1.12)",
					willChange: "transform",
					pointerEvents: "none",
					filter: "brightness(0.5) contrast(1.05)",
				}}
			/>
		</div>
	);
}

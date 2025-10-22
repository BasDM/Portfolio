import { useEffect } from "react";

export default function usePreventZoom(
	containerRef: React.RefObject<HTMLElement | null>
) {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		let pointerInside = false;

		el.style.touchAction = "none";

		const onWheel = (e: WheelEvent) => {
			if (e.ctrlKey || e.metaKey) {
				e.preventDefault();
				return;
			}

			if (pointerInside) {
				const absX = Math.abs(e.deltaX);
				const absY = Math.abs(e.deltaY);
				if (absY > 0 && absY > absX * 2) {
					e.preventDefault();
					return;
				}
			}
		};

		const onGesture = (ev: Event) => {
			ev.preventDefault();
		};

		const onPointerEnter = () => (pointerInside = true);
		const onPointerLeave = () => (pointerInside = false);

		el.addEventListener("wheel", onWheel, { passive: false });
		el.addEventListener("gesturestart", onGesture);
		el.addEventListener("gesturechange", onGesture);
		el.addEventListener("pointerenter", onPointerEnter);
		el.addEventListener("pointerleave", onPointerLeave);

		return () => {
			el.removeEventListener("wheel", onWheel);
			el.removeEventListener("gesturestart", onGesture);
			el.removeEventListener("gesturechange", onGesture);
			el.removeEventListener("pointerenter", onPointerEnter);
			el.removeEventListener("pointerleave", onPointerLeave);
			el.style.touchAction = "";
		};
	}, [containerRef]);
}

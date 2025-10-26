import Spline from "@splinetool/react-spline";
import { useRef } from "react";
import { useNavigate } from "react-router";
import usePreventZoom from "../services/preventZoom";

function Home() {
	const navigate = useNavigate();
	const containerRef = useRef<HTMLDivElement | null>(null);

	usePreventZoom(containerRef);

	function onMousePress(e: any) {
		if (e.target.name === "ProjectsFolder") {
			navigate("/projects");
		}
	}
	return (
		// attach ref and block touch-action so pinch/scroll don't trigger browser gestures
		<div ref={containerRef} className="w-full h-[calc(100vh-4rem)] bg-gray-900">
			<Spline
				scene="https://prod.spline.design/3Evwac6TAsSRYVwC/scene.splinecode"
				onSplineMouseDown={onMousePress}
			/>
		</div>
	);
}
export default Home;

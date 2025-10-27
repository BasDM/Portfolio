import Spline from "@splinetool/react-spline";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

function Home() {
	const navigate = useNavigate();
	const containerRef = useRef<HTMLDivElement | null>(null);
	const splineRef = useRef<any>(null);
	const [isLoading, setIsLoading] = useState(true);

	function onLoad(spline: any) {
		splineRef.current = spline;
		if(splineRef.current){
			setTimeout(() => {
				setIsLoading(false);
			}, 2000);
		}
	}

	async function onMousePress(e: any) {
		if (e.target.name === "ProjectsFolder") {
			const obj = splineRef.current.findObjectByName("ProjectsFolder");
			if (obj) {
				setTimeout(() => {
					navigate("/projects");
				}, 3300);
			}
		}
	}

	return (
		<div
			ref={containerRef}
			className="w-full h-[calc(100vh-4rem)] bg-gray-900 relative">
			{isLoading && (
				<div className="absolute inset-0 flex items-center justify-center z-10">
					<div className="w-12 h-12 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
				</div>
			)}
			<Spline
				scene="https://prod.spline.design/3Evwac6TAsSRYVwC/scene.splinecode"
				onLoad={onLoad}
				onSplineMouseDown={onMousePress}
			/>
		</div>
	);
}
export default Home;

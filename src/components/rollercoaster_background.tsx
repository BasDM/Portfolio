export default function RollercoasterBackground() {
	return (
		// Theme park SVG background
		<div className="absolute inset-0 pointer-events-none z-0 opacity-20">
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 1440 900"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				{/* Rollercoaster curve */}
				<path
					d="M0,800 Q720,400 1440,800"
					stroke="#64748b"
					strokeWidth="18"
					fill="none"
				/>
				{/* Support beams under the rollercoaster curve */}
				{(() => {
					// Quadratic Bezier: p0, p1, p2
					const p0 = { x: 0, y: 800 };
					const p1 = { x: 720, y: 400 };
					const p2 = { x: 1440, y: 800 };
					// Choose beam positions along the curve (t values)
					const beams = [0.1, 0.25, 0.4, 0.55, 0.7, 0.85];
					return (
						<>
							{beams.map((t, i) => {
								const x =
									Math.pow(1 - t, 2) * p0.x +
									2 * (1 - t) * t * p1.x +
									Math.pow(t, 2) * p2.x;
								const y =
									Math.pow(1 - t, 2) * p0.y +
									2 * (1 - t) * t * p1.y +
									Math.pow(t, 2) * p2.y;
								return (
									<line
										key={i}
										x1={x}
										y1={y}
										x2={x}
										y2={900}
										stroke="#475569"
										strokeWidth="10"
										opacity="0.7"
									/>
								);
							})}
						</>
					);
				})()}
				<circle
					cx="1200"
					cy="500"
					r="60"
					stroke="#475569"
					strokeWidth="8"
					fill="none"
				/>
				{[...Array(8)].map((_, i) => (
					<circle
						key={i}
						cx={1200 + 50 * Math.cos((i * Math.PI) / 4)}
						cy={500 + 50 * Math.sin((i * Math.PI) / 4)}
						r="8"
						fill="#64748b"
					/>
				))}
				{/*Rollercoaster train*/}
				{(() => {
					const p0 = { x: 0, y: 800 };
					const p1 = { x: 590, y: 400 };
					const p2 = { x: 1440, y: 800 };
					const carts = [0.18, 0.22, 0.26, 0.3, 0.34];
					return (
						<>
							{carts.map((t, i) => {
								const x =
									Math.pow(1 - t, 2) * p0.x +
									2 * (1 - t) * t * p1.x +
									Math.pow(t, 2) * p2.x;
								const y =
									Math.pow(1 - t, 2) * p0.y +
									2 * (1 - t) * t * p1.y +
									Math.pow(t, 2) * p2.y;
								// Tangent angle for rotation
								const dx = 2 * (1 - t) * (p1.x - p0.x) + 2 * t * (p2.x - p1.x);
								const dy = 2 * (1 - t) * (p1.y - p0.y) + 2 * t * (p2.y - p1.y);
								const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
								return (
									<g
										key={i}
										transform={`translate(${x},${y}) rotate(${angle})`}>
										<rect
											x={-25}
											y={-30}
											width={50}
											height={30}
											rx={8}
											fill="#64748b"
											stroke="#475569"
											strokeWidth={3}
										/>
										<circle
											cx={-15}
											cy={0}
											r={7}
											fill="#334155"
											stroke="#475569"
											strokeWidth={2}
										/>
										<circle
											cx={15}
											cy={0}
											r={7}
											fill="#334155"
											stroke="#475569"
											strokeWidth={2}
										/>
									</g>
								);
							})}
						</>
					);
				})()}
			</svg>
		</div>
	);
}

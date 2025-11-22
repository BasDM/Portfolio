import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/navbar";
import AboutMe from "./pages/aboutMe";
import Home from "./pages/home";

function App() {
	return (
		<>
			<div className="sticky top-0 z-50">
				<Navbar />
			</div>
			<Router>
				<div className="min-h-[calc(100vh-4rem)]">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/aboutMe" element={<AboutMe />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;

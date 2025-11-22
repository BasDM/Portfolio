import { index, route } from "@react-router/dev/routes";

export default [
	//route("route", "./file.tsx")
	index("./App.tsx"),
	route("/", "./pages/home.tsx"),
	route("aboutMe", "./pages/aboutMe.tsx"),
];

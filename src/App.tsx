import { Route, Routes } from "react-router-dom";

import Topbar from "./components/Topbar/Topbar";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";

function App() {
	return (
		<div>
			<Topbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;

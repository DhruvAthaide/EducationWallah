import "./App.css";
import Authentication from "./components/authentication/authentication.component";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home.component";
import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Authentication />} />
      </Route>
      <Route path="home" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

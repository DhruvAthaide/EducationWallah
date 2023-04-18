import "./App.css";
import Authentication from "./components/authentication/authentication.component";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home.component";
function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Authentication />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

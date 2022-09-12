import Body from "./components/Body/body";
import { Route, Routes } from "react-router-dom";
import TeamInfo from "./components/Body/Teams/TeamInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/team" element={<TeamInfo />} />
      </Routes>
    </div>
  );
}

export default App;

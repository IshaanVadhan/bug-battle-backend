import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/App.css";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import QuestionForm from "./QuestionForm";
import BattleInstructions from "./BattleInstructions";
import CreateBug from "./CreateBug";
import Waiting from "./Waiting";
import Team from "./Team";
import AboutUs from "./About";
import Sponsor from "./Sponsor";
import Solution from "./Solution";
import ProtectedRoutes, {
  BugProtector,
  RedirectRoutes,
  SolutionProtector,
} from "./helpers/route-protector";
import CodeEditor from "./CodeEditor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<RedirectRoutes />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/question" element={<QuestionForm />}></Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/sponsor" element={<Sponsor />}></Route>
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route element={<BugProtector />}>
              <Route path="/bugbattle" element={<CreateBug />}></Route>
            </Route>
            <Route path="/waitingscreen" element={<Waiting />}></Route>
            <Route element={<SolutionProtector />}>
              <Route path="/solution" element={<Solution />}></Route>
            </Route>
            <Route
              path="/instructions"
              element={<BattleInstructions />}
            ></Route>
          </Route>
          <Route path="/CodeEditor" element={<CodeEditor />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map";
import Home from './Components/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateProject } from './Components/contextReducer';

function App() {
  return (
    <CreateProject >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CreateProject>
  );
}

export default App;

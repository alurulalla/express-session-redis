import { Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import "./App.css";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={HomePage} />
      <Route path="/dashboard" exact component={DashboardPage} />
    </div>
  );
}

export default App;

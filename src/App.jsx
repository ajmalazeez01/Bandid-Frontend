import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AdminRoute from "./Routes/AdminRoute";
import BandRoute from "./Routes/BandRoute";
import UserRoute from "./Routes/UserRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/admin/*" element = {<AdminRoute/>}   />
          <Route path = "/band/*" element = {<BandRoute/>}   />
          <Route path = "/user/*" element = {<UserRoute/>}   />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

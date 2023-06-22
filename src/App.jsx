import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AdminRoute from "./Routes/AdminRoute";
import UserRoute from "./Routes/UserRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/*" element = {<UserRoute/>}   />
          <Route path = "/admin/*" element = {<AdminRoute/>}   />
          {/* <Route path = "/*" element = {<BandRoute/>}   /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

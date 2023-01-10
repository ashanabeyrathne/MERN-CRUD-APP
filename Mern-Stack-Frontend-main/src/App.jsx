import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./app/log-in/login";
import Signup from "./app/sign-up/signup";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;

import Login from "./screen/Login";
import SignIn from "./screen/SignIn";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from "./screen/Dashboard";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`/register/`} element={<SignIn />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/`} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

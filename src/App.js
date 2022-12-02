import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouteOutlet from "./components/authentication/PublicOutlate";

import HomePage from "./pages/Home.page";
import SignupPage from "./pages/Signup.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/*" element={<PublicRouteOutlet />}>
            <Route path="signup" element={<SignupPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Front from "./pages/Front";
// import Order from "";
import Order from "./pages/Order";
import SignUpData from "./pages/SignUpData";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (<>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Order />} />
        <Route path="/Front" element={<Front />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up-data" element={<SignUpData />} />
      </Routes>
    </BrowserRouter>
  </>  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import './App.css'
import Cart from "./pages/cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

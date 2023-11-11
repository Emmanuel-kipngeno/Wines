import "./App.css";
import Home from "./Home";
import NavigationBar from "./NavigationBar";
import WineCart from "./WineCart";
import BodyRecommend from "./BodyRecommend";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryList from "./Category";

function App() {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<WineCart />} />
          <Route path="/recommendation" element={<BodyRecommend />} />
          <Route path="/category" element={<CategoryList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

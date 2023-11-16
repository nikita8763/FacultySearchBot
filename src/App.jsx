import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main_Page from "./pages/Main_page/Main_page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main_page" element={<Main_Page/>}/>
      </Routes>
    </BrowserRouter>
  );
}
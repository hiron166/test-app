import { Top } from "./pages/Top";
import { Detail } from "./pages/Detail";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/posts/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;

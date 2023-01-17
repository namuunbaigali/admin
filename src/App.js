import "./styles/style.css";
import "./styles/bootstrap.css";
import Navbar from "./components/Navbar";
import DynamicModal from "./components/utils/DynamicModal";
import { useState } from "react";
import PostCreate from "./components/Blogs/PostCreate";
import Heading from "./components/Heading";
import { Route, Routes } from "react-router-dom";
import Articles from "./page/Articles";
import Home from "./page/Home";

export default function App() {
  const [show, setShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar onToggle={() => setMenuShow(!menuShow)} />
      <div className="main-wrapper">
        <div className={`off-menu bg-dark ${menuShow && "show"}`}>Test</div>
        <div className="off-menu-sibling">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/articles"
              element={<Articles menuShow={menuShow} handleShow={handleShow} />}
            />
          </Routes>
        </div>
      </div>
      <DynamicModal
        show={show}
        handleClose={handleClose}
        title="Create post"
        content={<PostCreate />}
      />
    </>
  );
}

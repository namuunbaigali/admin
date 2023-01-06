import "./styles/style.css";
import "./styles/bootstrap.css";
import Navbar from "./components/navbar";
import HeadingTable from "./components/Heading";
import Table from "./components/table";
// import Select from "react-select";
import Select from "react-select";
import DynamicModal from "./components/utils/DynamicModal";
import { useState } from "react";
import PostCrete from "./components/Blogs/PostCreate";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const options = [
  //   { value: "chocolate", label: "nohoi" },
  //   { value: "strawberry", label: "gahia" },
  //   { value: "vanilla", label: "huts" },
  //   { value: "vanilla", label: "uhna" },
  // ];
  return (
    <>
      <Navbar />
      <div className="container-sm body-container">
        <DynamicModal
          show={show}
          handleClose={handleClose}
          title=" Create post"
          content={<PostCrete />}
        />
        <HeadingTable title="Blog posts" handleShow={handleShow} />
        <Table />
      </div>
    </>
  );
}
export default App;

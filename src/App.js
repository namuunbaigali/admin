import "./styles/style.css";
import "./styles/bootstrap.css";
import Navbar from "./components/navbar";
import HeadingTable from "./components/Heading";
import Table from "./components/table";
// import Select from "react-select";
import Select from "react-select";

function App() {
  const options = [
    { value: "chocolate", label: "nohoi" },
    { value: "strawberry", label: "gahia" },
    { value: "vanilla", label: "huts" },
    { value: "vanilla", label: "uhna" },
  ];
  return (
    <>
      <Navbar />
      <div className="container-sm body-container">
        <Select value={[]} options={options} />
        <HeadingTable title="Blog posts" />
        <Table />
      </div>
    </>
  );
}
export default App;

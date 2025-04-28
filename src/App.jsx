import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Editor from "@monaco-editor/react";
import Select from "react-select";

const App = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
      <Navbar />
      <div
        className="main flex items-center justify-between"
        style={{ height: "calc(100vh - 90px)" }}
      >
        <div className="left h-[80%] w-[50%]">
          <Select
            value={options[0]}
            options={options}
            onChange={(e) => setSelectedOption(e.value)}
          />
          <Editor
            height="100%"
            theme="vs-dark"
            language="javascript"
            defaultValue="// some comment"
          />
          ;
        </div>
      </div>
    </>
  );
};

export default App;

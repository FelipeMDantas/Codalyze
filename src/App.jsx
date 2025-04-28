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

  const darkThemeStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#2c2c2c",
      borderColor: state.isFocused ? "#555" : "#444",
      boxShadow: state.isFocused ? "0 0 0 1px #888" : "none",
      "&:hover": {
        borderColor: "#666",
      },
      color: "#fff",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#2c2c2c",
      color: "#fff",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused
        ? "#3a3a3a"
        : state.isSelected
        ? "#555"
        : "#2c2c2c",
      color: "#fff",
      "&:active": {
        backgroundColor: "#444",
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "#fff",
    }),
    input: (base) => ({
      ...base,
      color: "#fff",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#aaa",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#aaa",
      "&:hover": {
        color: "#fff",
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: "#555",
    }),
  };

  return (
    <>
      <Navbar />
      <div
        className="main flex items-center justify-between"
        style={{ height: "calc(100vh - 90px)" }}
      >
        <div className="left h-[80%] w-[50%]">
          <Select
            value={selectedOption}
            options={options}
            onChange={(e) => setSelectedOption(e)}
            styles={darkThemeStyles}
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

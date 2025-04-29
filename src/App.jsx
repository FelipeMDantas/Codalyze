import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Editor from "@monaco-editor/react";
import Select from "react-select";

const App = () => {
  const options = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "csharp", label: "C#" },
    { value: "cpp", label: "C++" },
    { value: "ruby", label: "Ruby" },
    { value: "go", label: "Go" },
    { value: "php", label: "PHP" },
    { value: "typescript", label: "TypeScript" },
    { value: "rust", label: "Rust" },
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
        className="main flex items-center"
        style={{ height: "calc(100vh - 90px)" }}
      >
        <div className="left h-[80%] w-[50%]">
          <div className="tabs px-5 mb-3 w-full flex items-center justify-between">
            <Select
              value={selectedOption}
              options={options}
              onChange={(e) => setSelectedOption(e)}
              styles={darkThemeStyles}
              className="w-[40%]"
            />
            <div className="flex gap-[10px]">
              <button className="btnNormal bg-zinc-900 min-w-[120px] transition-all hover:bg-zinc-800">
                Fix Code
              </button>
              <button className="btnNormal bg-zinc-900 min-w-[120px] transition-all hover:bg-zinc-800">
                Review
              </button>
            </div>
          </div>
          <Editor
            height="100%"
            theme="vs-dark"
            language="javascript"
            defaultValue="// some comment"
          />
          ;
        </div>

        <div className="right p-[10px] bg-zinc-900 w-[50%] h-[85%]">
          <div className="topTab border-y-[1px] border-[#27272a] flex items-center justify-between h-[60px]">
            <p className="font-[700] text-[17px]">Response</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

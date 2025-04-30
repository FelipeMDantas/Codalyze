import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Editor from "@monaco-editor/react";
import Select from "react-select";
import { GoogleGenAI } from "@google/genai";

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

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API });

  async function reviewCode() {
    setLoading(true);
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `You are an expert-level software developer, skilled in writing efficient, clean, and advanced code.
I’m sharing a piece of code written in ${selectedOption.value}.
Your job is to deeply review this code and provide the following:

1️⃣ A quality rating: Better, Good, Normal, or Bad.
2️⃣ Detailed suggestions for improvement, including best practices and advanced alternatives.
3️⃣ A clear explanation of what the code does, step by step.
4️⃣ A list of any potential bugs or logical errors, if found.
5️⃣ Identification of syntax errors or runtime errors, if present.
6️⃣ Solutions and recommendations on how to fix each identified issue.

Analyze it like a senior developer reviewing a pull request.

Code: ${code}
`,
    });
    setResponse(response.text);
    setLoading(false);
  }

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
            <div className="flex gap-[40px]">
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
            language={selectedOption.value}
            value={code}
            onChange={(e) => setCode(e)}
          />
          ;
        </div>

        <div className="right p-[10px] bg-zinc-900 w-[50%] h-[90%] mt-6">
          <div className="topTab border-y-[1px] border-[#27272a] flex mt-3 items-center justify-between h-[60px]">
            <p className="font-[700] text-[17px]">Response {code.toString()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

import React, { useState } from "react";
import "./style/CodeEditor.css";
const languages = ["java", "cpp", "python"];

const CodeEditor = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleRun = () => {
    // Simulate running the code (replace with your actual execution logic)
    setOutput("Output will be displayed here...");
  };

  return (
    <div className="code-editor">
      <div className="header">
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <button onClick={handleRun}>Run</button>
        {/* <button onClick={handleRun}>Submit</button> */}
        <span className="timer">Time: 00:00</span>
      </div>
      <div className="editor-container">
        <div className="code-editor-wrapper">
          <textarea
            className="code-editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="input-output">
          <div className="input-wrapper">
            <textarea className="input" placeholder="Input" />
          </div>
          <div className="output-wrapper">
            <pre className="output">{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;

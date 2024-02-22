import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/Editor.css";
import axios from "axios";
const CreateBug = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [exInput, setExInput] = useState("");
  const [exOutput, setExOutput] = useState("");
  const [result, setResult] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const questionId = user.questionId;
  const handleChange = (event) => {
    setCode(event.target.value);
  };
  const buttonRef = useRef(null);
  const [compileCount, setCompileCount] = useState(
    parseInt(localStorage.getItem("bugCompile")) || 0
  );

  const submitBug = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://bug-battle-backend.onrender.com/bugs/create", {
        submittedBy: user._id,
        questionId: questionId,
        buggedCode: code,
      });
      localStorage.setItem("bug", JSON.stringify(response.data));
      localStorage.setItem("bugTimer", 1);
      navigate("/waitingscreen");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://bug-battle-backend.onrender.com/questions/get?questionId=${questionId}`
        );
        setCode(response.data.code);
        setLanguage(response?.data.language);
        setExInput(response?.data?.exampleInput);
        setExOutput(response?.data?.exampleOutput);
        localStorage.setItem("language", response?.data.language);
        localStorage.setItem("exInput", response?.data?.exampleInput);
        localStorage.setItem("exOutput", response?.data?.exampleOutput);
        //console.log(code);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  var minutes = 10; //5
  const [seconds, setSeconds] = useState(
    parseInt(localStorage.getItem("bugSec")) || minutes * 60
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!code?.data?.code) {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            buttonRef.current.click();
            clearInterval(intervalId);
            localStorage.setItem("bugTimer", 1);
            return prevSeconds;
          }
          const newSeconds = prevSeconds - 1;
          localStorage.setItem("bugSec", newSeconds);
          return newSeconds;
        });
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [minutes, code]);

  const displaySeconds = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  const displayMinutes =
    Math.floor(seconds / 60) < 10
      ? `0${Math.floor(seconds / 60)}`
      : Math.floor(seconds / 60);

  const compileCode = (e) => {
    e.preventDefault();
    if (compileCount < 5) {
      const data = { code: code, lang: language };
      axios
        .post("https://bug-battle-backend.onrender.com/compile", data)
        .then(function (response) {
          console.log("response: ", response);
          if (response?.data?.output || response?.data?.output === "") {
            setResult({ type: "success", data: response?.data?.output });
          } else if (response?.data?.error) {
            setResult({ type: "error", data: response?.data?.error });
          }
          localStorage.setItem("disable", 1);
          localStorage.setItem("codeStatus", 1);
          setCompileCount((prevCount) => {
            const newCount = prevCount + 1;
            localStorage.setItem("bugCompile", newCount); // Store compile count in local storage
            return newCount;
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      e.target.disabled = true;
    }
  };

  return (
    <div>
      <nav>
        <div>
          <p className="title">BUG BATTLE</p>
        </div>
        <div id="timer">
          {displayMinutes}:{displaySeconds}
        </div>
        <button className="btn" onClick={submitBug} ref={buttonRef}>
          Submit
        </button>
      </nav>

      <div className="container">
        <div className="questionExtra">
          <textarea
            id="html"
            placeholder="Example Input"
            value={exInput}
            disabled
          ></textarea>
          <textarea
            id="html"
            placeholder="Example Output"
            value={exOutput}
            disabled
          ></textarea>
        </div>
        <textarea
          className="code"
          id="html"
          placeholder="Your Code is Here"
          value={code}
          onChange={handleChange}
        ></textarea>
        <textarea
          className="compiled"
          id="html"
          placeholder="Compiler Output"
          value={result?.data}
          disabled
        ></textarea>
      </div>
      <br />
      <button onClick={compileCode} className="compilebtn">
        Compile ({5 - compileCount})
      </button>
    </div>
  );
};

export default CreateBug;

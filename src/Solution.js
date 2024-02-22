import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Solution = () => {
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "python"
  );
  const [exInput, setExInput] = useState(localStorage.getItem("exInput") || "");
  const [exOutput, setExOutput] = useState(
    localStorage.getItem("exOutput") || ""
  );
  const [result, setResult] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;
  const questionId = user?.questionId;
  const handleChange = (event) => {
    setCode(event.target.value);
  };
  const [compileCount, setCompileCount] = useState(
    parseInt(localStorage.getItem("solCompile")) || 0
  );

  const submitSolution = async (event) => {
    event.preventDefault();
    const bug = JSON.parse(localStorage.getItem("bug"));
    const bugId = bug._id;
    try {
      console.log();
      const response = await axios.post(
        "https://bug-battle-backend.onrender.com/solutions/create",
        {
          submittedBy: userId,
          questionId: questionId,
          bugId: bugId,
          solutionCode: code,
        }
      );
      console.log(response.data);
      alert("Code submitted");
      localStorage.removeItem("user");
      localStorage.setItem("solTimer", 1);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  var minutes = 10; //5
  const [seconds, setSeconds] = useState(
    parseInt(localStorage.getItem("solSec")) || minutes * 60
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!code?.data?.code) {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            buttonRef.current.click();
            clearInterval(intervalId);
            localStorage.setItem("solTimer", 1);
            localStorage.removeItem("user");
            navigate("/");
            return prevSeconds;
          }
          const newSeconds = prevSeconds - 1;
          localStorage.setItem("solSec", newSeconds);
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
            localStorage.setItem("solCompile", newCount); // Store compile count in local storage
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        //console.log(questionId+" "+userId)
        const response = await axios.get("https://bug-battle-backend.onrender.com/bugs/get", {
          params: {
            questionId: questionId,
            submittedBy: userId,
          },
        });
        //console.log(response.data.buggedCode)
        setCode(response.data.buggedCode);
        localStorage.setItem("bug", JSON.stringify(response.data));
        //console.log(code);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <nav>
        <div>
          <p className="title">BUG BATTLE</p>
        </div>
        <div id="timer">
          {displayMinutes}:{displaySeconds}
        </div>
        <button ref={buttonRef} className="btn" onClick={submitSolution}>
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

export default Solution;

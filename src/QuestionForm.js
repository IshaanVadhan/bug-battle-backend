import axios from "axios";
import React, { useState } from "react";
import "./style/forms.css";

const QuestionForm = () => {
  const [formData, setFormData] = useState({
    language: "",
    code: "",
    exampleInput: "", // Added example input field
    exampleOutput: "", // Added example output field
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://bug-battle-backend.onrender.com/questions/create",
        formData
      );
      console.log(response.data);
      alert("Question added");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h1 className="header">Question Form</h1>
      <form className="form1" onSubmit={handleSubmit}>
        <div className="field">
          <div>
            <label className="label">Language</label>
            <input
              type="text"
              name="language"
              placeholder="Java/cpp/python"
              value={formData.language}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="label">Code</label>
            <textarea
              name="code"
              placeholder="Enter Code"
              rows={5}
              cols={20}
              value={formData.code}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label className="label">Example Input</label>
            <textarea
              name="exampleInput"
              placeholder="Enter Example Input"
              rows={3}
              cols={20}
              value={formData.exampleInput}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label">Example Output</label>
            <textarea
              name="exampleOutput"
              placeholder="Enter Example Output"
              rows={3}
              cols={20}
              value={formData.exampleOutput}
              onChange={handleChange}
            />
          </div>
          <button className="btn">ADD QUESTION</button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;

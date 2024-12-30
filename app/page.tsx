"use client";

import { useState } from "react";

export default function Home() {
  const [grades, setGrades] = useState([]);
  const [credits, setCredits] = useState([]);
  const [grade, setGrade] = useState("");
  const [credit, setCredit] = useState("");
  const [cgpa, setCgpa] = useState(0);

  function clickHandler() {
    const updatedGrades = [...grades, grade];
    const updatedCredits = [...credits, credit];
    setGrades(updatedGrades);
    setCredits(updatedCredits);
    setGrade("");
    setCredit("");
  }

  function calculate() {
    let weightedSum = 0;
    let creditsSum = 0;
    for (let i = 0; i < grades.length; i++) {
      weightedSum += Number(grades[i]) * Number(credits[i]);
      creditsSum += Number(credits[i]);
    }
    setCgpa(weightedSum / creditsSum);
  }

  return (
    <div className="flex flex-col gap-10">
      <div>
        {grades.map((grade, index) => (
          <div key={index} className="flex gap-3">
            <p>Subject {index + 1}</p>
            <p>Grade: {grade}</p>
            <p>Credits: {credits[index]}</p>
          </div>
        ))}
      </div>
      <div>
        <input
          placeholder="Grade (0 to 10)"
          className="border 2"
          value={grade}
          onChange={(e) => {
            setGrade(e.target.value);
          }}
        ></input>
        <input
          placeholder="Credits"
          className="border-2"
          value={credit}
          onChange={(e) => {
            setCredit(e.target.value);
          }}
        ></input>
        <button className="border-2" onClick={clickHandler}>
          Add Subject
        </button>
      </div>
      <div>
        <button className="border-2" onClick={calculate}>
          Calculate GCPA
        </button>
        <h1 className="text-3xl">CGPA: {cgpa}</h1>
      </div>
    </div>
  );
}

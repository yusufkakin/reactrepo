import React, { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [showText, setShowText] = useState(false);

  const increaseOne = () => {
    setGood(good + 1);
    setShowText(true);
  };
  const neutralOne = () => {
    setNeutral(neutral + 1);
    setShowText(true);
  };
  const decreaseOne = () => {
    setBad(bad + 1);
    setShowText(true);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button
        increaseOne={increaseOne}
        neutralOne={neutralOne}
        decreaseOne={decreaseOne}
      />
      {showText ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <div>
          <h2>statistics</h2>
          <p>no feedback given</p>
        </div>
      )}
    </div>
  );
};

const Button = ({ increaseOne, neutralOne, decreaseOne }) => {
  return (
    <div>
      <button onClick={increaseOne}>good</button>
      <button onClick={neutralOne}>neutral</button>
      <button onClick={decreaseOne}>bad</button>
    </div>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  const allstates = [good, neutral, bad];
  const sumUp = allstates.reduce((a, b) => a + b, 0);
  const averageUp = (good * 1 + bad * -1) / sumUp;
  const posFeedback = Math.round(good / sumUp * 100) + " %" ;
  return (
    <div>
      <h2>statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={sumUp} />
      <StatisticLine text="average" value={averageUp} />
      <StatisticLine text="positive" value={posFeedback} />
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{text}</td><td>{value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default App;

import React from "react";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  );
};

const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Part = ({part, exercises}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = ({parts}) => {
  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0]} />
      <Part part={parts[1].name} exercises={parts[1]} />
      <Part part={parts[2].name} exercises={parts[2]} />
    </div>
  );
};

const Total = ({parts}) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {parts[0].exercises +
          parts[1].exercises +
          parts[2].exercises}
      </p>
    </div>
  );
};

export default App;

import React, { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(6).fill(0));

  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const anecdoteClick = () => {
    const arrayIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(arrayIndex);
  };

  const handleVoteClick = () => {
    const newAllVotes = [...votes];
    newAllVotes[selected] += 1;
    setVotes(newAllVotes);
  };

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={handleVoteClick} text="Vote" />
      <Button onClick={anecdoteClick} text="Next anecdote" />
      <Header text="Anecdote with most votes" />
      <Winner anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Header = ({ text }) => <h1>{text}</h1>;

const Anecdote = ({ text, votes }) => (
  <div>
    <p>{text}</p>
    <p>has {votes} votes</p>
  </div>
);

const Winner = ({ anecdotes, votes }) => {
  const maxedoutVote = Math.max(...votes);
  const winnerIndex = votes.indexOf(maxedoutVote);
  const winner = anecdotes[winnerIndex];

  return (
    <div>
      <p>{winner}</p>
      <p>has {maxedoutVote} votes</p>
    </div>
  );
};
export default App;

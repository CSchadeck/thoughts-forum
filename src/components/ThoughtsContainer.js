import React, { useEffect } from "react";
import ThoughtCard from "./ThoughtCard";

function ThoughtsContainer({ thoughts, handleUpdateThought, messagesEndRef, scrollToBottom }) {
  useEffect(scrollToBottom, [thoughts])
  return (

    <div id="container" className="thoughts-container">
      <h1 className="about__header">Welcome!</h1>
      {thoughts.length === undefined ? <div>Still loading...</div> : thoughts.map((thought) =>
        <ThoughtCard key={thought.id} thought={thought} handleUpdateThought={handleUpdateThought} scrollToBottom={scrollToBottom} />
      )}
      <div ref={messagesEndRef} />
    </div>
  );

}


export default ThoughtsContainer;
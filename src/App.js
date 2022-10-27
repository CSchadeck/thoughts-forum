import React, { useState, useEffect, useRef } from "react";
import About from "./components/About";
import ThoughtsContainer from "./components/ThoughtsContainer";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";



function App() {
  const [thoughtData, setThoughtData] = useState({ thoughts: [] });

  useEffect(() => {
    fetchThoughts()
  }, []);

  function fetchThoughts() {
    return fetch('https://cschadeck.pythonanywhere.com/thoughts/')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setThoughtData(data);
      })
  }

  function handleUpdateThought(updatedThought) {
    const updatedThoughts = thoughtData.map((thought) => thought.id === updatedThought.id ? updatedThought : thought);
    setThoughtData(updatedThoughts);
  }
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/Thoughts">
          <ThoughtsContainer thoughts={thoughtData} handleUpdateThought={handleUpdateThought} messagesEndRef={messagesEndRef} scrollToBottom={scrollToBottom} />
        </Route>
        <Route exact path="/Share">
          <Form setThoughtData={setThoughtData} />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
//http://localhost:3000/feelings/     OG Json File
//http://127.0.0.1:8000/thoughts/      python Api
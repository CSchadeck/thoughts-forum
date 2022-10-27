import React, { useState, useEffect } from "react";

function ThoughtCard({ thought, handleUpdateThought }) {
    const { id, likes } = thought;


    // console.log("passed id", id)
    
    function likeHandler() {
        fetch(`https://cschadeck.pythonanywhere.com/thoughts/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ likes: thought.likes + 1 })
        }).then(r => r.json())
            .then((data) => {
                console.log(data);
                handleUpdateThought(data)
            })
    }

    return (
        <div className="card">
            <h3 className="card__name">{thought.name}</h3>
            <p className="card__content">{thought.content}</p>
            <p className="card__extras">
                <button onClick={likeHandler} className="card__likes">💗: {likes} </button>
                <span className="card__date">{thought.date} </span>
            </p>
        </div>
    );
}

export default ThoughtCard;
//http://localhost:3000/feelings/     OG Json File
//http:127.0.0.1:8000/thoughts/      python Api
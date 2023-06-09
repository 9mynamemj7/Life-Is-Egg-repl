"use client;";
import React, { useState, ChangeEvent } from "react";

const MyEvent = () => {
    const [text, setText] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const button = document.querySelector(".myBtn") as HTMLButtonElement;
        if (button.disabled) {
            button.removeAttribute("disabled");
        }
        setText(e.target.value);
    };

    const handleClick = () => {
        setText(text + ", Hi!");
    };

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            {text === "" ? (
                <button className="myBtn" onClick={handleClick} disabled>
                    Submit
                </button>
            ) : (
                <button className="myBtn" onClick={handleClick}>
                    Submit
                </button>
            )}
            <p>{text}</p>
        </div>
    );
};

export default MyEvent;

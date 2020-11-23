import React from "react";

const inputBox = (props) => {
const {inputValue, clickHandler, changeHandler} = props
    return(
        <div>
            <label>
                Todo List
            </label>
            <br />
            <input
                type="text"
                value={inputValue}
                name="inputValue"
                onChange={changeHandler}
                className="custom-input"
            />
            <br />
            <button 
                className="custom-button" 
                onClick={e => clickHandler(e, inputValue)}>
                Add Todo List
            </button>
        </div>
    );
};

export default inputBox;
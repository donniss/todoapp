import React from "react";


const boxComponent = (props) => {
const {index,list, deleteHandler} = props
    return (
        <div key={index+list} className="box--content">
            <p>{list}</p>
            <button onClick={() => deleteHandler(list)}>X</button>
        </div>
    );
};

export default boxComponent
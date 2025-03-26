import React, { useState } from "react";

export default function Textform(props) {
    const handleUpClick = () => {
        console.log('uppercase Click');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Sucessfully converted into uppercase', "success");
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Sucessfully converted into lowercase', "success");
    }

    const handleClearText = () => {
        let newText = ''
        setText(newText);
        props.showAlert('Sucessfully clear the textt', "success");
    }

    const handleOnChange = (event) => {
        //console.log('onchange text');
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: 'gray', color: 'white' }}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container">
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h1>Preview Text</h1>
                <p>{text.length > 0 ? text : "Enter into the text box above"}</p>
            </div>
        </>
    )
}
import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("")

    // text = "Hello"; //  Wrong way to change the state

    // setText("Hello"); //  Correct way to change the state

    const handleUpClick = () => {
        // console.log("Uppercase Was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case !!","success");
    }

    const handleLoClick = () => {

        let newText = text.toLowerCase();

        setText(newText);
        props.showAlert("Converted to Lower Case !!","success");
    }

    const handleClearClick = () =>{

        let newText = '';
        setText(newText);
        props.showAlert("Remove All Text Successfully !!","success");
    }

    const handleOnChange = (event) => {
        // console.log("onChanged");
        setText(event.target.value)
    }
    
    const handleCopy = () =>{

        var text = document.getElementById("myBox");
        text.select();
        // navigator.clipboard.writeText(text.value)
        // window.clipboard.writeText(text.value)


        if (navigator.clipboard) {
            navigator.clipboard.writeText(text.value)
                .then(function() {
                    console.log('Text successfully copied to clipboard');
                    props.showAlert("Successfully Copied !!","success");

                })
                .catch(function(err) {
                    console.error('Unable to copy text to clipboard', err);
                    props.showAlert("Not Copied !!","warning");
                });
        } else {
            console.error('Clipboard API not supported in this browser.');
            props.showAlert("Copy Text is not supported in this browser.!!","warning");
        }
        

    }

    const handleExtraSpaces = () =>{

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Spaces Successfully!!","success");

    }

    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text}
                        id="myBox" onChange={handleOnChange}
                        style={{backgroundColor: props.mode === 'light'?'white':'grey' ,
                    color:props.mode === 'dark' ? 'white':'black'}}
                        rows="8"></textarea>
                </div>

                <button className="btn btn-primary" onClick={handleUpClick}>Convert Uppercase</button>

                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert Lowercase</button>
               
                <button className="btn btn-primary my-2" onClick={handleClearClick}>Clear Text</button>
                
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

                <button className="btn btn-primary " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    
            </div>

            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter Something in the textBox above to Preview it here !!!"}</p>
            </div>
        </>
    )
}

import React from 'react'

export default function ThirdComponent() {

  const [text, setText] = React.useState('text');
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  }
  return (
    <div className="container">
        <div className="card">
            <div className="card-body">
               <textarea className="form-control" value={text} onChange={(e) => setText(e.target.value)} id="exampleFormControlTextarea1" rows="3">
               </textarea>
            </div>
            <div className="card-footer">
                
                <p>Text length: {text.length} </p>
                <p>Word count: {text.split(' ').length}</p>
                <button className="btn btn-primary" onClick={copyToClipboard}>
                    Copy to Clipboard
                </button>
            </div>
            
        </div>
        <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">Preview</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    </div>
  )
}

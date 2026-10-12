import { useState } from "react";

export default function SecondComponent({ showAlert , colorMode }) {
    const [email, setEmail] = useState('chavanganesh806@gmail.com');

    const toMakeUpperCase = () => {
        setEmail(email.toUpperCase());
    }
    return (
        <div className="container">
            <h1 className={`my-2 text-decoration-underline text-${colorMode === 'dark' ? 'light' : 'dark'}`}>Contact Us</h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className={`my-2 form-label text-${colorMode === 'dark' ? 'light' : 'dark'}`}>Email address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="button" className="btn btn-primary" onClick={() => {
                    toMakeUpperCase();
                    showAlert('Email updated successfully!', 'success');
                }} >Submit</button>
            </form>
        </div>
    )
}

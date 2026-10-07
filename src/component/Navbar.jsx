import { Link } from 'react-router-dom';

export default function Navbar({ colorMode, toggleColorMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${colorMode === 'dark' ? 'dark' : 'light'} bg-${colorMode === 'dark' ? 'dark' : 'light'}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/email">Email</Link>
                </li>               
            </ul>       
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={toggleColorMode} />
                <label className={`form-check-label ${colorMode === 'dark' ? 'text-light' : 'text-dark'}`} htmlFor="flexSwitchCheckChecked">Switch Dark Mode</label>
            </div>
        </div>
    </nav>
  )
}

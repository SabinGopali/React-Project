import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={props.mode}>
            <div className="container-fluid" style={props.mode}>
                <a className="navbar-brand" href="/"  style={props.mode}>{props.title}</a>
                <button className="navbar-toggler" style={props.mode} type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" style={props.mode} id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={props.mode}>
                    <li className="nav-item" style={props.mode}>
                    <Link className="nav-link active" aria-current="page" to="/" style={props.mode}>Home</Link>
                    </li>
                    <li className="nav-item" style={props.mode}>
                    <Link className="nav-link" to="/Homepage" style={props.mode} >{props.about}</Link>
                    </li> 
                    <li className="nav-item" style={props.mode}>
                    <Link className="nav-link active" aria-current="page" to="/fetching" style={props.mode}>API Calling</Link>
                    </li>
                    <li className="nav-item" style={props.mode}>
                    <Link className="nav-link active" aria-current="page" to="/secondapi" style={props.mode}>Second API</Link>
                    </li>
                    <li className="nav-item" style={props.mode}>
                    <Link className="nav-link active" aria-current="page" to="/Crud" style={props.mode}>CRUD </Link>
                    </li>
                </ul>
                <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.toggleblue} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Blue mode</label>                                  
                </div>
                    <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
                    </div>
                </div>
            </div>
        
        </nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired}

// Navbar.defaultProps = {

//     about:"fill it"
// }
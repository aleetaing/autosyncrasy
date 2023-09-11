import { NavLink } from 'react-router-dom';
import './index.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">CarCar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <button className="link-button nav-link dropdown-toggle btn btn-link" type="button" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Inventory</button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <NavLink className="dropdown-item" aria-current="page" to="/manufacturers">Manufacturers</NavLink>
                  <NavLink className="dropdown-item" aria-current="page" to="/manufacturers/new">Create a Manufacturer</NavLink>
                  <NavLink className="dropdown-item" aria-current="page" to="/models">Vehicle Models</NavLink>
                  <NavLink className="dropdown-item" aria-current="page" to="/models/new">Create a Vehicle Model</NavLink>
                  <NavLink className="dropdown-item" aria-current="page" to="/automobiles">Automobiles</NavLink>
                  <NavLink className="dropdown-item" aria-current="page" to="/automobiles/new">Create an Automobile</NavLink>
                </ul>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <button className="link-button nav-link dropdown-toggle btn btn-link" type="button" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Sales</button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <NavLink className="dropdown-item" aria-current="page" to="/customers">Customers</NavLink>
                  <NavLink className="dropdown-item" aria-current="page" to="/customers/create">Add a Customer</NavLink>
                  <NavLink className="dropdown-item" aria-current="page" to="/sales">Sales</NavLink>
                  <NavLink className="dropdown-item" aria-current="page" to="/sales/create">Add a Sale</NavLink>
                  <NavLink className="dropdown-item" aria-current="page" to="/sales/history">Sales History</NavLink>
                </ul>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <button className="link-button nav-link dropdown-toggle btn btn-link" type="button" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Services</button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <NavLink className="dropdown-item" aria-current="page" to="/appointments">Service Appointments</NavLink>
                  <NavLink className="dropdown-item" aria-current="page" to="/appointments/new">Create a Service Appointment</NavLink>
                  <NavLink className="dropdown-item" aria-current="page" to="/appointments/history">Service History</NavLink>
                </ul>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <button className="link-button nav-link dropdown-toggle btn btn-link" type="button" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Employees</button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <NavLink className="dropdown-item" aria-current="page" to="/technicians">Technicians</NavLink>
                  <NavLink className="dropdown-item" aria-current="page" to="/technicians/new">Add a Technician</NavLink>
                  <NavLink className="dropdown-item" aria-current="page" to="/salespeople">Salespeople</NavLink>
                  <NavLink className="dropdown-item" aria-current="page" to="/salespeople/create">Add a Salesperson</NavLink>
                </ul>
              </li>
            </ul>
          </div>

          </ul>
          </div>
        </div>
    </nav>

  )
}

export default Nav;

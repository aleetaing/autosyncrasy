import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{maxWidth: "280px"}}>
      <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
        <span className="fs-4 fw-bold">CarCar+</span>
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column list-unstyled mb-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page">
            {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
            Home
          </NavLink>
        </li>
        <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#inventory-collapse" aria-expanded="true">
            Inventory
          </button>
          <div className="collapse" id="inventory-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><NavLink className="dropdown-item" to="/manufacturers">Manufacturers</NavLink></li>
              <li><NavLink className="dropdown-item" to="/models">Vehicle Models</NavLink></li>
              <li><NavLink className="dropdown-item" to="/automobiles">Automobiles</NavLink></li>
            </ul>
          </div>
        </li>

        <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#services-collapse" aria-expanded="true">
            Servicing
          </button>
          <div className="collapse" id="services-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><NavLink className="dropdown-item" to="/appointments">Appointments</NavLink></li>
              <li><NavLink className="dropdown-item" to="/appointments/history">Service History</NavLink></li>
            </ul>
          </div>
        </li>

        <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#sales-collapse" aria-expanded="true">
            Sales
          </button>
          <div className="collapse" id="sales-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><NavLink className="dropdown-item" to="/customers">Customers</NavLink></li>
              <li><NavLink className="dropdown-item" to="/sales">Sales</NavLink></li>
              <li><NavLink className="dropdown-item" to="/sales/history">Salesperson History</NavLink></li>
            </ul>
          </div>
        </li>

        <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#employees-collapse" aria-expanded="true">
            Employees
          </button>
          <div className="collapse" id="employees-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><NavLink className="dropdown-item" to="/technicians">Technicians</NavLink></li>
              <li><NavLink className="dropdown-item" to="/salespeople">Salespeople</NavLink></li>
            </ul>
          </div>
        </li>

      </ul>
      <hr />
      <div className="dropdown">
        <NavLink to="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          {/* <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"> */}
          <strong>User</strong>
        </NavLink>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li><NavLink className="dropdown-item" to="#">New project...</NavLink></li>
          <li><NavLink className="dropdown-item" to="#">Settings</NavLink></li>
          <li><NavLink className="dropdown-item" to="#">Profile</NavLink></li>
          <li><hr className="dropdown-divider" /></li>
          <li><NavLink className="dropdown-item" to="#">Sign out</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;

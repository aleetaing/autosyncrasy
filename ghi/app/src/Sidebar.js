import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{maxWidth: "280px"}}>
      <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4 fw-bold">CarCar+</span>
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column list-unstyled mb-auto">

        <li className="mb-1">
          <i class="bi bi-box-fill"></i>
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#inventory-collapse" aria-expanded="false">
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
          <i class="bi bi-wrench"></i>
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
          <i class="bi bi-cash"></i>
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
          <i class="bi bi-people-fill"></i>
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

    </div>
  )
}

export default Sidebar;

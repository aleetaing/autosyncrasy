import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './SalespersonForm';
import SalespersonList from './SalespeopleList';
import CustomerForm from './CustomerForm';
import CustomersList from './CustomersList';
import SaleForm from './SaleForm';
import SalesList from './SalesList';
import SalespersonHistory from './SalespersonHistory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="salespeople">
            <Route path="" element={<SalespersonList/>} />
            <Route path="create" element={<SalesPersonForm />} />
          </Route>
          <Route path="customers">
            <Route path="" element={<CustomersList/>} />
            <Route path="create" element={<CustomerForm />} />
          </Route>
          <Route path="sales">
            <Route path="" element={<SalesList />} />
            <Route path="create" element={<SaleForm />} />
            <Route path="history" element={<SalespersonHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

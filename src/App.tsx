import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const  Products = lazy(() => import('./pages/Products'));
const  Transactions = lazy(() => import('./pages/Transactions'));
const  Customer = lazy(() => import('./pages/Customer'));


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/admin/dashboard' element={<Dashboard />}/>
        <Route path='/admin/product' element={<Products />}/>
        <Route path='/admin/transaction' element={<Transactions />}/>
        <Route path='/admin/customer' element={<Customer />}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';
import NewProduct from './pages/management/NewProduct';
import ProductManagement from './pages/management/ProductManagement';
import TransactionManagement from './pages/management/TransactionManagement';
import BarCharts from './pages/charts/BarCharts';
import PieCharts from './pages/charts/PieCharts';
import LineCharts from './pages/charts/LineCharts';
import Stopwatch from './pages/apps/Stopwatch';
import Toss from './pages/apps/Toss';
import Coupon from './pages/apps/Coupon';


const Dashboard = lazy(() => import('./pages/Dashboard'));
const  Products = lazy(() => import('./pages/Products'));
const  Transactions = lazy(() => import('./pages/Transactions'));
const  Customer = lazy(() => import('./pages/Customer'));


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
      <Routes>
      <Route path='/' element={<Link to={'/admin/dashboard'}>
        <button>View Dashboard</button>
      </Link>}/> 
        <Route path='/admin/dashboard' element={<Dashboard />}/> 
        <Route path='/admin/product' element={<Products />}/>
        <Route path='/admin/transaction' element={<Transactions />}/>
        <Route path='/admin/customer' element={<Customer />}/>

        <Route path="/admin/chart/bar" element={<BarCharts />} />
        <Route path="/admin/chart/pie" element={<PieCharts />} />
        <Route path="/admin/chart/line" element={<LineCharts />} />

        <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
        <Route path="/admin/app/coupon" element={<Coupon />} />
        <Route path="/admin/app/toss" element={<Toss />} />

        <Route path="/admin/product/new" element={<NewProduct />} />
        <Route path="/admin/product/:id" element={<ProductManagement />} />
        <Route path="/admin/transaction/:id" element={<TransactionManagement />}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
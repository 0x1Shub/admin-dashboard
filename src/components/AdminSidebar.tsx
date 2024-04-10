import { AiFillFileText } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaChartBar, FaChartPie, FaChartLine } from 'react-icons/fa';

const AdminSidebar = () => {

  return (
    <aside>
      <h2>Logo.</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <li style={{backgroundColor: location.pathname.includes('/admin/dashboard') ? "rgba(0, 115, 255, 0.1)" : "white"}}>
            <Link to={'/admin/dashboard'} style={{color: location.pathname.includes('/admin/dashboard') ? "rgba(0, 115, 255)" : "black"}}>
              <RiDashboardFill />
              Dashboard
            </Link>
          </li>
          <li style={{backgroundColor: location.pathname.includes('/admin/product') ? "rgba(0, 115, 255, 0.1)" : "white"}}>
            <Link to={'/admin/product'} style={{color: location.pathname.includes('/admin/product') ? "rgba(0, 115, 255)" : "black"}}>
              <RiShoppingBag3Fill />
              Products
            </Link>
          </li>
          <li style={{backgroundColor: location.pathname.includes('/admin/customer') ? "rgba(0, 115, 255, 0.1)" : "white"}}>
            <Link to={'/admin/customer'} style={{color: location.pathname.includes('/admin/customer') ? "rgba(0, 115, 255)" : "black"}}>
            <AiFillFileText />
              Customer
            </Link>
          </li>
          <li style={{backgroundColor: location.pathname.includes('/admin/transaction') ? "rgba(0, 115, 255, 0.1)" : "white"}}>
            <Link to={'/admin/transaction'} style={{color: location.pathname.includes('/admin/transaction') ? "rgba(0, 115, 255)" : "black"}}>
            <IoIosAdd />
              Transaction
            </Link>
          </li>
        </ul>
      </div>

      <Charts />

    </aside>
  )
}


const Charts = () => {
  return (
    <div>
        <h5>Charts</h5>
        <ul>

          <li style={{backgroundColor: location.pathname.includes('/admin/chart/bar') ? "rgba(0, 115, 255, 0.1)" : "white"}}>
            <Link to={'/admin/dashboard/bar'} style={{color: location.pathname.includes('/admin/dashboard/bar') ? "rgba(0, 115, 255)" : "black"}}>
              <FaChartBar />
              Bar
            </Link>
          </li>
          <li style={{backgroundColor: location.pathname.includes('/admin/chart/pie') ? "rgba(0, 115, 255, 0.1)" : "white"}}>
            <Link to={'/admin/dasboard/pie'} style={{color: location.pathname.includes('/admin/dasboard/pie') ? "rgba(0, 115, 255)" : "black"}}>
              <FaChartPie />
              Pie
            </Link>
          </li>
          <li style={{backgroundColor: location.pathname.includes('/admin/chart/line') ? "rgba(0, 115, 255, 0.1)" : "white"}}>
            <Link to={'/admin/dasboard/line'} style={{color: location.pathname.includes('/admin/dasboard/line') ? "rgba(0, 115, 255)" : "black"}}>
            <FaChartLine />
              Line
            </Link>
          </li>

        </ul>
      </div>
  )
}



export default AdminSidebar
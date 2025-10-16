import { CiShoppingCart } from "react-icons/ci";
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <>
     <div className="">
        <div className="container-fluid py-4 px-5 position-fixed z-3 bg-light">
            <div className="row gap-5">
                <div className="col ms-5">
                    <img src={logo} alt="" width={150} />
                </div>
                <div className="col">
                    <div className="row">
                        <ul className="d-flex justify-content-center align-items-center list-unstyled">
                            <li className="text-capitalize mx-3">course</li>
                            <li className="text-capitalize mx-3">membership</li>
                            <li className="text-capitalize mx-3"><CiShoppingCart /></li>
                            <li className="text-capitalize mx-3">
                                <button className="btn btn-primary text-capitalize px-5 rounded-0">login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     </div> 
    </>
  )
}

export default Navbar

import { FaFacebook,FaInstagramSquare ,FaLinkedin ,FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <section style={{backgroundColor:"#212529"}}>
        <div className="container p-5">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <ul className='list-unstyled d-flex gap-3'>
                            <li>
                                <a href="#" className='text-decoration-none text-capitalize text-light'>terms of use</a>
                            </li>
                            <li>
                                <a href="#" className='text-decoration-none text-capitalize text-light'>privacy ppolicy</a>
                            </li>
                            <li>
                                <a href="#" className='text-decoration-none text-capitalize text-light'>about us</a>
                            </li>
                            <li>
                                <a href="#" className='text-decoration-none text-capitalize text-light'>FAQs</a>
                            </li>
                            <li>
                                <a href="#" className='text-decoration-none text-capitalize text-light'>contact us</a>
                            </li>
                            <li>
                                <a href="#" className='text-decoration-none text-capitalize text-light'>refund policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <ul className="d-flex gap-4 flex-row-reverse">
                        <li>
                            <a href="#" className="text-light fs-6"><FaLinkedin/></a>
                        </li>
                        <li>
                            <a href="#" className="text-light fs-6"><FaInstagramSquare/></a>
                        </li>
                        <li>
                            <a href="#" className="text-light fs-6"><FaYoutube/></a>
                        </li>
                        <li>
                            <a href="#" className="text-light fs-6"><FaSquareXTwitter/></a>
                        </li>
                        <li>
                            <a href="#" className="text-light fs-6"><FaFacebook /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer

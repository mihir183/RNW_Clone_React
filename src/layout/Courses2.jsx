import { Course } from "../Utilits/data"
const Courses2 = () => {
  return (
    <>
          <div className='container mt-5'>
            <h2 className="text-capitalize text-center fs-1">pick a course to get started</h2>
            <div className="row my-5 justify-content-center">
                {
                    Course.map(ele => 
                        <div className="col col-lg-3 mb-2">
                            <img src={ele.img} alt="" width="100%" height={160}/>
                            <h4 className="text-capitalize mt-4">{ele.title}</h4>
                            <p>{ele.rating}{ele.star}{ele.tot_rating}</p>
                            <p className="text-capitalize fs-3">rs : {ele.price}</p>
                        </div>
                    )
                }
                <div className="col col-lg-3 my-5">
                    <button className="p-3 fs-6 text-capitalize bg-warning text-light border-0">browse all categories</button>
                </div>
            </div>
          </div>
        </>
  )
}

export default Courses2

import { Top_Course } from "../Utilits/data"

const Courses = () => {
  return (
    <>
      <div className='container '>
        <h2 className="text-capitalize text-center fs-1">our top courses</h2>
        <div className="row my-5">
            {
                Top_Course.map(ele => 
                    <div className="col col-lg-3 mb-2">
                        <img src={ele.img} alt="" width="100%" height={160}/>
                        <h4 className="text-capitalize mt-4">{ele.title}</h4>
                        <p>{ele.rating}{ele.star}{ele.tot_rating}</p>
                        <p className="text-capitalize fs-3">rs : {ele.price}</p>
                    </div>
                )
            }
        </div>
      </div>
    </>
  )
}

export default Courses

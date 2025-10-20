import { Students } from "../Utilits/data"

const Student = () => {
  return (
    <>
    <section style={{backgroundColor: "#f8f9fa"}} className="pb-5">
      <div className="container pt-4">
        <h2 className="text-center text-capitalize">happy students</h2>
        <div className="row gap-4 justify-content-center">
            {
                Students.map(ele => 
                    <div className="mt-5 col-10 cols-md-4 col-lg-3 text-center bg-light border-top border-bottom border-warning-subtle">
                        <img src={ele.img} alt="" width={100} className="mt-5 rounded-circle" />
                        <h3 className="mt-4">{ele.name}</h3>
                        <p className="mt-4 fs-5">{ele.desc}</p>
                    </div>
                )
            }
        </div>
      </div>
    </section>
    </>
  )
}

export default Student

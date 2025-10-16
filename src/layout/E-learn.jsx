import { StudyData } from '../Utilits/data'
const E_learn = () => {
  return (
    <>
      <div className='container my-5'>
        <h2 className='text-center fs-1 text-capitalize'>why study with e-learn ?</h2>
        <div className="row">
            {
                StudyData.map(ele=>
                    <div className="col text-center p-5">
                        <img src={ele.img} alt="img" width={100} />
                        <p className='fs-3 text-capitalize'>{ele.desc}</p>
                    </div>
                )
            }
        </div>
      </div>
    </>
  )
}

export default E_learn

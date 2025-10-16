import BannerImg from '../assets/images/banner.png'
const Banner = () => {
  return (
    <>
      <div style={{backgroundImage:`url(${BannerImg})`,height:'90vh', width:"100%"}}>
        <div style={{backgroundColor:"black", opacity:"50%", width:"100%", height:"100%", zIndex:"2"}}>
        <div className="box d-flex flex-column justify-content-center align-items-center h-100 text-light">
          <h2 className='text-capitalize fs-1 mb-2'>one place for e-learning</h2>
          <p className='text-capitalize fs-3 mb-5'>ever grow is best platform for leaarn online</p>
          <button className='btn rounded-0 text-light' style={{backgroundColor:"#f09f1a"}}>get register now</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Banner

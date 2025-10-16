import { Topics } from "../Utilits/data";

const Topic = () => {
  return (
    <>
      <section className="py-5" style={{ backgroundColor: "#173156" }}>
        <div className="container">
          <h2 className="text-center text-capitalize mb-5 text-light fs-1">
            popular topics to learn
          </h2>
          <div className="row gap-5 justify-content-center align-content-center">
            {Topics.map((ele) => (
              <div className="col col-lg-2 px-2 py-3 text-center bg-light align-content-center">
                <h4>{ele}</h4>
              </div>
            ))}
            <div className="col col-lg-3 mb-3">
              <button className="btn btn-warning p-3 text-light text-capitalize fs-6 rounded-0">
                browse more category
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topic;

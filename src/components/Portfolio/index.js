import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio-body" id="portfolio">
        <div className="container section">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card card-1">
                <img src="images/pipeline.png" className="card-img-top card-img-1" alt="Pipeline Journal" />
                <div className="card-body">
                  <h5 className="card-title">Pipeline</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quos dignissimos autem dicta earum laboriosam molestiae
                    temporibus officiis corrupti aliquam similique!
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-2">
                <img src="images/impression.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">The Impression of Persistence</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aperiam maiores itaque corporis, veniam aspernatur ullam
                    reprehenderit consequuntur quo facere.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-3">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">...Coming Soon</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error commodi explicabo inventore vel voluptatibus ratione
                    qui mollitia consequatur ullam veniam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-4">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">...Coming Soon</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam enim sequi illum error ipsa? Ipsam atque tenetur
                    recusandae fugiat dicta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

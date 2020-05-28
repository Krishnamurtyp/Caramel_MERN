import React from 'react'

const ServiceSection = () => {
    return (
      <section className="serv-section bg-light" id="serve-sec">
      <div className=" container-fluid pb-5">
        <h1 className="text-center text-success py-5">What We Offer</h1>
        <div className="row">
          <div className="col-12 col-lg-4 col-md-6">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/programming.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">End Point IoT Devices Software</h4>
                {/*  <p class="card-text text-center">advise organisations on high-level decisions in an unbiased fashion, using deep industry knowledge to deliver the best results. </p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/iot-world.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Software For IoT Gateways</h4>
                {/* <p class="card-text text-center">AI-driven development focuses on tools and techniques for embedding AI into applications and using AI to generate other AI-powered tools.</p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/data-processing.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Streaming Data Processors</h4>
                {/*  <p class="card-text text-center">Some example text.</p>  */}
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12 col-lg-4 col-md-6">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/data-center.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Data Lake &amp; Big Data warehouse</h4>
                {/* <p class="card-text text-center">Some example text.</p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/data-analytics1.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Data Analytics Application</h4>
                {/* <p class="card-text text-center">Some example text.</p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/smart-lighting.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Control Application</h4>
                {/* <p class="card-text text-center">Some example text.</p> */} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default ServiceSection;
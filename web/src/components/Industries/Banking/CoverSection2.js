import React from 'react'

const CoverSection2 = () => {
    return (
      <section className="auto-blog" id="blog-automotive">
      <div className="container-fluid py-5">
        <div><h2 className="text-center font-weight-bold" style={{color:"rgba(76,175,80,1)"}}>BANKING BLOGS</h2></div>
      </div>
      <div className="container-fluid">
        <div className="row pb-5 mobile-disp">
          <div className="col-12 col-lg-3 col-md-3">
            <div className="w3-card w3-hover-shadow resp-margin">
              <img className="card-img image-card-indus" src="../../images/banking1.jpg" alt="Bologna"/>
              <div className="card-img-overlay">
                <a href="#" className="btn btn-light btn-sm mt-1">Read More</a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Banking</h4>
                <small className="text-muted cat">
                  <i className="far fa-clock text-info"></i> 30 minutes
                  <i className="fas fa-users text-info"></i> 4 portions
                </small>
                <p className="card-text">Today’s technology provides complete security of your transactions and safety of your data that there are very rare occasions on which the data is misused.</p>
                {/* <!-- <a href="../consortiumcoming.html" className="btn btn-info float-right">Read More</a> --> */}
              </div>
              <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                <div className="views">Oct 20, 12:45PM
                </div>
                <div className="stats">
                  <i className="far fa-eye"></i> 1347
                  <i className="far fa-comment"></i> 12
                </div>   
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-3">
            <div className="w3-card w3-hover-shadow  resp-margin">
              <img className="card-img image-card-indus img-fluid" src="../../images/banking2.jpg" alt="Bologna"/>
              <div className="card-img-overlay">
                <a href="#" className="btn btn-light btn-sm mt-1">Read More</a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Banking</h4>
                <small className="text-muted cat">
                  <i className="far fa-clock text-info"></i> 30 minutes
                  <i className="fas fa-users text-info"></i> 4 portions
                </small>
                <p className="card-text"> Today’s technology provides complete security of your transactions and safety of your data that there are very rare occasions on which the data is misused.</p>
                {/* <!-- <a href="../consortiumcoming.html" className="btn btn-info float-right">Read More</a> --> */}
              </div>
              <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                <div className="views">Oct 20, 12:45PM
                </div>
                <div className="stats">
                  <i className="far fa-eye"></i> 1347
                  <i className="far fa-comment"></i> 12
                </div>   
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-3">
            <div className="w3-card w3-hover-shadow  resp-margin">
              <img className="card-img image-card-indus img-fluid" src="../../images/banking3.jpg" alt="Bologna"/>
              <div className="card-img-overlay">
                <a href="#" className="btn btn-light btn-sm mt-1">Read More</a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Banking</h4>
                <small className="text-muted cat">
                  <i className="far fa-clock text-info"></i> 30 minutes
                  <i className="fas fa-users text-info"></i> 4 portions
                </small>
                <p className="card-text">Today’s technology provides complete security of your transactions and safety of your data that there are very rare occasions on which the data is misused.</p>
                {/* <!-- <a href="../consortiumcoming.html" className="btn btn-info float-right">Read More</a> --> */}
              </div>
              <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                <div className="views">Oct 20, 12:45PM
                </div>
                <div className="stats">
                  <i className="far fa-eye"></i> 1347
                  <i className="far fa-comment"></i> 12
                </div>   
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-3">
            <div className="w3-card w3-hover-shadow  resp-margin">
              <img className="card-img image-card-indus" src="../../images/banking4.jpg" alt="Bologna"/>
              <div className="card-img-overlay">
                <a href="#" className="btn btn-light btn-sm mt-1">Read More</a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Banking</h4>
                <small className="text-muted cat">
                  <i className="far fa-clock text-info"></i> 30 minutes
                  <i className="fas fa-users text-info"></i> 4 portions
                </small>
                <p className="card-text">Today’s technology provides complete security of your transactions and safety of your data that there are very rare occasions on which the data is misused.</p>
                {/* <!-- <a href="../consortiumcoming.html" className="btn btn-info float-right">Read More</a> --> */}
              </div>
              <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                <div className="views">Oct 20, 12:45PM
                </div>
                <div className="stats">
                  <i className="far fa-eye"></i> 1347
                  <i className="far fa-comment"></i> 12
                </div>   
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  mobile view 
        <div className="container">
        <div className="carousel-flick"
        data-flickity='{ "wrapAround": true }'>
        <div className="carousel-cell-cons"> 
          <div className="card  resp-margin">
            <img className="card-img image-card-indus" src="../../images/banking1.jpg" alt="Bologna"/>
            <div className="card-img-overlay">
              <a href="#" className="btn btn-light btn-sm mt-1">Read More</a>
            </div>
            <div className="card-body">
              <h4 className="card-title">Banking</h4>
              <small className="text-muted cat">
                <i className="far fa-clock text-info"></i> 30 minutes
                <i className="fas fa-users text-info"></i> 4 portions
              </small>
              <p className="card-text">Today’s technology provides complete security of your transactions and safety of your data that there are very rare occasions on which the data is misused.</p>
              {/* <!-- <a href="#" className="btn btn-info float-right">Read More</a> --> 
            </div>
            <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
              <div className="views">Oct 20, 12:45PM
              </div>
              <div className="stats">
                <i className="far fa-eye"></i> 1347
                <i className="far fa-comment"></i> 12
              </div>   
            </div>
          </div>
        </div>
        <div className="carousel-cell-cons"> 
          <div className="card resp-margin">
            <img className="card-img image-card-indus" src="../../images/banking2.jpg" alt="Bologna"/>
            <div className="card-img-overlay">
              <a href="#" className="btn btn-light btn-sm mt-1">Read More</a>
            </div>
            <div className="card-body">
              <h4 className="card-title">Banking</h4>
              <small className="text-muted cat">
                <i className="far fa-clock text-info"></i> 30 minutes
                <i className="fas fa-users text-info"></i> 4 portions
              </small>
              <p className="card-text">Today’s technology provides complete security of your transactions and safety of your data that there are very rare occasions on which the data is misused.</p>
             {/* <!--  <a href="#" className="btn btn-info float-right">Read More</a> --> 
            </div>
            <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
              <div className="views">Oct 20, 12:45PM
              </div>
              <div className="stats">
                <i className="far fa-eye"></i> 1347
                <i className="far fa-comment"></i> 12
              </div>   
            </div>
          </div>
        </div>
        <div className="carousel-cell-cons">
          <div className="card resp-margin">
            <img className="card-img image-card-indus" src="../../images/banking3.jpg" alt="Bologna"/>
            <div className="card-img-overlay">
              <a href="#" className="btn btn-light btn-sm mt-1">Read More</a>
            </div>
            <div className="card-body">
              <h4 className="card-title">Banking</h4>
              <small className="text-muted cat">
                <i className="far fa-clock text-info"></i> 30 minutes
                <i className="fas fa-users text-info"></i> 4 portions
              </small>
              <p className="card-text">Today’s technology provides complete security of your transactions and safety of your data that there are very rare occasions on which the data is misused.</p>
             {/* <!--  <a href="#" className="btn btn-info float-right">Read More</a> --> 
            </div>
            <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
              <div className="views">Oct 20, 12:45PM
              </div>
              <div className="stats">
                <i className="far fa-eye"></i> 1347
                <i className="far fa-comment"></i> 12
              </div>   
            </div>
          </div>
        </div>
      {/* <!-- <div className="carousel-cell-cons"><img src="../../images/innovation.png" className="img-fluid pt-3"><p className="text-center py-3">Collaboration Platform</p></div>
        <div className="carousel-cell-cons"><img src="../../images/collaboration.png" className="img-fluid pt-3"><p className="text-center py-3">Collaboration Platform</p></div> -->
      </div>
    </div> */}
    </section>
    )
}

export default CoverSection2;
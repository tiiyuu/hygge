const PortfolioPostPreview = ({ entry, getAsset, widgetFor }) => {
    const data = entry.get('data').toJS()
    
    const cover_style = {
      maxHeight: "100%",
      height: "auto"
    };

    return (
        <>
        <section class="section case-details">
          <div class="svg-img">
            <img src="/images/figure-svg.svg" alt="" />
          </div>
          <div class="animate-shape">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 600">
              <defs>
                <linearGradient id="d" x1="0.929" y1="0.111" x2="0.263" y2="0.935" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#f1f6f9" />
                  <stop offset="1" stop-color="#f1f6f9" stop-opacity="0" />
                </linearGradient>
              </defs>
              <g data-name="blob-shape (3)">
                <path class="blob" fill="url(#d)"
                  d="M455.4 151.1c43.1 36.7 73.4 92.8 60.8 136.3-12.7 43.5-68.1 74.4-111.3 119.4-43.1 45-74 104.1-109.8 109-35.9 5-76.7-44.2-111.8-89.2-35.2-45-64.7-85.8-70.8-132.6-6-46.8 11.6-99.6 46.7-136.3 35.2-36.6 88-57.2 142.4-58.8 54.5-1.7 110.6 15.6 153.8 52.2z" />
              </g>
            </svg>
          </div>
          <div class="animate-pattern">
            <img src="/images/background-pattern.svg" alt="background-shape" />
          </div>
          <div class="container">
            <div class="row mb-5">
              <div class="col-lg-10 offset-lg-1 text-center">
                <div class="case-details-title">
                  <h1>{ data.title }</h1>
                </div>
                <div class="case-details-thumb mb-5">
                  <img src={`/${data.thumbnail}`} style={cover_style} alt="case-details" />
                </div>
                { widgetFor('body') }
              </div>
            </div>
            <div class="row">
              <div class="col-lg-10 offset-lg-1">
                <nav class="case-details-nav d-flex justify-content-between align-items-center">

                  <div class="previous d-flex align-items-center">
                    <div class="icon mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15.556" height="28.285" viewBox="0 0 15.556 28.285">
                        <g data-name="Group 1243" fill="#2d2d2d">
                          <path data-name="Path 1456" d="M3.391 12.728l9.75 14.142-.982 1.414-9.742-14.142z" />
                          <path data-name="Path 1455" d="M13.137 1.41L3.39 15.558l-.975-1.415L12.166 0z" />
                        </g>
                      </svg>
                    </div>
                    <div class="content">
                      <span class="small">Prev</span>
                      <h5 class="title"><a class="text-dark">Previous</a></h5>
                    </div>
                  </div>

                  <div class="next d-flex align-items-center">
                    <div class=" content text-right">
                      <span class="small">Next</span>
                      <h5 class="title">
                        <a class="text-dark">Next</a>
                      </h5>
                    </div>
                    <div class="icon ml-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15.556" height="28.285" viewBox="0 0 15.556 28.285">
                        <g data-name="Group 1244" fill="#2d2d2d">
                          <path data-name="Path 1456" d="M12.162 12.725L2.416 26.87l.978 1.41 9.746-14.138z" />
                          <path data-name="Path 1455" d="M2.416 1.415l9.743 14.141.975-1.414L3.39 0z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  
                </nav>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

CMS.registerPreviewTemplate('event_post', PortfolioPostPreview)
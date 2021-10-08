const getVideo = (videoURL, videoThumb) => {
    if (videoURL) {
        return (
            <div class="hero_figure-popup">
                <div class="thumb">
                  <img src={`${videoThumb}`} alt="popup" />
                </div>

                <a type="button" class="popup-button text-center big">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24">
                    <path d="M17.961 10.264a2 2 0 010 3.473L2.992 22.29A2 2 0 010 20.554V3.446A2 2 0 012.992 1.71z"
                      data-name="Polygon 4" />
                  </svg>
                </a>
            </div>
        )
    }
    return null;
}

const HeroSectionPreview = ({ entry, getAsset, widgetFor }) => {
    const data = entry.get('data').toJS()
    const mystyle = {
        WebkitMask: "/images/hero-mask-svg.png",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        WebkitMaskPosition: "center center"
    };
    return (
        <>
        <section class="hero" id="home">
          <div class="hero_background-svg">
            <svg viewBox="0 0 1437 1180">
              <path fill={ data.bgColor } d="M0 0h1377l60 1010a120 120 0 01-120 120L0 1180z" data-name="Path 1350" />
            </svg>
          </div>
          <div class="hero_footer-svg">
            <img src={`${data.leftImage}`} alt="" />
          </div>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="hero_content">
                  <div class="hero_blob">
                    <svg viewBox="0 0 550 550">
                      <defs>
                        <linearGradient id="a" x1=".069" x2=".753" y1=".116" y2=".858" gradientUnits="objectBoundingBox">
                          <stop offset="0" stop-color="#fff" />
                          <stop offset="1" stop-color="#fff" stop-opacity=".012" />
                        </linearGradient>
                      </defs>
                      <g data-name="blob-shape (3)">
                        <path class="blob" fill={ data.bubbleColor }
                          d="M455.4 151.1c43.1 36.7 73.4 92.8 60.8 136.3-12.7 43.5-68.1 74.4-111.3 119.4-43.1 45-74 104.1-109.8 109-35.9 5-76.7-44.2-111.8-89.2-35.2-45-64.7-85.8-70.8-132.6-6-46.8 11.6-99.6 46.7-136.3 35.2-36.6 88-57.2 142.4-58.8 54.5-1.7 110.6 15.6 153.8 52.2z" />
                        }
                        }
                      </g>
                    </svg>
                  </div>
                  <div class="mb-5">
                    <span class="top-title pre-line">{ data.topTitle }</span>
                    { widgetFor('content') }
                  </div>
                  
                </div>
              </div>
              <div class="col-lg-6">
                <div class="hero_figure">
                  <div class="figure-svg">
                    <img src={`${data.rightImage}`} />
                  </div>
                  <img src={`${data.image}`} alt="hero-image" style={mystyle} />
                  { getVideo(data.videoURL, data.videoThumb) }
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

CMS.registerPreviewTemplate('hero', HeroSectionPreview)
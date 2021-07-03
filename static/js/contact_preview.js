const ContactPreview = ({ entry, getAsset, widgetFor }) => {
    const data = entry.get('data').toJS()
    
    const info_style = {
        margin: "5px"
    }

    const btn_style = {
        color: data.btnTextColor,
        backgroundColor: data.btnBgColor,
        borderColor: data.btnBorderColor
    };

    return (
        <>
        <header class="breadCrumb">
          <div class="svg-img">
            <img src={`/${data.leftImage}`} alt="bg" />
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
                <path class="blob" fill={ data.bubbleColor }
                  d="M455.4 151.1c43.1 36.7 73.4 92.8 60.8 136.3-12.7 43.5-68.1 74.4-111.3 119.4-43.1 45-74 104.1-109.8 109-35.9 5-76.7-44.2-111.8-89.2-35.2-45-64.7-85.8-70.8-132.6-6-46.8 11.6-99.6 46.7-136.3 35.2-36.6 88-57.2 142.4-58.8 54.5-1.7 110.6 15.6 153.8 52.2z" />
              </g>
            </svg>
          </div>
          <div class="animate-pattern">
            <img src={`/${data.rightImage}`} alt="background-shape" />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <h3 class="breadCrumb__title">{ data.title }</h3>
                <nav aria-label="breadcrumb" class="d-flex justify-content-center">
                  <ol class="breadcrumb align-items-center">
                    <li class="breadcrumb-item"><a >Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{ data.breadcrumb }</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <section class="section contact__info">
          <div class="container">
            <div class="row">
                { data.faq.map(f =>(
                    <div class="col-lg-4">
                        <div class="contact__info_item" style={info_style}>
                          <div class="contact__info_item-icon">
                            <div class="icon-background">
                              <svg xmlns="http://www.w3.org/2000/svg" width="122.457" height="109.702" viewBox="0 0 122.457 109.702">
                                <path fill={ f.fillColor }
                                  d="M49.855527 9.984102c-4.337424-.815024-8.766002-1.633779-13.152776-1.113889-8.196034.975107-15.344329 6.696991-19.41555 13.879649s-5.363288 15.655094-5.187042 23.907191c.156996 7.385448 1.479849 14.875357 4.972905 21.38465s9.337384 11.961229 16.458344 13.922244c4.833752 1.331211 10.056683 1.044827 14.74081 2.829827 7.560693 2.881382 12.209757 10.489626 19.01235 14.870016a25.650039 25.650039 0 0024.16316 1.698928c8.342551-3.846451 14.03857-12.107291 16.641338-20.918947s2.471077-18.187687 1.756125-27.346305c-.843101-10.912846-3.01686-22.783019-11.354287-29.869462-6.037066-5.130853-14.208558-6.772976-21.995428-8.235353z"
                                  data-name="Path 1354" />
                              </svg>
                            </div>
                            <div class="icon">
                              <img src={`/${f.img}`} alt="icon" />
                            </div>
                          </div>
                          <h4>{ f.question }</h4>
                          <p>
                            { f.answer }
                          </p>
                        </div>
                    </div>
                )) }
            </div>
          </div>
        </section>

        <section class="contact-form">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="contact-form-title">
                  <h3>{ data.contact_form }</h3>
                </div>
                <div class="contact-form-input">
                  <form id="contact-form" method="POST">

                    <div class="form-row">

                      <div class="form-group col-md-6 pr-3">
                        <input type="text" class="form-control" name={ data.name } placeholder={ data.name } required />
                      </div>
                      <div class="form-group col-md-6">
                        <input type="email" class="form-control" name={ data.email } placeholder={ data.email } required />
                      </div>
                    </div>

                    <div class="form-group">
                      <textarea class="form-control" id="message" rows="6" name={ data.message } placeholder={ data.message }></textarea>
                    </div>

                    <div class="form-group">
                      <div class="form-check small">
                        <input type="checkbox" class="form-check-input" name="agreement" id="aggrement" required />
                        <label class="form-check-label" for="aggrement">
                          { data.agree }
                        </label>
                      </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-zoom" id="contact-form-button" style={btn_style}>{ data.btnText }</button>
                    <p id="contact-form-status" class="mt-3"></p>
                  </form>

                </div>
              </div>
              <div class="col-lg-6">
                <img src={`/${data.img}`} />
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

CMS.registerPreviewTemplate('contact', ContactPreview)
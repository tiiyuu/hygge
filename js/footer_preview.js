const FooterPreview = ({ entry, getAsset, widgetFor }) => {
    const data = entry.get('data').toJS()
    const bg_style = {
        background: {`${data.bgColor}`}
    };
    const card_bg_style = {
        background: { data.cardBgColor }
    };
    const shape1_style = {
        fill: { data.shape1.color },
        opacity: { data.shape1.opacity }
    };
    const shape2_style = {
        fill: { data.shape2.color },
        opacity: { data.shape2.opacity }
    };
    return (
        <>
        <section class="footer" id="contact" style={bg_style}>
            <div class="footer__background_shape">
                <svg viewBox="0 0 1920 79">
                    <path d="M0 0h1920v79L0 0z" data-name="Path 1450" />
                </svg>
            </div>
            <div class="container">
                
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer__cta" style={card_bg_style}>
                            <div class="shape-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="357" height="315.029" viewBox="0 0 357 315.029">
                                    <path style={shape1_style} data-name="Path 1449"
                                        d="M76.1-157.222C91.746-135.8 87.2-94.273 99.993-61.945c12.7 32.328 42.661 55.459 39.248 73.282-3.318 17.823-40.007 30.337-65.6 43.325-25.5 12.988-39.912 26.545-60.01 42.566-20.1 16.116-46.074 34.6-63.328 27.682-17.349-6.921-25.976-39.153-59.915-59.82s-93.1-29.768-105.325-51.478 22.373-56.028 43.609-93.949c21.331-37.921 29.2-79.35 53.563-96.793 24.459-17.444 65.414-10.9 103.9-6.921 38.396 3.982 74.326 5.404 89.965 26.829z"
                                        transform="translate(217.489 188.626)" />
                                </svg>
                            </div>
                            <div class="shape-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="357" height="315.029" viewBox="0 0 357 315.029">
                                    <path style={shape2_style} data-name="Path 1449"
                                        d="M76.1-157.222C91.746-135.8 87.2-94.273 99.993-61.945c12.7 32.328 42.661 55.459 39.248 73.282-3.318 17.823-40.007 30.337-65.6 43.325-25.5 12.988-39.912 26.545-60.01 42.566-20.1 16.116-46.074 34.6-63.328 27.682-17.349-6.921-25.976-39.153-59.915-59.82s-93.1-29.768-105.325-51.478 22.373-56.028 43.609-93.949c21.331-37.921 29.2-79.35 53.563-96.793 24.459-17.444 65.414-10.9 103.9-6.921 38.396 3.982 74.326 5.404 89.965 26.829z"
                                        transform="translate(217.489 188.626)" />
                                </svg>
                            </div>
                            <div class="text-light footer__cta_content">
                                <span>{ data.topTitle }</span>
                                <h2 class="mb-0">{ data.content }</h2>
                            </div>
                            <div class="footer__cta_action">
                                <a class="btn btn-light btn-zoom">{ data.btnText }</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row footer__widget">
                    <div class="col-lg-4">
                        <div class="footer__widget_logo mb-5">
                            <img src={`/${data.footerLogo}`} alt="widget-logo" />
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="text-light footer__widget_sitemap mb-5">
                            <h4 class="base-font">{ data.title1 }</h4>
                            <ul class="unstyle-list small">
                                { data.content1.map(c => (
                                    <li class="mb-2"><a class="text-light">{ c.text }</a></li>
                                )) }
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="text-light footer__widget_address mb-5">
                            <h4 class="base-font">{ data.title2 }</h4>
                            <ul class="fa-ul small">
                                { data.content2.map(c => (
                                    <li class="mb-2"><a class="text-light">
                                        <span class="fa-li">
                                            <i class={`fa ${c.icon}`}></i>
                                        </span>{ c.text }</a>
                                    </li>
                                )) }
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row footer__footer">
                    <div class="col-lg-6">
                        <div class="footer__footer_copy text-light">
                            <p>{ data.copyright }</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="footer__footer_social">
                            <ul class="unstyle-list">
                                { data.social.map(s => (
                                    <li class="d-inline-block mx-2">
                                        <a class="text-light" target="_blank" href={ s.url }>
                                            <i class={`fa ${s.icon}`}></i>
                                        </a>
                                    </li>
                                )) }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

CMS.registerPreviewTemplate('footer', FooterPreview)
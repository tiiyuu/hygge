const getStars = stars => {
    let content = [];
    for (let i = 0; i < stars; i++) {
        content.push(<li key={i}><i class="fa fa-star"></i></li>);
    }
    for (let i = stars; i < 5; i++) {
        content.push(<li key={i}><i class="fa fa-star inactive"></i></li>);
    }
    return content;
}

const TestimonialPreview = ({ entry, getAsset, widgetFor }) => {
    const data = entry.get('data').toJS()
    // const title = data.title.toString().split("## ");
    return (
        <>
        <section class="section testimonial">
            <div class="testimonial__background_shape">
                <svg viewBox="0 0 1920 79">
                    <path d="M0 0h1920v79L0 0z" data-name="Path 1450" />
                </svg>
            </div>
            <div class="container">
                <div class="row text-center">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="testimonial__header">
                            <span class="top-title">{ data.topTitle }</span>
                            { widgetFor("title") }
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="testimonial__slider">
                            { data.testimonial.map(t => (
                                <div class="testimonial__slider_item">
                                    <ul class="testimonial__slider_item-rating">
                                        { getStars(t.star) }
                                    </ul>
                                    <p class="testimonial__slider_item-content"> { t.comment } </p>
                                    <p class="testimonial__slider_item-author"><span>{ t.name }</span> | { t.time }</p>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

CMS.registerPreviewTemplate('testimonial', TestimonialPreview)
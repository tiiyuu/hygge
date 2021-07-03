const BlogSectionPreview = ({ entry, getAsset, widgetFor }) => {
    const data = entry.get('data').toJS()
    return (
        <>
        <section class="section blog-preview" id="blog">
            <div class="blog-preview__shape">
                <img src={`/${data.spinImage}`} alt="blog shape" />
            </div>
            <div class="container">
                <div class="row mb-5">
                    <div class="col-lg-6">
                        <div class="blog-preview__header">
                            <span class="top-title pre-line">{ data.topTitle }</span>
                            { widgetFor('title')  }
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="blog-preview__header_button desktop">
                            <a class="btn btn-outline-secondary  btn-zoom m-3">{ data.buttonText }</a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="blog-preview__header_button mobile">
                            <a class="btn btn-outline-secondary btn-zoom" href="{ data.buttonTarget }}">{ data.buttonText }</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

CMS.registerPreviewTemplate('blog', BlogSectionPreview)
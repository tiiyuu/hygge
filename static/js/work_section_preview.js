const WorkSectionPreview = ({ entry, getAsset, widgetFor }) => {
    const data = entry.get('data').toJS()
    return (
        <>
        <section class="section portfolio" id="portfolio">
            <div class="container">
                <div class="row text-center">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="portfolio__header mb-5">
                            <span class="top-title">{ data.topTitle }</span>
                            { widgetFor('title') }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

CMS.registerPreviewTemplate('work', WorkSectionPreview)
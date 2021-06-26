const ResumeSectionPreview = ({ entry, getAsset, widgetFor }) => {
    const data = entry.get('data').toJS();

    return (
        <>
        <section class="section resume" id="resume">
            <div class="resume__background"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="resume__heading">
                            <div class="text-light">
                                <span class="top-title pre-line">{ data.topTitle }</span>
                                { widgetFor('title') }
                            </div>

                            <div class="btn-group nav mt-5">
                                <a class="btn btn-primary active" data-toggle="tab">{ data.tab1Name }</a>
                                <a class="btn btn-primary" data-toggle="tab">{ data.tab2Name }</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="tab-content ">
                            <div id="tab1" class="resume__education tab-pane active" id={`${data.tab1Target}`}>
                                { data.education.map((eda) => (
                                    <div class="resume__education_item">
                                        <span class="pre-line text-primary"> { eda.time } </span>
                                        { widgetFor('eda.content') }
                                    </div>
                                )) }
                            </div>

                            <div id="tab2" class="resume__education tab-pane active" id={`${data.tab2Target}`}>
                                { data.experience.map(exp => (
                                    <div class="resume__education_item">
                                        <span class="pre-line text-primary"> { exp.time } </span>

                                    </div>
                                )) }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

CMS.registerPreviewTemplate('resume', ResumeSectionPreview)
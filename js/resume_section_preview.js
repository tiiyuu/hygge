function tab1Click() {
    document.getElementById("tab1_content").className += "active";
    document.getElementById("tab2_content").className = document.getElementById("tab2_content").className.replace( /(?:^|\s)active(?!\S)/g , '' )
}

function tab2Click() {
    document.getElementById("tab2_content").className += "active";
    document.getElementById("tab1_content").className = document.getElementById("tab1_content").className.replace( /(?:^|\s)active(?!\S)/g , '' )
}

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
                                <a id="tab1" class="btn btn-primary active" data-toggle="tab" onClick={ tab1Click }>{ data.tab1Name }</a>
                                <a id="tab2" class="btn btn-primary" data-toggle="tab" onClick={ tab2Click }>{ data.tab2Name }</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="tab-content ">
                            <div id="tab1_content" class="resume__education tab-pane active" id={`${data.tab1Target}`}>
                                { data.education.map((eda) => (
                                    <div class="resume__education_item">
                                        <span class="pre-line text-primary"> { eda.time } </span>
                                        { eda.content }
                                    </div>
                                )) }
                            </div>

                            <div id="tab2_content" class="resume__education tab-pane" id={`${data.tab2Target}`}>
                                { data.experience.map(exp => (
                                    <div class="resume__education_item">
                                        <span class="pre-line text-primary"> { exp.time } </span>
                                        { exp.content }
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
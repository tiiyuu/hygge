const getSkills = skill => {
    const styles = {
        width: ${skill.percent} + "%"
    };

    return(
        <div class="skill__progress_item">
            <span class="d-inline-block text-dark">{ skill.title }</span>
            <div class="progress-value float-right"><span>{ skill.percent }</span>%</div>
            <div class="progress">
                <div class="progress-bar" style={styles} aria-valuemin="0" aria-valuemax={ skill.percent }></div>
            </div>
        </div>
    );
}

const SkillSectionPreview = ({ entry, getAsset, widgetFor }) => {
    const data = entry.get('data').toJS()
    return (
        <>
        <section class="section skill">
            <div class="skill__background_shape">
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
            <div class="skill__background_pattern">
                <img src="images/background-pattern.svg" alt="background-shape" />
            </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="skill__thumb">
                            <div class="skill__thumb_pattern">
                                <img src="images/figure-svg.svg" alt="figure-svg" />
                            </div>
                            <div class="skill__thumb_image">
                                <img src={ data.image } alt="skill-img" style='
                                                -webkit-mask: url({"images/skill-mask-svg.svg" });
                                                -webkit-mask-repeat: no-repeat;
                                                -webkit-mask-size: contain;
                                                -webkit-mask-position: center center;
                                            ' />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="skill__progress">
                            <div class="skill__progress_heading mb-5">
                                <span class="top-title pre-line">{ data.topTitle }</span>
                                { widgetFor('content') }
                            </div>
                            { data.skill.map(s =>(
                                { getSkills(s) }
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

CMS.registerPreviewTemplate('skill_section', SkillSectionPreview)
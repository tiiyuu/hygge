const Header = ({ data }) => (
    <header class="breadCrumb">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-md-12 offset-lg-1 offset-md-0 text-center">
                <h3 class="breadCrumb__title">{ data.title }</h3>
                    <nav aria-label="breadcrumb" class="d-flex justify-content-center">
                        <ol class="breadcrumb align-items-center">
                            <li class="breadcrumb-item"><a href={ data.BaseURL }>Home</a></li>
                            <li class="breadcrumb-item"><a href={ data.blogPageURL }>All Post</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{ data.title }</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </header>
)

const AnimateShape = ({}) => (
    <div class="animate-shape">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 600">
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
)

const Container = ({}) => (
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="singleBlog__feature">
                    <img src={ data.postImage } alt="feature-image" />
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-lg-12">
                <div class="singleBlog__content">
                    { widgetFor("body") }
                </div>
            </div>
        </div>
    </div>
)

const BlogPreview = ({ entry, widgetFor }) => {
    const data = entry.get('data').toJS()
    return (
        <Header data={data}/>

        <section class="section singleBlog">
            <div class="svg-img">
                <img src="/images/hero/figure-svg.svg" alt="" />
            </div>
            <AnimateShape/>
            <div class="animate-pattern">
                <img src="/images/service/background-pattern.svg" alt="background-shape" />
            </div>
            <Container/>
        </section>
    )
}

CMS.registerPreviewTemplate('blog', BlogPreview)
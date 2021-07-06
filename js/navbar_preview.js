const NavBarPreview = ({ entry, getAsset, widgetFor }) => {
    const data = entry.get('data').toJS()
    
    const logo_style = {
      width: data.logoSize
    }

    const nav_style = {
        flexGrow: 0
    }

    return (
        <>
        <nav class="navbar navbar-expand-lg fixed-top">
          <div class="container">
            <a class="navbar-brand">
              <img src={`/${data.logo}`} style={logo_style} alt="site-logo" />
            </a>
            <button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
              <span class="navbar-toggler-icon"></span>
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse" style={nav_style}>
              <ul class="nav navbar-nav main-navigation my-0 mx-auto">
                { data.menu.map(m => (
                  <li class="nav-item">
                    <a class="nav-link text-dark text-sm-center p-2 ">{ m.name }</a>
                  </li>
                )) }
              </ul>
            </div>
          </div>
        </nav>
        </>
    )
}

CMS.registerPreviewTemplate('navbar', NavBarPreview)
import React from 'react';

const Header = () => {
  return (
    <header id="header" className="header clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div id="logo" className="logo float-left">
              <a href="index.html" rel="home">
                <h1>Look4Restaus</h1>
              </a>
            </div>
            <div className="btn-menu">
              <span></span>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="nav-wrap">
              <nav id="mainnav" className="mainnav float-left">
                <ul className="menu">
                  <li className="home">
                    <a href="/">Home</a>
                  </li>
                  <li className="home">
                    <a href="/resturants-near-me">Restaurants Near Me</a>
                  </li>
                  <li className="home">
                    <a href="/contact-us">Contact Us</a>
                  </li>
                </ul>
              </nav>

              <div className="button-addlist float-right">
                <button type="button" className="flat-button" onclick="location.href='page-addlisting.html'">Support this Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;

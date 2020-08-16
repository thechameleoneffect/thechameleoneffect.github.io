import React from 'react'

const Banner = props => (
  <section id={`banner-${props.page}`} className="major">
    <div className="inner">
      <header className="major">
        <h1>{props.title}</h1>
      </header>
      <div className="content">
        <p>
          {props.subtitle}
          {/* <br />
          and released under the Creative Commons. */}
        </p>
        {/* <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              Get Started
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  </section>
)

export default Banner

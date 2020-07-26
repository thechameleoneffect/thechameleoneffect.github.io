import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="The Chameleon Effect"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />
        <div id="main" className="alt">
          <section id="one">
            {/* <div id="main"> */}
            <div className="inner">
              <h2 id="content">Project Summary</h2>
              <p>
                Praesent ac adipiscing ullamcorper semper ut amet ac risus.
                Lorem sapien ut odio odio nunc. Ac adipiscing nibh porttitor
                erat risus justo adipiscing adipiscing amet placerat accumsan.
                Vis. Faucibus odio magna tempus adipiscing a non. In mi primis
                arcu ut non accumsan vivamus ac blandit adipiscing adipiscing
                arcu metus praesent turpis eu ac lacinia nunc ac commodo gravida
                adipiscing eget accumsan ac nunc adipiscing adipiscing.
              </p>
            </div>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Meet the Team</h2>
              </header>
              <div className="box alt">
                <div className="grid-wrapper">
                  <div className="col-4">
                    <span className="image fit">
                      <img src={pic09} alt="" />
                      <p>hi</p>
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src={pic10} alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src={pic10} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <div id="main">
            <section id="one" className="pics">
              <article style={{ backgroundImage: `url(${pic01})` }}>
                <header className="major">
                  <h3>Aliquam</h3>
                  <p>Ipsum dolor sit amet</p>
                </header>
                <Link to="/landing" className="link primary"></Link>
              </article>
              <article style={{ backgroundImage: `url(${pic02})` }}>
                <header className="major">
                  <h3>Tempus</h3>
                  <p>feugiat amet tempus</p>
                </header>
                <Link to="/landing" className="link primary"></Link>
              </article>
              <article style={{ backgroundImage: `url(${pic03})` }}>
                <header className="major">
                  <h3>Magna</h3>
                  <p>Lorem etiam nullam</p>
                </header>
                <Link to="/landing" className="link primary"></Link>
              </article>
              <article style={{ backgroundImage: `url(${pic04})` }}>
                <header className="major">
                  <h3>Ipsum</h3>
                  <p>Nisl sed aliquam</p>
                </header>
                <Link to="/landing" className="link primary"></Link>
              </article>
              <article style={{ backgroundImage: `url(${pic05})` }}>
                <header className="major">
                  <h3>Consequat</h3>
                  <p>Ipsum dolor sit amet</p>
                </header>
                <Link to="/landing" className="link primary"></Link>
              </article>
              <article style={{ backgroundImage: `url(${pic06})` }}>
                <header className="major">
                  <h3>Etiam</h3>
                  <p>Feugiat amet tempus</p>
                </header>
                <Link to="/landing" className="link primary"></Link>
              </article>
            </section>
            <section id="two">
              <div className="inner">
                <header className="major">
                  <h2>Massa libero</h2>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                  pharetra. Pellentesque condimentum sem. In efficitur ligula
                  tate urna. Maecenas laoreet massa vel lacinia pellentesque
                  lorem ipsum dolor. Nullam et orci eu lorem consequat
                  tincidunt. Vivamus et sagittis libero. Mauris aliquet magna
                  magna sed nunc rhoncus amet pharetra et feugiat tempus.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/landing" className="button next">
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div> */}
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

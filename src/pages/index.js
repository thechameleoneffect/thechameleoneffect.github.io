import React from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

// import pic01 from '../assets/images/pic01.jpg'
// import pic02 from '../assets/images/pic02.jpg'
// import pic03 from '../assets/images/pic03.jpg'
// import pic04 from '../assets/images/pic04.jpg'
// import pic05 from '../assets/images/pic05.jpg'
// import pic06 from '../assets/images/pic06.jpg'
import pic09 from '../assets/images/pic09.jpg'
import medha from '../assets/images/medha.png'
import keely from '../assets/images/keely.png'
import noora from '../assets/images/noora.png'
// import pic10 from '../assets/images/pic10.jpg'

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
                Bargh and Chartrand define the chameleon effect as “nonconscious
                mimicry of the postures, mannerisms, facial expressions, and
                other behaviors of one's interaction partners, such that one's
                behavior passively and unintentionally changes to match that of
                others in one's current social environment.”
              </p>
              <p>
                The Chameleon Effect is an initiative of the Intersectional
                Health Student Association (IHSA) with the goal to restructure
                how health professionals students conceptualize marginalized
                populations and disparities in health. We are using The
                Chameleon Effect as a metaphor for the persistent focus on
                singular population curricula in medical education. New programs
                are being developed at medical institutions across the country
                in order to combat health disparities and produce more
                culturally competent medical professionals. Unfortunately, there
                is a reproduction of non-inclusive disparity curricula as
                institutions mimic the currently established structure of
                singular population curricula. This initiative was developed as
                a platform for open dialogue and to spark conversation on the
                presence (or lack) of intersectionality in medicine.{' '}
                <strong>
                  We aim to start our own Chameleon Effect that leads to the
                  systemic adoption of an intersectional lens as the foundation
                  for medical curricula.
                </strong>
              </p>
            </div>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Meet the Team</h2>
              </header>
              <p>
                <span className="image left">
                  <figure>
                    <img src={keely} alt="" />
                    {/* <figcaption style={{ textAlign: 'center' }}>
                      <strong>Keely (she/her)</strong>
                    </figcaption> */}
                  </figure>
                </span>
                <h3>Keely (she/her) </h3>
                Keely graduated from Case Western Reserve University in 2019 and
                2020 with her B.A./M.A. degrees in Political Science and
                Bioethics and Medical Humanities, respectively. Her two M.A.
                concentrations were in Research Ethics and Medicine, Society,
                and Culture. She is PhD candidate in Bioethics at CWRU, and
                hopes to research minority-focused ethics in epidemiology/public
                health policy and genetics.
              </p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p>
                <span className="image right">
                  <figure>
                    <img src={medha} alt="" />
                    {/* <figcaption style={{ textAlign: 'center' }}>
                      <strong>Medha (she/her)</strong>
                    </figcaption> */}
                  </figure>
                </span>
                <h3>Medha (she/her) </h3>
                Medha graduated from The University of Texas at Austin in May of
                2020 with a Bachelor of Science in Public Health and a
                concentration in the Social and Behavioral Sciences. She is
                currently working in healthcare consulting before heading to
                medical school. Some of her advocacy interests include mental
                health and public policy for marginalized populations. With a
                passion for the fine arts, she also enjoys creative
                problem-solving and design-thinking.
              </p>
              <br></br>
              <br></br>
              <br></br>
              <p>
                <span className="image left">
                  <figure>
                    <img src={noora} alt="" />
                    {/* <figcaption style={{ textAlign: 'center' }}>
                      <strong>Noora (they/them)</strong>
                    </figcaption> */}
                  </figure>
                </span>
                <h3>Noora (they/them)</h3>
                Noora graduated with honors in Sociology from Case Western
                Reserve University in May of 2019. They will be starting their
                first year of medical school in August of 2020 at New York
                Institute of Technology College of Osteopathic Medicine
                (NYITCOM) at Arkansas State University. Their academic focuses
                include advocating for intersectional LGBTQI+ health education
                as well as inclusion of gender and sexual minorities in
                medicine.
              </p>
              <br></br>
              <br></br>
              <br></br>
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

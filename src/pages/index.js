import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

// import pic01 from '../assets/images/pic01.jpg'
// import pic02 from '../assets/images/pic02.jpg'
// import pic03 from '../assets/images/pic03.jpg'
// import pic04 from '../assets/images/pic04.jpg'
// import pic05 from '../assets/images/pic05.jpg'
// import pic06 from '../assets/images/pic06.jpg'
// import pic09 from '../assets/images/pic09.jpg'
import medha from '../assets/images/medha.png'
import keely from '../assets/images/keely.png'
import noora from '../assets/images/noora.png'
import snigdha from '../assets/images/snigdha.png'
// import pic08 from '../assets/images/pic08.jpg'
// import pic10 from '../assets/images/pic10.jpg'

const members = [
  {
    name: 'Keely (she/her)',
    picture: keely,
    text:
      'Keely graduated from Case Western Reserve University in 2019 and 2020 with her B.A./M.A. degrees in Political Science and Bioethics and Medical Humanities, respectively. Her two M.A. concentrations were in Research Ethics and Medicine, Society, and Culture. She is PhD candidate in Bioethics at CWRU, and hopes to research minority-focused ethics in epidemiology/public health policy and genetics.',
  },
  {
    name: 'Medha (she/her)',
    picture: medha,
    text:
      'Medha graduated from The University of Texas at Austin in May of 2020 with a Bachelor of Science in Public Health and a concentration in the Social and Behavioral Sciences. She is currently working in healthcare consulting before heading to medical school. Some of her advocacy interests include mental health and public policy for marginalized populations. With a passion for the fine arts, she also enjoys creative problem-solving and design-thinking.',
  },
  {
    name: 'Noora (they/them)',
    picture: noora,
    text:
      'Noora graduated with honors in Sociology from Case Western Reserve University in May of 2019. They will be starting their first year of medical school in August of 2020 at New York Institute of Technology College of Osteopathic Medicine (NYITCOM) at Arkansas State University. Their academic focuses include advocating for intersectional LGBTQI+ health education as well as inclusion of gender and sexual minorities in medicine.',
  },
  {
    name: 'Snigdha (she/her)',
    picture: snigdha,
    text:
      'Snigdha graduated from The Univeristy of Texas at Austin in May of 2019 with a Bachelor of Science in Electrical and Computer Engineering. She is currently working as a Software Engineer while pursuing a Master of Science in Computer Science from Georgia Institute of Technology part time. Her interests include web and mobile development, and she hopes to use her technical skills to uplift underrepresented groups both inside and outside the tech industry.',
  },
]

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout page="about">
        <Helmet
          title="The Chameleon Effect"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner
          page="home"
          title="The Chameleon Effect"
          subtitle="A platform for open dialogues about intersectionality in healthcare"
        />
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
          <div className="inner">
            <header className="major">
              <h2>Meet the Team</h2>
            </header>
          </div>
          <div className="inner">
            <div className="box alt">
              <div className="grid-wrapper">
                {members.map(member => {
                  return (
                    <div key={member.name} className="col-4">
                      <span className="image fit member">
                        {/* <div> */}
                        <img src={member.picture} alt=""></img>
                        {/* </div> */}
                        <div className="overlay">
                          <div className="text">{member.text}</div>
                        </div>
                      </span>
                      <h3 style={{ textAlign: 'center' }}>{member.name}</h3>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* <section id="two" className="spotlights">
              <section id="keely">
                <img
                  src={keely}
                  alt=""
                  className="image"
                  style={{ boxShadow: 'none' }}
                />

                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Keely (she/her)</h3>
                    </header>
                    <p>
                      Keely graduated from Case Western Reserve University in
                      2019 and 2020 with her B.A./M.A. degrees in Political
                      Science and Bioethics and Medical Humanities,
                      respectively. Her two M.A. concentrations were in Research
                      Ethics and Medicine, Society, and Culture. She is PhD
                      candidate in Bioethics at CWRU, and hopes to research
                      minority-focused ethics in epidemiology/public health
                      policy and genetics.
                    </p>
                  </div>
                </div>
              </section>
              <section>
                <img
                  src={medha}
                  alt=""
                  className="image"
                  style={{ boxShadow: 'none' }}
                />
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Medha (she/her)</h3>
                    </header>
                    <p>
                      Medha graduated from The University of Texas at Austin in
                      May of 2020 with a Bachelor of Science in Public Health
                      and a concentration in the Social and Behavioral Sciences.
                      She is currently working in healthcare consulting before
                      heading to medical school. Some of her advocacy interests
                      include mental health and public policy for marginalized
                      populations. With a passion for the fine arts, she also
                      enjoys creative problem-solving and design-thinking.
                    </p>
                  </div>
                </div>
              </section>
              <section>
                <img
                  src={noora}
                  alt=""
                  className="image"
                  style={{ boxShadow: 'none' }}
                />
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Noora (they/them)</h3>
                    </header>
                    <p>
                      Noora graduated with honors in Sociology from Case Western
                      Reserve University in May of 2019. They will be starting
                      their first year of medical school in August of 2020 at
                      New York Institute of Technology College of Osteopathic
                      Medicine (NYITCOM) at Arkansas State University. Their
                      academic focuses include advocating for intersectional
                      LGBTQI+ health education as well as inclusion of gender
                      and sexual minorities in medicine.
                    </p>
                  </div>
                </div>
              </section>
            </section> */}
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

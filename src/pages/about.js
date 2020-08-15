import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import about from '../assets/images/about header.png'

import pic11 from '../assets/images/pic11.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Generic - Forty by HTML5 UP</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>About</h1>
          </header>
          <span className="image main">
            <img src={about} alt="" />
          </span>
          <p>
            The persistence of health disparities has driven U.S. medical
            institutions to work towards the creation of culturally competent
            curricula in an effort to systemically combat these disparities.
            Despite this, research on all levels of medical education has
            revealed that many universities are failing to meet the bare minimum
            in disparity education, with most curricula lacking an
            intersectional approach. This may be attributed to the traditional
            method of medical curricula that focuses on singular populations and
            neglects the intersection of multiple identities in a historical,
            structural, and cultural context.
          </p>
          <p>
            Our team of three with backgrounds in bioethics, political science,
            public health, social justice, and sociology have created this
            project within the Intersectional Health Student Association (IHSA)
            to shed light on health disparities across combinations of gender
            identity, sexuality, race, age, socioeconomic status, and
            disability, among other demographics. We invite you to use an
            intersectional lens and conceptualize health inequities in health as
            a social problem driven by a number of complex discriminations and
            disadvantages.
          </p>
          <h4>
            <i>The Case for Intersectionality in Medical Curricula</i>
          </h4>
          <p>
            Intersectionality shows us that sex, gender, sexuality, race,
            culture, and socioeconomic status, among others, are NOT mutually
            exclusive. Despite this, medical curricula focus on single
            populations, which casts a shadow on those who sit at the center of
            multiple intersecting minority identities. There needs to be a
            cultural shift among medical professionals regarding how we think
            about health disparities. Check out our educational materials on how
            you can get started.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic

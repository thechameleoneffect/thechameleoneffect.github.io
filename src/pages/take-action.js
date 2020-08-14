import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

// import pic11 from '../assets/images/pic11.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Take Action</title>
      <meta name="description" content="Take Action" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Take Action</h1>
          </header>
          {/* <span className="image main">
            <img src={pic11} alt="" />
          </span> */}
          <p>
            “I have the knowledge, now what?” Use your intersectional lens in
            your daily life and practice! Take a look at our resources on how
            you can combat health disparities in your daily life.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic

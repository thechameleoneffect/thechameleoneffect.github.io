import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import pic11 from '../assets/images/pic11.jpg'
import education from '../assets/images/personal stories trial.gif'

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
            <h1>Education</h1>
          </header>
          <span className="image main">
            <img src={education} alt="" />
          </span>
          <h4>
            <i>
              <Link to="education/foundations">Foundations</Link>
            </i>
          </h4>
          <p>
            Adopting an intersectional lens in your studies and practice
            requires significant commitment as it entails a complete
            restructuring of your thought process. The first step is
            understanding the basics. Take a look at our foundational posts and
            recommended texts to learn what intersectionality is, and why it is
            important.
          </p>
          <h4>
            <i>
              <Link to="education/history">History</Link>
            </i>
          </h4>
          <p>
            How can you avoid whitewashing medicine’s racist history? The field
            of medicine unfortunately has a history of exploitation, racism, and
            cruelty as a means for gaining knowledge. This history is not remote
            but has persisted, and manifests today as health disparities. Use
            our History section to educate yourself on medicine’s racist
            history. Apply this knowledge to think critically about how current
            policy may not be ethical or beneficial to everyone.
          </p>
          <h4>
            <i>
              <Link to="education/emotional-intelligence">
                Emotional Intelligence and Implicit Bias
              </Link>
            </i>
          </h4>
          <p>
            How can you avoid whitewashing medicine’s racist history? The field
            of medicine unfortunately has a history of exploitation, racism, and
            cruelty as a means for gaining knowledge. This history is not remote
            but has persisted, and manifests today as health disparities. Use
            our History section to educate yourself on medicine’s racist
            history. Apply this knowledge to think critically about how current
            policy may not be ethical or beneficial to everyone.
          </p>
          <h4>
            <i>
              <Link to="education/resources">Resources</Link>
            </i>
          </h4>
          <p>
            Use our resources section for further readings and a diverse set of
            topics related to disparities in health.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic

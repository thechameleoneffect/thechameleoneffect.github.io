import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import pic10 from '../assets/images/pic10.jpg'
import education from '../assets/images/personal stories trial.gif'

const sections = [
  {
    key: 'foundations',
    title: 'Foundations',
    img: pic10,
    text:
      'Adopting an intersectional lens in your studies and practice requires significant commitment as it entails a complete restructuring of your thought process. The first step is understanding the basics. Take a look at our foundational posts and recommended texts to learn what intersectionality is, and why it is important.',
  },
  {
    key: 'history',
    title: 'History',
    img: pic10,
    text:
      'How can you avoid whitewashing medicine’s racist history? The field of medicine unfortunately has a history of exploitation, racism, and cruelty as a means for gaining knowledge. This history is not remote but has persisted, and manifests today as health disparities. Use our History section to educate yourself on medicine’s racist history. Apply this knowledge to think critically about how current policy may not be ethical or beneficial to everyone.',
  },
  {
    key: 'emotional-intelligence',
    title: 'Emotional Intelligence and Implicit Bias',
    img: pic10,
    text:
      'Emotional Intelligence and implicit bias are interrelated. Emotional Intelligence (EI) is learning to become aware of our emotions, and to acknowledge that emotions drive behavior. Implicit bias is the understanding of attitudes or stereotypes that affect our actions, and decisions in an unconscious manner. They are taught in conjunction with each other because without emotional intelligence, implicit bias training may be difficult to implement in daily life. Use this section to introspect on your own biases and learn what you can do to combat them.',
  },
  {
    key: 'resources',
    title: 'Resources',
    img: pic10,
    text:
      'Use our resources section for further readings and a diverse set of topics related to disparities in health.',
  },
]

const Education = props => (
  <Layout>
    <Helmet>
      <title>Generic - Forty by HTML5 UP</title>
      <meta name="description" content="Education" />
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
        </div>
      </section>
      <section id="two" className="spotlights">
        {sections.map(section => (
          <section key={section.key}>
            <img src={section.img} alt="" />
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>{section.title}</h3>
                </header>
                <p>{section.text}</p>
                <ul className="actions">
                  <li>
                    <Link to={`${section.key}`} className="button">
                      Learn more
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        ))}
        {/* </div> */}
      </section>
    </div>
  </Layout>
)

export default Education

import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import ps1 from '../assets/images/ps1.png'
import ps2 from '../assets/images/ps2.png'
import ps3 from '../assets/images/ps3.png'

// import pic03 from '../assets/images/pic03.jpg'
// import pic08 from '../assets/images/pic08.jpg'
// import pic09 from '../assets/images/pic09.jpg'

const Elements = props => {
  const [stories, setStories] = useState([
    {
      first: ps1,
      // alt: pic09,
      id: 0,
      to: '/personal-stories',
      flipped: false,
      title: 'hi',
      description: 'description',
    },
    {
      first: ps2,
      // alt: pic08,
      id: 1,
      to: '/personal-stories',
      flipped: false,
      title: 'hi2',
      description: 'description',
    },
    {
      first: ps3,
      // alt: pic09,
      id: 2,
      to: '/personal-stories',
      flipped: false,
      title: 'idk',
      description: 'description',
    },
  ])
  useEffect(() => {}, [stories])

  // const flip = id => {
  //   console.log(id)
  //   const newStories = stories
  //   newStories[id] = !stories[id]
  //   setStories(newStories)
  // }
  return (
    <Layout>
      <Helmet>
        <title>Personal Stories - Forty by HTML5 UP</title>
        <meta name="description" content="Elements Page" />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Personal Stories</h1>
            </header>
            <p>
              Below are anonymous stories submitted via social media on their
              personal experiences in healthcare. We are sharing this here as a
              reminder that these disparities you study manifest in real life
              and may be impacting your own patients, as well as your friends
              and family.
            </p>
            <div className="box alt">
              <div className="grid-wrapper">
                {stories.map(story => {
                  console.log(story)
                  return (
                    <div key={story.id} className="col-4">
                      <span className="image fit">
                        <Link key={story.id} to={story.to} className="PostCard">
                          <div className="PostCard--Image">
                            <img src={story.first} alt=""></img>
                          </div>
                          {/* <header>hi</header> */}
                          <div style={{ padding: '.5rem' }}>
                            <h3>Title</h3>
                            <div>Description</div>
                          </div>
                        </Link>
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div text-align="center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdo3E7rNAlZWaZIDYj4Yfs1PyPQLawMs7tRoqUckHrmBslzmw/viewform?embedded=true"
                width="1200"
                height="500"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Elements

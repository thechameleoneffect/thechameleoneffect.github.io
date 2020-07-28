import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { isMobile } from 'react-device-detect'

const Header = props => {
  const [educationActive, setEducationActive] = useState(false)
  return (
    <header id="header" className="alt">
      <Link to="/" className="logo">
        <strong>The Chameleon Effect</strong> {/*<span>by HTML5 UP</span>*/}
      </Link>
      {isMobile ? (
        <nav>
          <a
            className="menu-link"
            onClick={props.onToggleMenu}
            href="javascript:;"
          >
            Menu
          </a>
        </nav>
      ) : (
        <React.Fragment>
          <div className="navigation">
            <Link to="/about" className="logo">
              About Us
            </Link>
            <div
              className="logo"
              onMouseEnter={() => setEducationActive(true)}
              onMouseLeave={() => setEducationActive(false)}
            >
              <Link
                to="/education"
                // style={{ textDecoration: 'none' }}
                className="link"
              >
                Education
              </Link>
              <ul className={educationActive ? 'dropdown' : 'dropdown-active'}>
                <li>
                  <Link to="/education/foundations" className="logo">
                    Foundations
                  </Link>
                </li>
                <li>
                  <Link to="/education/history" className="logo">
                    History
                  </Link>
                </li>
                <li>
                  <Link to="/education/emotional-intelligence" className="logo">
                    Emotional Intelligence
                  </Link>
                </li>
                <li>
                  <Link to="/education/resources" className="logo">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/personal-stories" className="logo">
              Personal Stories
            </Link>
            <Link to="/take-action" className="logo">
              Take Action
            </Link>
            <Link to="/contact" className="logo">
              Contact us
            </Link>
          </div>
          {/* <nav>
            <a
              className="menu-link"
              onClick={props.onToggleMenu}
              href="javascript:;"
            >
              Menu
            </a>
          </nav> */}
        </React.Fragment>
      )}
    </header>
  )
}

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header

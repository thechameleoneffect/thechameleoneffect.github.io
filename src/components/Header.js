import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { isMobile } from 'react-device-detect'

const Header = props => (
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
        <Link to="/about" className="logo">
          About Us
        </Link>
        <Link to="/education" className="logo">
          Education
        </Link>
        <Link to="/personal-stories" className="logo">
          Personal Stories
        </Link>
        <Link to="/take-action" className="logo">
          Take Action
        </Link>
        <Link to="/contact" className="logo">
          Contact us
        </Link>
      </React.Fragment>
    )}
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header

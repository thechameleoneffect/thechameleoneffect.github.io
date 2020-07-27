import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => {
  const [sub, setSub] = useState(null)
  const items = [
    { id: 'Home', to: '/' },
    { id: 'About Us', to: '/about' },
    {
      id: 'Education',
      to: '/education',
      subitems: [
        { id: 'Foundations', to: '/education/foundations' },
        { id: 'History', to: '/education/history' },
        {
          id: 'Emotional Intelligence',
          to: '/education/emotional-intelligence',
        },
        { id: 'Resources', to: '/education/resources' },
      ],
    },
    { id: 'Personal Stories', to: '/personal-stories' },
    { id: 'Take Action', to: '/take-action' },
    { id: 'Contact Us', to: '/contact' },
  ]

  const handleSub = id => {
    // const item = items.filter(item => item.id === id)
    // console.log(item[0].subitems)
    // setSub(item[0].subitems)
    setSub(id)
  }
  //   console.log(sub)
  return (
    <nav id="menu">
      <div className="inner">
        <ul className="links">
          {items.map(item => {
            return (
              <React.Fragment>
                <li key={item.id}>
                  <Link
                    id={item.id}
                    onClick={props.onToggleMenu}
                    onMouseOver={event => handleSub(event.target.id)}
                    to={item.to}
                  >
                    {item.id}
                    {item.subitems
                      ? //   <button style={{ alignSelf: 'right' }} id={item.id}>
                        //     hi
                        //   </button>
                        '+'
                      : ''}
                  </Link>
                </li>
                {sub === item.id && item.subitems ? (
                  <ul className="sub-item">
                    {item.subitems
                      ? item.subitems.map(s => {
                          return (
                            <li>
                              <Link to={s.to}>{s.id}</Link>
                            </li>
                          )
                        })
                      : null}
                  </ul>
                ) : (
                  ''
                )}
              </React.Fragment>
            )
          })}
          <li>
            <Link onClick={props.onToggleMenu} to="/generic">
              Generic
            </Link>
          </li>
          <li>
            <Link onClick={props.onToggleMenu} to="/elements">
              Elements
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="col-6">
            <ul className="sub-item">
              {sub
                ? sub.map(s => {
                    return (
                      <li key={s.id}>
                        <Link onClick={props.onToggleMenu} to={s.to}>
                          {s.id}
                        </Link>
                      </li>
                    )
                  })
                : null}
            </ul>
          </div> */}
      {/* <ul className="actions vertical">
        <li>
          <a href="#" className="button special fit">
            Get Started
          </a>
        </li>
        <li>
          <a href="#" className="button fit">
            Log In
          </a>
        </li>
      </ul> */}
      <a className="close" onClick={props.onToggleMenu} href="javascript:;">
        Close
      </a>
    </nav>
  )
}

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu

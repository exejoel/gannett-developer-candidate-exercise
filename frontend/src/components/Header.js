import React from 'react'

const Header = ({ headerText, logo }) => (
  <div className="app-header">
    <img src={logo} className="app-logo" alt="logo" />
    <h1>{headerText}</h1>
  </div>
)

export default Header

import React from 'react'

const Navbar = ({ showDrawer }) => {
  return (
    <div>Navbar


<button type="primary" onClick={showDrawer}>
        Open
      </button>
    </div>
  )
}

export default Navbar
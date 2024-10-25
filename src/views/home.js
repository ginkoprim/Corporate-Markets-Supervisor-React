import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Corporate Markets Supervisor</title>
        <meta property="og:title" content="Corporate Markets Supervisor" />
      </Helmet>
    </div>
  )
}

export default Home

import React from "react";
import { Helmet } from 'react-helmet'

// Components
import Welcome from "./welcome";

import Background from '../../../assets/about_backgroundLASTVERSION.gif'

const TITLE = 'Home';


const Home = () => {
  let user = null

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <img src={Background} alt="" className="bannerHome" />
      <div className="contentHome">
        <Welcome />


      </div>
    </>
  );
};

export default Home;

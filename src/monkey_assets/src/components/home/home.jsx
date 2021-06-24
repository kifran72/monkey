import React from "react";
import { Helmet } from 'react-helmet'

// Components
import Welcome from "./welcome";

const TITLE = 'Home';


const Home = () => {
  let user = null

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Welcome />
    </>
  );
};

export default Home;

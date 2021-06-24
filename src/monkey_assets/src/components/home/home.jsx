import React from "react";
import { Helmet } from 'react-helmet'

// Material
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

// Components
import NavbarNotConnected from "../navbar/navbarNotConnected";
import Navbar from "../navbar/navbar";
import Welcome from "./welcome";
import ContentNotLogged from "../contentNotLogged";

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

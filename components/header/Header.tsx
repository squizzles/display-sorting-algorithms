import React from "react";
import { Grid, Icon, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";


export const Header = () => {
  return (
    <Grid className="header" >
      <h1>Algosite</h1>
      <Link
        href="https://github.com/squizzles/display-sorting-algorithms"
        target="_blank"
        rel="noopener noreferrer"
        className="header__icon"
      >
        <GitHubIcon />
      </Link>
    </Grid>
  );
};



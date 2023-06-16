import React from "react";
import { Grid,  Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlgositeIcon from "@/public/AlgositeIcon.png";

export const Header = () => {
	return (
		<Grid className="header">
        <Grid className="title">
				  <h1>Algosite</h1>
          <img src={AlgositeIcon.src} alt="Algosite Icon" className="header__icon" />
        </Grid>
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

import React from "react";
import { Grid, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlgositeIcon from "@/public/AlgositeIcon.png";
import Image from "next/image";

export const Header = () => {
	return (
		<Grid className="header">
			<Grid className="title">
				<h1>Algosite</h1>
				<Image
					src={AlgositeIcon.src}
					alt="Algosite Icon"
					className="header__icon"
					width={100}
					height={100}
				/>
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

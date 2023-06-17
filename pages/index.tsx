import React, { Fragment } from "react";
import AlgorithmDisplay from "@/components/algorithm/AlgorithmDisplay";
import AlgoSelector from "@/components/selector/AlgoSelector";
import RandomiseValues from "@/components/buttons/randomiseValues/RandomiseValues";
import RunAlgo from "@/components/buttons/runAlgo/RunAlgo";
import { Box, CssBaseline, Container } from "@mui/material";
import { Header } from "@/components/header/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/globalStyles";
import Controls from "@/components/buttons/Controls";
import { Blurb }  from "@/components/Blurb/Blurb";

export default function Home() {
	return (
		//main page
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<Blurb />
			<Container sx={{ alignItems: "center", justifyContent: "center" }}>
				<Box sx={{ maxWidth: 1200, justifyContent: "center", alignItems: "center", border: "1px" }}>
					<AlgorithmDisplay />
					<Controls />
				</Box>
			</Container>
		</ThemeProvider>
	);
}

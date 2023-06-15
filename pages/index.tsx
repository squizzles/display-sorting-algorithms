import React, { Fragment } from 'react';
import AlgorithmDisplay from '@/components/algorithm/AlgorithmDisplay';
import AlgoSelector from '@/components/selector/AlgoSelector';
import RandomiseValues from '@/components/buttons/randomiseValues/RandomiseValues';
import RunAlgo from '@/components/buttons/runAlgo/RunAlgo';
import { Box, CssBaseline } from '@mui/material';
import  { Header }  from '@/components/header/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/globalStyles';

export default function Home() {
	return (
		//main page
		
			<ThemeProvider theme={theme}>
				<Box >
					<CssBaseline />
					<Header/>
					<AlgorithmDisplay/>
					<AlgoSelector/>
					<RandomiseValues/>
					<RunAlgo/>
				</Box>
			</ThemeProvider>
		
	);
}

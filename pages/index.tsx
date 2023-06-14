import React, { Fragment } from 'react';
import AlgorithmDisplay from '@/components/algorithm/AlgorithmDisplay';
import AlgoSelector from '@/components/selector/AlgoSelector';
import RandomiseValues from '@/components/buttons/randomiseValues/RandomiseValues';
import RunAlgo from '@/components/buttons/runAlgo/RunAlgo';

export default function Home() {
	return (
		//main page
		<Fragment>
			<AlgorithmDisplay/>
			<AlgoSelector/>
			<RandomiseValues/>
			<RunAlgo/>
		</Fragment>
	);
}

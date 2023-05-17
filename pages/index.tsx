import React, { Fragment } from 'react';
import AlgorithmDisplay from '@/components/algorithm/AlgorithmDisplay';
import AlgoSelector from '@/components/selector/AlgoSelector';

export default function Home() {
	return (
		//main page
		<Fragment>
			<AlgorithmDisplay/>
			<AlgoSelector/>
		</Fragment>
	);
}

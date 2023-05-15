import React, { Fragment } from 'react';
import AlgorithmDisplay from '@/Components/algorithm/AlgorithmDisplay';
import AlgoSelector from '@/Components/selector/AlgoSelector';

export default function Home() {
	return (
		<Fragment>
			<AlgorithmDisplay/>
			<AlgoSelector/>
		</Fragment>
	);
}

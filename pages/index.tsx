import { Inter } from 'next/font/google';
import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';

const inter = Inter({ subsets: ['latin'] });

import { setName, updateValues } from '@/store/algoSlice';
import AlgoSelector from '@/Components/selector/AlgoSelector';

export function AlgoUpdater() {
	// The `state` arg is correctly typed as `RootState` already
	const algo = useAppSelector((state) => state.algo.type);
	const dispatch = useAppDispatch();
}

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<h1>Hello World!</h1>
			<AlgoSelector options={[]} />
		</main>
	);
}

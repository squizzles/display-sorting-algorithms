import React from 'react';
import AlgorithmType from '@/algos/AlgorithmType';
import { selectAlgo, selectAlgoType } from '../../store/algoSlice';
import { useSelector, useDispatch } from 'react-redux';

const AlgorithmDisplay: React.FC = () => {
    const algoType = useSelector(selectAlgoType);
    const dispatch = useDispatch();

    return (
        <h1>
            `Selected Algorithm: {algoType}`
        </h1>
    );
};

export default AlgorithmDisplay;
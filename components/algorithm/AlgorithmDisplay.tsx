import Algorithm from '@/algos/Algorithm';
import { selectAlgo } from '../../store/algoSlice';
import { useSelector, useDispatch } from 'react-redux';

const AlgorithmDisplay: React.FC = () => {
    const algoState = useSelector(selectAlgo);
    const dispatch = useDispatch();

    return (
        <h1>
            `Selected Algorithm: {algoState.type}`
        </h1>
    );
};

export default AlgorithmDisplay;
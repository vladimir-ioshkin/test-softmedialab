import { FC } from 'react';
import { getFormattedAmount } from '../../helpers';
import './styles.scss';

const DetailsRow: FC<{ sum: number; text: string }> = ({ sum, text }) => {
    return (
        <div className='d-flex gap-2'>
            <span className='fw-bold mb-1'>{getFormattedAmount(sum, true)}</span>
            <span>{text}</span>
        </div>
    );
};

export default DetailsRow;

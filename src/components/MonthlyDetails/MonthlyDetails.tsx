import { FC } from 'react';
import DetailsRow from './DetailsRow';
import { getDigits } from '../../helpers';
import './styles.scss';

const percents = 100;
const taxPercent = 13;

const MonthlyDetails: FC<{ amount: string; withoutTax: boolean }> = ({ amount, withoutTax }) => {
    const sum = Number(getDigits(amount));

    if (!sum) return null;

    const salary = withoutTax ? sum : sum * (percents - taxPercent) / percents;
    const tax = salary / (percents - taxPercent) * taxPercent;
    const fullSum = salary + tax;

    return (
        <div className='mx-3 p-3 bg-warning bg-opacity-25 details-block'>
            <DetailsRow sum={salary} text='сотрудник будет получать на руки' />
            <DetailsRow sum={tax} text={`НДФЛ, ${taxPercent}% от оклада`} />
            <DetailsRow sum={fullSum} text='за сотрудника в месяц' />
        </div>
    );
};

export default MonthlyDetails;

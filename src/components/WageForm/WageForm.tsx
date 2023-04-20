import { FC } from 'react';
import { Form } from 'react-final-form';
import AmountInput from './Fields/AmountInput';
import PeriodRadio from './Fields/PeriodRadio';
import TaxSwitch from './Fields/TaxSwitch';
import { IWage, WagePeriod } from '../types';
import './styles.scss';

const initialValues: IWage = {
    period: WagePeriod.MonthlyWage,
    withoutTax: true,
    amount: '',
};

const WageForm: FC = () => {
    const onSubmit = (values: IWage) => console.log('values: ', values);

    return (
        <div className='form-wrapper'>
            <h1 className='form-title text-muted'>Сумма</h1>
            <Form
                initialValues={initialValues}
                onSubmit={onSubmit}
                render={({ handleSubmit, values }) => (
                    <form onSubmit={handleSubmit}>
                        <PeriodRadio />
                        <div className='mx-5 mb-3'>
                            <TaxSwitch />
                            <AmountInput period={values.period} />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                )}
            />
        </div>
    );
};

export default WageForm;

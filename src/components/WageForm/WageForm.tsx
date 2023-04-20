import { FC } from 'react';
import { Form } from 'react-final-form';
import { IWage, WagePeriod } from '../types';

const initialValues: IWage = {
    period: WagePeriod.MonthlyWage,
    withoutTax: true,
    amount: '',
};

const WageForm: FC = () => {
    const onSubmit = (values: IWage) => console.log('values: ', values);

    return (
        <>
            <h1 className='h6 text-muted'>Сумма</h1>
            <Form
                initialValues={initialValues}
                onSubmit={onSubmit}
                render={() => null}
            />
        </>
    );
};

export default WageForm;

import { FC } from 'react';
import { Field } from 'react-final-form';
import CustomRadio from '../../CustomRadio/CustomRadio';
import { WagePeriod } from '../../types';

const PeriodRadio: FC = () => {
    return (
        <div className='mx-3 mb-2'>
            <Field name='period' type='radio' value={WagePeriod.MonthlyWage}>
                {({ input }) => (
                    <CustomRadio {...input} id={WagePeriod.MonthlyWage} label='Оклад за месяц' />
                )}
            </Field>
            <Field name='period' type='radio' value={WagePeriod.MinimalWage}>
                {({ input }) => (
                    <CustomRadio {...input} id={WagePeriod.MinimalWage} label='МРОТ' />
                )}
            </Field>
            <Field name='period' type='radio' value={WagePeriod.DailyWage}>
                {({ input }) => (
                    <CustomRadio {...input} id={WagePeriod.DailyWage} label='Оплата за день' />
                )}
            </Field>
            <Field name='period' type='radio' value={WagePeriod.HourlyWage}>
                {({ input }) => (
                    <CustomRadio {...input} id={WagePeriod.HourlyWage} label='Оплата за час' />
                )}
            </Field>
        </div>
    );
};

export default PeriodRadio;

import { FC } from 'react';
import { Field } from 'react-final-form';
import BootstrapForm from 'react-bootstrap/Form';
import { WagePeriod } from '../types';

const PeriodRadio: FC = () => {
    return (
        <>
            <Field name='period' type='radio' value={WagePeriod.MonthlyWage}>
                {({ input }) => (
                    <BootstrapForm.Check {...input} type='radio' id={WagePeriod.MonthlyWage} label='Оклад за месяц' />
                )}
            </Field>
            <Field name='period' type='radio' value={WagePeriod.MinimalWage}>
                {({ input }) => (
                    <BootstrapForm.Check {...input} type='radio' id={WagePeriod.MinimalWage} label='МРОТ' />
                )}
            </Field>
            <Field name='period' type='radio' value={WagePeriod.DailyWage}>
                {({ input }) => (
                    <BootstrapForm.Check {...input} type='radio' id={WagePeriod.DailyWage} label='Оплата за день' />
                )}
            </Field>
            <Field name='period' type='radio' value={WagePeriod.HourlyWage}>
                {({ input }) => (
                    <BootstrapForm.Check {...input} type='radio' id={WagePeriod.HourlyWage} label='Оплата за час' />
                )}
            </Field>
        </>
    );
};

export default PeriodRadio;

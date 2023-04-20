import { FC } from 'react';
import { Field } from 'react-final-form';
import CustomInput from '../../CustomInput/CustomInput';
import { WagePeriod } from '../../types';

const labelsMap = {
    [WagePeriod.MonthlyWage]: '₽',
    [WagePeriod.MinimalWage]: '₽',
    [WagePeriod.DailyWage]: '₽ в день',
    [WagePeriod.HourlyWage]: '₽ в час',
};

const AmountInput: FC<{ period: WagePeriod }> = ({ period }) => {
    return (
        <Field name='amount'>
            {({ input }) => (
                <CustomInput
                    {...input}
                    onChange={(e: { target: { value: string; }; }) => input.onChange(e.target.value.replace(/[^+\d]/g, ''))}
                    onBlur={() => {
                        const value = Number(input.value);
                        if (!value) return;

                        const formattedValue = Intl.NumberFormat('ru-RU').format(value);
                        input.onChange(formattedValue);
                    }}
                    label={labelsMap[period]}
                />
            )}
        </Field>
    );
};

export default AmountInput;

import { FC } from 'react';
import { Field } from 'react-final-form';
import CustomInput from '../../CustomInput/CustomInput';
import { getFormattedAmount, getDigits } from '../../../helpers';
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
                    onChange={(e) => input.onChange(getDigits(e.target.value))}
                    onBlur={() => {
                        const formattedValue = getFormattedAmount(input.value);
                        input.onChange(formattedValue);
                    }}
                    label={labelsMap[period]}
                />
            )}
        </Field>
    );
};

export default AmountInput;

import { FC } from 'react';
import { Field } from 'react-final-form';
import CustomSwitch from '../../CustomSwitch/CustomSwitch';

const TaxSwitch: FC = () => {
    return (
        <Field name='withoutTax' type='checkbox'>
            {({ input }) => (
                <CustomSwitch {...input} labelUncheck='Указать с НДФЛ' labelCheck='Без НДФЛ' id='withoutTax' />
            )}
        </Field>
    );
};

export default TaxSwitch;


import { FC } from 'react';
import { FieldInputProps } from 'react-final-form';
import { Form as BootstrapForm } from 'react-bootstrap';
import './styles.scss';

const CustomRadio: FC<FieldInputProps<string, HTMLElement>> = (props) => {
    return (
        <BootstrapForm.Check className='custom-radio' {...props} type='radio' />
    );
};

export default CustomRadio;

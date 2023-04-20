import { FC } from 'react';
import { FieldInputProps } from 'react-final-form';
import { Form as BootstrapForm } from 'react-bootstrap';
import './styles.scss';

const CustomInput: FC<FieldInputProps<string, HTMLElement>> = ({ label, ...props }) => {
    return (
        <div className='custom-input d-flex align-items-center gap-2'>
            <BootstrapForm.Control className='rounded-pill' size='sm' {...props} />
            <BootstrapForm.Label className='m-0'>{label}</BootstrapForm.Label>
        </div>
    );
};

export default CustomInput;

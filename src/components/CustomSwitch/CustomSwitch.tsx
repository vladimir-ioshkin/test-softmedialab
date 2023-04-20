import { FC } from 'react';
import { Form as BootstrapForm } from 'react-bootstrap';
import { FieldInputProps } from 'react-final-form';
import './styles.scss';

const CustomSwitch: FC<FieldInputProps<string, HTMLElement> & { labelUncheck: string; labelCheck: string }> = ({ checked, labelUncheck, labelCheck, onChange, ...props }) => {
    const labelClasses = 'm-0';
    const selectedLabelClasses = labelClasses.concat(' text-muted');

    return (
        <div className='custom-switch'>
            <div className='d-flex align-items-end mb-2 gap-2'>
                <BootstrapForm.Label
                    className={checked ? selectedLabelClasses : labelClasses}
                    onClick={() => onChange(false)}
                >
                    {labelUncheck}
                </BootstrapForm.Label>
                <BootstrapForm.Check checked={checked} onChange={onChange} {...props} type='switch' className='switch' />
                <BootstrapForm.Label
                    className={checked ? labelClasses : selectedLabelClasses}
                    onClick={() => onChange(true)}
                >
                    {labelCheck}
                </BootstrapForm.Label>
            </div>
        </div>
    );
};

export default CustomSwitch;

import { useRef, FC, useState } from 'react';
import { Overlay } from 'react-bootstrap';
import './styles.scss';

const InfoTooltip: FC<{ text: string }> = ({ text }) => {
    const [hover, setHover] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const tooltipTriggerRef = useRef<HTMLDivElement>(null);

    const tooltipClasses = 'info-tooltip-trigger';
    const openedTooltipClasses = tooltipClasses.concat(' opened')

    return (
        <>
            <div
                className={show ? openedTooltipClasses : tooltipClasses}
                ref={tooltipTriggerRef}
                onClick={() => setShow((prev) => !prev)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
            <Overlay
                target={tooltipTriggerRef.current}
                placement='bottom-start'
                show={hover || show}
                offset={[10, 5]}
            >
                {/* eslint-disable @typescript-eslint/no-unused-vars */}
                {({
                      placement,
                      arrowProps,
                      show,
                      popper,
                      hasDoneInitialMeasure,
                      ...props
                }) => (
                    <div
                        {...props}
                        className='info-tooltip'
                    >
                        {text}
                    </div>
                )}
                {/* eslint-enable @typescript-eslint/no-unused-vars */}
            </Overlay>
        </>
    );
};

export default InfoTooltip;

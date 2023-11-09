import React, { ReactNode, useState} from "react";
import './Tooltip.scss';

interface TooltipProps {
    text?: string;
    children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }): JSX.Element => {
    const [visibility, setVisibility] = useState(false);

    return (
        <div className="tooltip-wrapper" onMouseEnter={() => setVisibility(true)} onMouseLeave={() => setVisibility(false)}>
            {children}
            {visibility ? <div className="tooltip">{text}</div> : null}
        </div>
    )
}


export default Tooltip;
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JobHeader = (props) => {

    let isSelected = props.title == props.selected;
    let className = isSelected ? 'jobs-box-selected' : 'jobs-box'
    let className2 = isSelected ? 'jobs-box-inner-selected' : 'jobs-box-inner'


    return <div onClick={() => props.onClick(props.title)} className={className}>
        <div className={className2}>
            <FontAwesomeIcon icon={props.icon} />
            {
                props.children
            }
        </div>
    </div>
}

export default JobHeader;
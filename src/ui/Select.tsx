import React, {FC} from 'react';
import { default as ReactSelect, OnChangeValue} from "react-select";
import classNames from "classnames";
import {IOption} from "../types/types";

export interface ISelectProps{
    options: IOption[];
    value: IOption;
    onChange: OnChangeValue<any, any>
}
export const Select: FC<ISelectProps> = ({options, value, onChange}) => {
    return (
        <ReactSelect
            className={classNames('Select')}
            options={options}
            value={value}
            onChange={onChange}
        />
    );
};

export default Select;
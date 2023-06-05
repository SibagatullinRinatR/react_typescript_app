import React, {FC, useState} from 'react';
import FilterItem from "./FilterItem";
import {TypeFilterItem} from "../types/types";
import {inspect} from "util";


interface LiItemProps {
    myKey?: string;
    name: string;
    value: string;
}

const LiItem: FC<LiItemProps> = ({name, value, myKey}) => {
 const myArray = [{myKey: "sizes", value: "50"},
    {myKey: "sizes", value: "52"}]
    function checkItem(k:string|undefined, v:string, flag:boolean){
            setIsChecked(!isChecked)

    }
    const [isChecked, setIsChecked] = useState<boolean>(false);
    return (
        <li >
            <input id={name}
                   type="checkbox"
                   checked={isChecked}
                   onChange={() => checkItem(myKey, value, isChecked)
                       // setIsChecked(!isChecked)
            }/>
            <label htmlFor={name}>{name}</label>
        </li>
    );
};

export default LiItem;
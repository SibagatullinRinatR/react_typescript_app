import React, {FC, useState} from 'react';
import {IValue, TFilterItemProps} from "../types/types";
import LiItem from "./LiItem";

interface FilterSubItemsProps{
    values: IValue[];
    myKey?: string;
    children?: JSX.Element|JSX.Element[];
        // React.ReactNode;
}
const FilterSubItems: FC<FilterSubItemsProps> = (props) => {
    return (
        <>
            {props.values.map((f) =>
                    <LiItem key={f.value} value={f.value} name={f.name} myKey={props.myKey}/>)}
        </>


    );
};

export default FilterSubItems;
import React, {FC, useState} from 'react';
import FilterSubItems from "./FilterSubItems";
import {TFilterItemProps} from "../types/types";

const FilterItem:FC<TFilterItemProps> = ({title, values, myKey}) => {

    const [filterActive, setFilterActive] = useState(false)


    return (
        <li className="category-filter__item">
            <button className="category-filter__btn"
                    onClick={() =>
                        setFilterActive(!filterActive)
                    }
            >
                <span className="category__name">{title}</span>
            </button>
            <hr/>
            <ul className={filterActive ? "filter__values_active" : "filter__values"}>
            <FilterSubItems values={values} myKey={myKey}/>
            </ul>
        </li>
    );
};

export default FilterItem;
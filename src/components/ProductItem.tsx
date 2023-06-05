import React, {FC} from 'react';
import {IItem} from "../types/types";
import Image from "./Image";

interface ProductItemProps{
    item: IItem;
}
const ProductItem: FC<ProductItemProps> = ({item}) => {
    return (
        <li className="catalog__link">
            <span className="card-image">
                <Image/>
                {/*{item.image}*/}
            </span>
            <div className="card-bottom">
                <h2 className="card-bottom__heading"></h2>
                <span className="card-bottom__name">{item.name}</span>
                <span className="card-bottom__price">{item.price}{item.currencyTitle}</span>
            </div>

        </li>
    );
};

export default ProductItem;
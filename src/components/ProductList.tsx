import React, {FC} from 'react';
import {IItem} from "../types/types";
import ProductItem from "./ProductItem";

interface ProductListProps{
    items: IItem[]
}
const ProductList: FC<ProductListProps> = ({items}) => {

    return (
        <ul className="catalog__list">
            {items.map(item =>
                <ProductItem key={item.id} item={item}/>
                )}
        </ul>
    );
};

export default ProductList;
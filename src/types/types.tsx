export interface IGoods{
    filter: IFilter;
    items: IItem[];
    meta: IMeta;
}

export interface IFilter{
    filters: TFilterItemProps[];
}
export interface IItem{
    id: string;
    name: string;
    image: string;
    price: number;
    currencyTitle: string;
}

export interface IMeta{
    currentPage: number;
    lastPage: number;
    total: number;
}

export type TFilterItemProps = {
    key?: string;
    myKey?:string;
    title: string;
    values: IValue[]
}
export type IValue = {
    value: string;
    name: string;
}


export type IOption = {
    label: string;
    value: string;
}

export type TypeFilterItem ={
    key: string;
    value: string|number;
    name: string;
}





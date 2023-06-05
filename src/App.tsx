import React, {MouseEventHandler, useEffect, useRef, useState} from 'react';
import './App.css';
import ProductList from "./components/ProductList";
import {IGoods, IItem, IMeta, IOption, TFilterItemProps, TypeFilterItem} from "./types/types";
import axios from "axios";
import Select from "./ui/Select";
import Paginate from "./ui/Paginate";
import icon from "./images/photo_2023-05-10_10-56-23.jpg";
import FilterItem from "./components/FilterItem";
import {log} from "util";

function App() {
    const[items, setItems] = useState<IItem[]>([]);
    const[filters, setFilters] = useState<TFilterItemProps[]>([])
    const [currentPage, setCurrentPage] =useState(1)
    const [pages, setPages] = useState<number[]>([]);
    const[selectedOption, setSelectedOption] = useState<IOption>({value: "", label: "Recommended"})
    const myRef=useRef<null | HTMLDivElement>(null);
    const[appliedFilter, setAppliedFilter]=useState([])


    useEffect(() => {
        fetchItems()
    }, [currentPage, selectedOption, appliedFilter])

    async function fetchItems() {
        try {
            const filterArray: TypeFilterItem[] = [ ];

            const url = "https://api.bml.true-cms.ru/api/goods" + `?page=${currentPage}` + `${selectedOption.value}`

            const data = await axios.get<IGoods>(url).then(resp => resp.data)
            setItems(data.items)

            const newFilters:TFilterItemProps[] = (data.filter.filters);
            newFilters.forEach((item) => {item.myKey=item.key})
            setFilters(newFilters);

            const newPages: number[] = [];
            newPages.push(1)
            const lastPage = data.meta.lastPage;
            if(lastPage <= 7){
                for(let i= 2; i<lastPage; i++){
                    newPages.push(i)
                }
            } else if(currentPage<=4){
                for(let i= 2; i<=6; i++){
                    newPages.push(i)
                }
                newPages.push(-1)
            } else if((lastPage-currentPage)<4){
                newPages.push(-1)
                for(let i= lastPage-5; i<lastPage; i++){
                    newPages.push(i)
                }
            } else if(currentPage>4 && (lastPage-currentPage>3)){
                newPages.push(-1)
                for(let i= currentPage-2; i<currentPage+3; i++){
                    newPages.push(i)
                }
                newPages.push(-1)
            }
            if (lastPage>1) newPages.push(lastPage)

            setPages(newPages)
        } catch (e) {
            console.log(e)
        }
    }
    //////////////////////
    console.log(items);
    const newItems = items.map((item) => item.name);
    for(let item of items){console.log(item.name)};
    /////////////////////////
  return (
    <div className="App">
        <div className="category">
            <div ref={myRef} className="container">
                <h1 className="category__heading">Clothes</h1>
            </div>
            <div className="container">
                <section className="category__wrapper">
                    <div className="category-filter">
                        <ul className="category-filter__list">
                            {filters.map((f) =>
                                <FilterItem
                                    //selectedItems={selectedItems}
                                    key={f.key}
                                    myKey={f.myKey}
                                    title={f.title}
                                    values={f.values}
                                />)}
                        </ul>
                    </div>

                    <div className="catalog">
                        <div className="head-setting">
                            <Select
                                options={[{value: "", label: "Recommended"},{value: "&sortByPrice=desc", label: "High price"},{value: "&sortByPrice=asc", label: "Low price"}]}
                                value={selectedOption}
                                onChange={(option:IOption) => setSelectedOption(option)}/>
                        </div>
                            <ProductList items={items}/>
                        <div className="catalog__bottom">
                            <div className="catalog__scroll-wrapper">
                                <button
                                    className="catalog-btn"
                                    onClick={() => myRef.current?.scrollIntoView()}>
                                    <img src={icon} style={{rotate: "270deg",width: "20px"}}/>
                                </button>
                                <hr/>
                            </div>
                            <div className="catalog__pagination-wrapper">
                                <Paginate currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  );
}

export default App;

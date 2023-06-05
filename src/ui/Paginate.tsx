import React, {FC} from 'react';
import icon from "../images/photo_2023-05-10_10-56-23.jpg";

interface PaginateProps{
    currentPage: number;
    setCurrentPage(value:number):void;
    pages: number[];
}
const Paginate:FC<PaginateProps> = ({currentPage,setCurrentPage, pages}) => {
    return (
        <div style={{display: "flex", justifyContent: "space-between", padding: "0 20%",
            alignItems: "center", width: "100%"}}>
            <button
                className="catalog-btn"
                onClick={() => setCurrentPage(currentPage-1)}>
                <img src={icon} style={{rotate: "180deg", width: "20px"}}/></button>
            <div>
                {pages.map((p) => {
                    if (p === -1){
                        return <span key={Math.random()}>... </span>
                    }
                    return(

                        <span
                            style = {{cursor: "pointer", fontSize: p===currentPage ? "30px" : "25px"}}
                            onClick={() => setCurrentPage(p)}
                            key={p}>{p}  </span>)  }
                )}
            </div>

            <button
                className="catalog-btn"
                onClick={() => setCurrentPage(currentPage+1)}>
                <img src={icon} style={{width: "20px"}}/>
            </button>

        </div>
    );
};

export default Paginate;
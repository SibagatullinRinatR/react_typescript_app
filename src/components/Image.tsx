import {FC, ImgHTMLAttributes, useEffect, useState} from "react";
import imageToAdd from "./../images/rec-item5.webp"


const Image:FC= () => {
    const [image, setImage] = useState(null);

    // useEffect(() => {
    //     import(`./../images/${name}`)
    //         .then(image => {
    //             setImage(image.default)
    //
    //         })
    // }, [name]);

    return (
        // <></>
        <img className="catalog__image" src={imageToAdd} alt="image"/>

    );}



export default Image;
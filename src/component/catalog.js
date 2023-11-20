import React from "react";
import '../pages/UI.css';
import './catalog.css';

function Catalog(props) {
    const {imgUrl, title, desc} = props;
    const imgStyle = {
        backgroundImage: 'url${props.imgUrl}'
    }
    return (
    <div class="column">
        <div class="catalog-img" style={imgStyle}></div>
        <h3 class="catalog-title">{props.title}</h3>
        <span>{props.desc}</span>
    </div>
        );
};
export default Catalog;
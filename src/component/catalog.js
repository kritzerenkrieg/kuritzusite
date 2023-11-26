import React from "react";
import '../pages/UI.css';
import './catalog.css';

function Catalog(props) {
    const {imgSrc, title, desc} = props;
    return (
    <div class="catalog-box">
        <div class="catalog-img mb-5"
        style={{
                backgroundImage: imgSrc ? `url(${imgSrc})` : 'none',
            }}></div>
        <h3 class="catalog-title">{title}</h3>
        <div class="text-content mb-5">{desc}</div>
    </div>
        );
};
export default Catalog;
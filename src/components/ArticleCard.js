import React from "react";

function ArticleCard(
    blurb, data, imageAlt, imageSrc, title
){

    return(
        <div className="articleCard">
            <div className="articleCard--image">
                <img src={imageSrc} alt={imageAlt}/>
            </div>
            <div className='articleCard--text'>
                <h2>{title}</h2>

            </div>
        </div>
    )
}

export default ArticleCard;
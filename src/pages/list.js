import React from "react";
import ArticleCard from "../components/ArticleCard";
import Data from "../components/data";

//just a javascript file

function List(){
    console.log(Data);
    return (
        <main className="">
            <h1>Articles List</h1>
            {Data.map((article,i)=>(
                <ArticleCard 
                    key={i}
                    //react requires that every item needs a unique identifier
                    blurb={article.blurb}
                    date={article.publishedDate}
                    imageAlt={article.image.alt}
                    imageSrc={article.image.url}
                    title="Article Title"
                />
            ))}
  
        </main>
    );
}

export default List;

//wrapping div 
//title
//date
//text (probably needs its own wrapper as well)

//read more hyperlink
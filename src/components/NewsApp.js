import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/default-news.png';

const NewsApp = ({ category }) => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' + `category=${category}&` +
        'apiKey=952da4498e3e448883429cd846ca31e5';

    useEffect(() => {
        getData();
    }, [category]);

    const getData = async () => {
        let result = await fetch(url);
        result = await result.json();
        console.log(result.articles.description)
        setNews(result.articles)
    }

    return (
        <div>
            <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
            {error && <p>Error: {error}</p>}
                {news.map((article, index) => (
                        <div className="card bg-dark text-light d-inline-block mx-3 my-3 px-3 py-3" style={{maxWidth:"345px"}} key={index}>
                            <img src={article.urlToImage ? article.urlToImage : image} style={{ height: "15rem", width: "20rem" }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{article.title.slice(0, 50)}</h5>
                                <p className="card-text">{article.description ? article.description.slice(0, 90) : "No description fetched for this article"}</p>
                                <Link to={`/article/${index}`}>
                                    <button className="btn btn-primary">Read More</button>
                                </Link>
                            </div>
                        </div>
                ))}
        </div>
    );
};

export default NewsApp;

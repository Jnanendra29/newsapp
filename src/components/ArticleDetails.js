import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import image from '../assets/default-news.png';
import { Link } from 'react-router-dom';
import '../App.css'

const ArticleDetails = ({ category }) => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' + `category=${category}&` +
        'apiKey=952da4498e3e448883429cd846ca31e5';

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                return response.json();
            })
            .then(data => {
                const selectedArticle = data.articles[id];
                setArticle(selectedArticle);
            })
            .catch(error => {
                console.error('Error fetching news:', error);
            });
    }, [id]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div className="article-details-container">
        <h1 className="article-title">{article.title}</h1>
        <img src={article.urlToImage} alt={article.title} className="article-image" />
        <p className="article-description">{article.description? article.description : "No description provided through API. Kindly click on Read Full Article link below for more details"}</p>
        <div className="article-details">
            <p>Author: {article.author? article.author:"Anonymous"}</p>
            <p>Published At: {article.publishedAt?article.publishedAt:"No Published Details"}</p>
            <p>Source: {article.source?.name}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read Full Article</a>
            <Link to='/'> <button className="btn btn-primary mx-3">Back to Home</button></Link>
        </div>
    </div>
    );
};

export default ArticleDetails;

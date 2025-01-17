import React, { useEffect, useState } from 'react';
import  API  from '../../api/API'; // Importing the pre-configured Axios instance
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Article {
  id: number;
  image: string;
  title: string;
  date: string;
  comments: number;
  author_id: number;
  likes: number;
  slug: string;
  viewed: number;
}

const BlogComponent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    API.get<{ newsArticles: Article[] }>('https://admin-carmart.windsormotors.co.ke/client/news')
    
      .then(response => {
        console.log('API Response:', response.data);
        setArticles(response.data.newsArticles);
        setLoading(false);
      })
      .catch((err) => {
        console.error('API Error:', err.response || err.message);
        setError('Failed to fetch articles');
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="blog-carousel-container">
      <Slider {...settings}>
        {articles.map(article => (
          <div key={article.id} className="blog-card">
            <img src={article.image} alt={article.title} className="blog-image" />
            <div className="blog-content">
              <p>{new Date(article.date).toDateString()}</p>
              <h3>{article.title}</h3>
              <p>{article.comments} Comments</p>
              <p>By Urban Drive Autos</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogComponent;

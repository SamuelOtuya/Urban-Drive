import { FaCalendar, FaEye, FaHeart } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const NewsArticles = () => {
  const articles = [
    {
      author_id: 1,
      comments: 4,
      date: "Fri, 13 Sep 2024 14:07:48 GMT",
      id: 3,
      image: "/api/placeholder/800/600",
      likes: 0,
      slug: "welcome-to-carmart-your-ultimate-guide-to-smart-car-buying-and-selling-546853",
      title: "Welcome to Carmart: Your Ultimate Guide to Smart Car Buying and Selling",
      viewed: 0
    },
    {
      author_id: 1,
      comments: 7,
      date: "Fri, 23 Aug 2024 10:29:28 GMT",
      id: 2,
      image: "/api/placeholder/800/600",
      likes: 0,
      slug: "need-help-setting-823948",
      title: "Need help setting",
      viewed: 0
    },
    {
      author_id: 1,
      comments: 2,
      date: "Thu, 22 Aug 2024 13:16:41 GMT",
      id: 1,
      image: "/api/placeholder/800/600",
      likes: 0,
      slug: "looking-for-more-468847",
      title: "Looking for more?",
      viewed: 0
    }
  ];

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  Car Review
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 line-clamp-2">
                {article.title}
              </h2>
              
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <FaCalendar size={16} className="mr-2" />
                <span>{formatDate(article.date)}</span>
              </div>
              
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <FaMessage size={16} className="mr-1" />
                    <span>{article.comments}</span>
                  </div>
                  <div className="flex items-center">
                    <FaHeart size={16} className="mr-1" />
                    <span>{article.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <FaEye size={16} className="mr-1" />
                    <span>{article.viewed}</span>
                  </div>
                </div>
                <button className="text-orange-500 hover:text-orange-600 font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsArticles;
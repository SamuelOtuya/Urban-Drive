import { useState, useEffect } from 'react';
import API from '../../api/API';
import { FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';

const BlogCard = ({ post }: { post: any }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img 
          src={post.image || "/client/News"}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm">{new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}</span>
          
          <div className="flex items-center gap-1 ml-auto">
            <FaMessage className="w-4 h-4" />
            <span className="text-sm">{post.comments} Comments</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4 flex-grow">{post.title}</h2>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
            <span className="font-medium">URBAN DRIVE AUTOS</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-gray-600">
              <FaHeart className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 3;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await API.get('/client/news');
        const data = response.data;
        
        if (data.message === "Request Success" && Array.isArray(data.newsArticles)) {
          setPosts(data.newsArticles.map((article: any) => ({
            id: article.id,
            title: article.title,
            date: article.date,
            comments: article.comments,
            image: article.image,
            likes: article.likes,
            viewed: article.viewed,
            slug: article.slug,
            author_id: article.author_id
          })));
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    
    fetchNews();
  }, []);

  const nextPage = () => {
    if ((currentPage + 1) * postsPerPage < posts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentPosts = posts.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 text-center">Recent News</h1>
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <button 
          onClick={prevPage}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 bg-white rounded-full p-2 shadow-md border-2 border-orange-500 flex items-center justify-center hover:bg-orange-50 transition-colors disabled:opacity-50 disabled:hover:bg-white"
          disabled={currentPage === 0}
        >
          <FaChevronLeft className="w-6 h-6 text-orange-500" />
        </button>

        <button 
          onClick={nextPage}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 bg-white rounded-full p-2 shadow-md border-2 border-orange-500 flex items-center justify-center hover:bg-orange-50 transition-colors disabled:opacity-50 disabled:hover:bg-white"
          disabled={(currentPage + 1) * postsPerPage >= posts.length}
        >
          <FaChevronRight className="w-6 h-6 text-orange-500" />
        </button>
      </div>
    </div>
  );
};

export default BlogSection;

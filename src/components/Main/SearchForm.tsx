"use client";

const SearchForm = () => {
    return (
      <div className="container mx-auto -mt-8 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-lg flex gap-4">
          <select className="flex-1 p-2 border rounded">
            <option>Choose Make</option>
          </select>
          <select className="flex-1 p-2 border rounded">
            <option>Choose Model</option>
          </select>
          <select className="flex-1 p-2 border rounded">
            <option>Select Budget</option>
          </select>
          <button className="bg-orange-500 text-white px-6 py-2 rounded">
            Find a Car
          </button>
        </div>
      </div>
    );
  };

export default SearchForm
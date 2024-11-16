import React, { useEffect, useState } from "react";

const NewsBoard = () => {
  const [articals, setArticals] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((Response) => response.json())
      .then((data) => setArticals(data.articals));
  }, []);
  return (
    <div>
      <h2 className="text-center ">
        Latest <span className="badge bg-danger fs-5">News</span>
      </h2>
    </div>
  );
};

export default NewsBoard;

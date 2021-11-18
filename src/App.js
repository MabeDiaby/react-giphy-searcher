import React, {useState, useEffect} from 'react';
import SearchForm from './componets/SearchForm';
import SearchResults from './componets/SearchResults';
// import './index.css'

// const images = [
//   {
//     id: 1,
//     url: 'https://media.giphy.com/media/3DsNP07nApt1eEyjvM/giphy.gif'
//   },
//   {
//     id: 2,
//     url: 'https://media1.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif'
//   },
//   {
//     id: 3,
//     url:
//       'https://www.thisiscolossal.com/wp-content/uploads/2018/04/agif2opt.gif'
//   },
//   {
//     id: 4,
//     url: 'https://media.giphy.com/media/3oEdva9BUHPIs2SkGk/giphy.gif'
//   },
//   {
//     id: 5,
//     url: 'https://media.giphy.com/media/3o6ozoD1ByqYv7ARIk/giphy.gif'
//   },
//   {
//     id: 6,
//     url: 'https://buffer.com/library/wp-content/uploads/2016/06/giphy.gif'
//   },
//   {
//     id: 7,
//     url: 'https://media4.giphy.com/avatars/default5.gif'
//   },
//   {
//     id: 8,
//     url: 'https://media2.giphy.com/media/3oEduPff5ErjNmlbwY/source.gif'
//   }
// ];

function App() {
  const searchOptions = {
    key: process.env.REACT_APP_GIPHY_KEY,
    limit: 25,
    rating: 'G',
    api: 'https://api.giphy.com/v1/gifs',
    endpoint: '/search'
  };
  
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    getImages();
  }, []);

  
  function getImages () {
    // const searchOptions = {
      //   key: process.env.REACT_APP_GIPHY_KEY,
      //   limit: 25,
      //   rating: 'G',
      //   api: 'https://api.giphy.com/v1/gifs/search?api_key=KynusDCYH27D0KoUwDdDIhUz45b7LD5D&q=&limit=25&offset=0&rating=g&lang=en',
      //   endpoint: '/search'
      // };
      
      const searchString = 'minions';
      
      /* Build a URL from the searchOptions object */
      
      const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString} &limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;
      
      fetch(url)
      .then(response => response.json())
      .then(response => {
        setImages(response.data);
      })
      .catch(console.error);
      
    }
    return (
      <div>
        <h1>Giphy Searcher</h1>
        <SearchForm />
        <SearchResults images={images} />
      </div>
    );
}

export default App;
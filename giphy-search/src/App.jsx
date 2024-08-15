import { useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import API_KEY from '../config'

function App() {
  const [gifData, setGifData] = useState([])
  const [errorState, setErrorState] = useState('')

  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const fetchURL = query.length 
        ? `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3` 
        : `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3`

      const [data,error] = await handleFetch(fetchURL)

      if (data) setGifData(data)
      if (error) setErrorState(error);
    };
    fetch()
  }, [query])

  if (errorState) return <p>{errorState.message}</p>

  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch setGifData={setGifData} query={query} setQuery={setQuery}/>
        <br />
        <GifContainer gifList={gifData.data}/>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react"
import { handleFetch } from "../utils";
import API_KEY from "../../config";

function GifSearch({setGifData, query, setQuery}) {
    const [errorState, setErrorState] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const [data, error] = await handleFetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=2`);
        if (data) setGifData(data);
        if (error) setErrorState(error);

        // setQuery('')
    }
    
    if (errorState) return <p>{errorState.message}</p>

    return (
        <form>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput" value={query} onChange={(e) => setQuery(e.target.value)}/>
            {/* <button className="btn btn-success" onClick={handleSubmit}>Search</button> */}
        </form>
    )
}

export default GifSearch 

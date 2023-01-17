import React from "react";
import { useEffect } from "react";
// api key = 5769a54d

const API_URL = 'http://www.omdbapi.com?apikey=5769a54d';

//hook 


const App = () => {

    //asynchronuse data which means it takes time to load the data
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(() =>{
        searchMovies('Spiderman');
    }, []);
    
    return (
        <h1>App</h1>
    )
}


export default App;
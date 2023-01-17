import React from "react";
import { useState, useEffect } from "react";
// api key = 5769a54d
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

//API url
const API_URL = 'http://www.omdbapi.com?apikey=5769a54d';


const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() =>{
        searchMovies('Batman');
    }, []);
    
    //asynchronuse data which means it takes time to load the data
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search"> 
                <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}></img>
            </div>
            {
                movies?.length > 0 ? (
                    <div className="container"> 
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                    
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
            
        </div>

    )
}


export default App;
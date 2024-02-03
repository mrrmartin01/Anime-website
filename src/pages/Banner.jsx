import React, {useState, useEffect} from 'react';
import './banner.css';
import bgImg from '../images/Attack_on_Titans_preview.jpg'
import MovieComponent from '../components/MovieContent';
import MovieDate from '../components/MovieDate';
import PlayBtn from '../components/PlayBtn';
import MovieSwiper from '../components/MovieSwiper';

function Banner() {
    const [movies, setMovies] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:3000/data/movieData.json')
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(e=> console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);
    
  return (
    <div className='banner'>
        <div className="movie">
            <img src={bgImg} alt="Background Img" className='bgImg active'></img>
            <div className="container-fluid">
                <div className="row">
                    <div className='col-lg-6 col-md-12'>
                        <MovieComponent/>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <MovieDate/>
                       <PlayBtn/>
                    </div>
                </div>
            </div>
        </div>
        {
            movies && movies.length>0 && <MovieSwiper slides= { movies} />}
    </div>
  )
}

export default Banner
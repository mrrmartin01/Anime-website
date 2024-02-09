import React, {useState, useEffect} from 'react';
import './banner.css';
import bgImg from '../images/Attack_on_Titans_preview.jpg'
import MovieContent from '../components/MovieContent';
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

    const handleSlideChange = id =>{
        console.log(id)
    }
    
  return (
    <div className='banner'>
        {
            movies && movies.length>0 && movies.map(movie => (
                <div className="movie" key={movie.id}>
                    <img src={movies.bgImg} alt="Background Img" className='bgImg'></img>
                    <div className="container-fluid">
                        <div className="row">
                            <div className='col-lg-6 col-md-12'>
                                <MovieContent/>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <MovieDate/>
                                <PlayBtn/>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        
        {
            movies && movies.length>0 && <MovieSwiper slides={movies} slideChange={handleSlideChange} />
        }
    </div>
  )
}
export default Banner;
import React, {useState, useEffect} from 'react';
import './banner.css';
import bgImg from '../images/Attack_on_Titans_preview.jpg'
import MovieComponent from '../components/MovieContent';

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
                        <div className="date active">
                            <h2>On 15th August</h2>
                        </div>
                        <div className="trailer d-flex align-items-center justify-content-center active">
                            <a href="#" className="playBtn">
                            <ion-icon name="play-outline"></ion-icon>
                            </a>
                            <p>watch anime here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
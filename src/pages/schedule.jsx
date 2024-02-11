import React, {useState, useEffect} from "react";
import "./schedule.css";

function Schedule() {
    const [data, setData] = useState ([]);
    const [movie, setMovie] = useState ([]);

    const fetchData = () => {
        fetch("http://localhost:3000/data/movieData.json")
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((e) => console.log(e.message));
      };
    
      useEffect(() => {
        fetchData();
      }, []);
  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Opening this week?</h4>
        </div>
        <div className="row">
          <div className="filters">
            <p>Filter</p>
          </div>
        </div>
        <div className="row mt-5">
            
        </div>
      </div>
    </section>
  );
}

export default Schedule;

import React from 'react'

interface MoviesI{
    // [key: string]:any
    title: string;
    img: string;
    date: string;
    rateing: number;
    availablility: boolean;
}


let mArr: MoviesI[]=[
    {title: "The Good Father", img: "../src/assets/movie1.jpg", date: "1992", rateing: 9.2, availablility: true},
    {title: "Parasite",img: "../src/assets/movie2.jpg",date: "2019",rateing: 8.5,availablility: true},
    {title: "Interstellar",img: "../src/assets/movie3.jpg",date: "2014", rateing: 8.6,availablility: true},
    {title: "Spirited Away",img: "../src/assets/movie4.jpg",date: "2001",rateing: 8.5,availablility: true},
    {title: "Inception",img: "../src/assets/movie5.jpg",date: "2010",rateing: 8.7,availablility: true}
  ]

function Movies() {
  return (
  <>
    {mArr.map(e =>{
      <section className="card">
        <img src = {e.img}/><img/>
        <div className="content">
            <div>
                <span>{e.title}</span>
                <span>{e.date}</span>
                <span>{e.rateing}</span>
                <span>{e.availablility}</span>
            </div>
        </div>
    </section>
    })}
    </>
  )
}

export default Movies
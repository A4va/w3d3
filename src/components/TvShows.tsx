import React from 'react'
interface TVShowsI{
    // [key: string]:any
    title: string;
    img: string;
    date: string;
    rateing: number;
    availablility: boolean;
}

let tArr: TVShowsI[]=[
    {title: "Black Clover", img: "../src/assets/tv-shows1.jpg", date: "2017", rateing: 9.2, availablility: true},
    {title: "Better Call Saul",img: "../src/assets/tv-shows2.jpg",date: "2015",rateing: 8.9,availablility: true},
    {title: "Dark",img: "../src/assets/tv-shows3.jpg",date: "2017", rateing: 8.7,availablility: true},
    {title: "Tokyo Revengers",img: "../src/assets/tv-shows4.jpg", date: "2021",rateing: 7,availablility: true},
    {title: "Severance",img: "../src/assets/tv-shows5.jpg",date: "2022",rateing: 8.6,availablility: false}
  ]

function TVShows() {
  return (
    <>
    {tArr.map(e =>{
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

export default TVShows
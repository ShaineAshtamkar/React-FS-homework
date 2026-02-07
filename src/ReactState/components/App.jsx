import React from 'react';
import { useState } from 'react'
import reactLogo from "../../assets/react.svg";

import viteLogo from '/vite.svg'
import "../../App.css";

import SpotCheck1 from "./SpotCheck1.jsx";
import { Company } from './Company.jsx'
import { Calendar } from './Calendar.jsx';
import { Register } from './Register.jsx';
import { Hot } from './Hot.jsx';
import { Cold } from './Cold.jsx';
import ClassRoom from './ClassRoom.jsx';
import { Hudini } from './Hudini.jsx'
import { Home } from './Home.jsx';
import { Landing } from './Landing.jsx';


const App = () => {
    // const logClick = () => {
    //     console.log("I was clicked!")
    // }

    // return (
    //     <button onClick={logClick}>Click me</button>
    // );
    // const companiesData = [
    //     { name: "Tesla", revenue: 140 },
    //     { name: "Microsoft", revenue: 300 },
    //     { name: "Google", revenue: 600 }
    // ]
    // let [companies, setCompanies] = useState(companiesData)

    // const [reservations, setReservations] = useState([
    //     { day: "Monday", time: 2000, name: "Earl" },
    //     { day: "Monday", time: 1845, name: "Ella" },
    //     { day: "Tuesday", time: 1930, name: "Linda" },
    //     { day: "Wednesday", time: 2015, name: "Anni" }
    // ]);



    // const [importantData, setImportantData] = useState("Shoobert");

    // const updateData = () => {
    //     setImportantData("Treboohs");

    // }

    // return (
    //     <div>
    //         <button onClick={updateData}>Update</button>
    //         {console.log(importantData)}

    //     </div>

    // );




    // return (<div>
    //     {/* < SpotCheck1 />
    //     {companies.map((c, i) => <Company name={c.name} revenue={c.revenue} key={i} />)} */}
    //     <Calendar reservations={reservations} />
    //     <Register reservations={reservations} />
    // </div>

    // )
    // let [isHot, changeTemp] = useState(true)

    //       const toggleTemperature = () => {
    //       setTemperature(temperature === "hot" ? "cold" : "hot");
    //   }

    //const updateTemp = function () {
    //changeTemp(!isHot)
    //}

    // function Counter() {
    //     const [count, setCount] = useState(0)

    //     const updateCounter = () => {
    //         setCount(count + 1)
    //         console.log(count)
    //     }

    //     return (
    //         <div>
    //             <button onClick={updateCounter}>+</button>
    //             <div>{count}</div>
    //             <ClassRoom />
    //         </div>
    //     );
    // }
    // function SpotCheck5() {
    //     let [counter, setCounter] = useState(0)

    //     function updateCounter() {
    //         setCounter(counter + 1)
    //     }
    //     return (<div>
    //         <button onClick={updateCounter}>Click me </button >
    //         <div>{counter}</div>

    //     </div>)
    // }

    let [data, setData] = useState(
        {
            user: "Robyn",
            store: [
                { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
                { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
                { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
            ],
            shouldDiscount: true,
            currentPage: "Landing"
        }
    )

    // const toggle = () => {
    //     setData({ ...data, currentPage: data.currentPage === "Landing" ? "Home" : "Landing" });
    // };

    const toggle = function () {
        let cloneData = { ...data }

        cloneData.currentPage = data.currentPage == "Landing" ? "Home" : "Landing"
        setData(cloneData)
    }



    return (<div>
        <button onClick={toggle}>Toggle</button>
        {data.currentPage == "Landing" ? <Landing page={data} /> : <Home store={data.store}
            isDiscount={data.shouldDiscount} />}
    </div>)

    // return (<div >

    //     <Landing page={data} />
    //     <Home store={data.store} />
    //     {/* Home({store: page.store }) */}


    // </div>


    // )




    // return (<SpotCheck5 />);
    /* 
     return (
         <div>
            <button onClick={updateTemp}>Click me</button>
        <div>{isHot ? <Hot /> : <Cold />}</div>

    </div>



     ) */






}




export default App;

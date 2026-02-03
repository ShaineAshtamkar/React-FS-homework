import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const personContainer = (name, email) => {

//     let greatName = `The Great ${name}`

//     return (
//       <div className='person'>
//         <h4>{greatName}</h4>
//         <p>Contact at: <a href={email}>email</a></p>
//       </div>
//     )
//   }

//   return (
//     personContainer("Louisa", "l@elo.com")
//   );
// // }

// function App() {
//   const getMorningGreeting = () => { return <div>Good morning</div> }
//   const getEveningGreeting = () => { return <div>Good evening</div> }

//   return [getMorningGreeting(), getEveningGreeting(), <p>Good afternoon</p>]
//   // <div>
//   //   <div className="ex-space">
//   //     <h4 className='ex-title'>Spot-check 2</h4 >
//   //     <div className="exercise" id="spotcheck-2">
//   //       {(new Date().getHours() < 12) ? getMorningGreeting() : getEveningGreeting()}
//   //     </div>
//   //   </div>
//   // </div>


// }
// function App() {
//   const showCompany = (name, revenue) => {
//     return <div id="name ">{name} makes {revenue} every year</div>
//   }
//   let companies = [
//     { name: "Tesla", revenue: 140 },
//     { name: "Microsoft", revenue: 300 },
//     { name: "Google", revenue: 600 }
//   ]

//   return (
//     <div className="ex-space">
//       <h4 className='ex-title'>Exercise 1</h4>
//       <div className="exercise" id="ex-1">
//         {companies.map(c => showCompany(c.name, c.revenue))}
//       </div>
//     </div>
//   )
// }

function App() {
  const getClassName = (temperature) => {
    if (temperature < 15) {
      return "freezing";
    }
    if (temperature >= 15 && temperature <= 30) {
      return "fair";
    }
    else {
      return "hell-scape";
    }
  }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {/* your code here */}
        <div id="weatherBox" class={getClassName(45)}></div>
      </div>
    </div >
  )
}

export default App

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

// function App() {
//   const getClassName = (temperature) => {
//     if (temperature < 15) {
//       return "freezing";
//     }
//     if (temperature >= 15 && temperature <= 30) {
//       return "fair";
//     }
//     else {
//       return "hell-scape";
//     }
//   }

//   return (
//     <div className="ex-space">
//       <h4 className='ex-title'>Exercise 2</h4>
//       <div className="exercise" id="ex-2">
//         {/* your code here */}
//         <div id="weatherBox" class={getClassName(45)}></div>
//       </div>
//     </div >
//   )
// }
// export function App() {
//   return <div>Hello, world</div>
// }




// function Nav() {
//   return (
//     <div id="nav"><span>Home</span><span>About</span></div>
//   )
// }
// function LandingPage() {
//   return (
//     <h1>Welcome</h1>
//   )
// }

// export function App() {
//   return (
//     <div className="app">
//       <Nav /> {/* loading a child component */}
//       <h1>{LandingPage()}</h1>
//     </div>
//   )
// }

// export function App() {
//   return (
//     <div className="app">
//       <Nav /> {/* loading a child component */}
//       <LandingPage />
//     </div>
//   )
// }

// function AboutUs() {
//   return <p>This is an example of an about us page~</p>
// }

function Nav() {
  return (
    <div id="nav">
      <span>Home</span>
      <span>About</span>
    </div>
  )
}

function LandingPage() {
  return <h1>Welcome!</h1>
}

// export function App() {
//   let isUserLoggedIn = localStorage.getItem('loggedIn')
//   let componentToDisplay = isUserLoggedIn ?
//     <LandingPage /> :
//     <AboutUs />

//   return (
//     <div className="app">
//       <Nav />
//       {componentToDisplay}
//     </div>
//   )
// }


function About() {
  /* your code here... */
  return <div>
    <h1>This is an example of an about~</h1>
    <SignUp />
    <Blurb />
  </div>
}


function SignUp() {
  /* your code here... */
  return <p>Please sign up here~</p>
}

function Blurb() {
  /* your code here... */
  return <p>Please Blurb here~</p>
}


export function App() {
  return (
    <div className="app">
      <About />
      <Nav /> {/* loading a child component */}
      <LandingPage />
    </div>
  )
}



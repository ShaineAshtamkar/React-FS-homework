import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { Company } from './Company.jsx'

import { Wardrobe } from './Wardrobe.jsx'

import { Wardrobe2 } from './Wardrobe2.jsx'




export default function App() {
    let companies = [
        { name: "Tesla", revenue: 140 },
        { name: "Microsoft", revenue: 300 },
        { name: "Google", revenue: 600 }]


    // function generateCompanyTags(companies) {
    //     let companyArr = [];
    //     for (let i = 0; i < companies.length; i++) {
    //         companyArr.push(<Company name={companies[i].name} revenue={companies[i].revenue} />);
    //     }
    //     return companyArr;

    // }

    return (
        <div className="app">
            {/* <Company name={companies[0].name} revenue={companies[0].revenue} /> */}
            {companies.map(c => <Company name={c.name.toUpperCase()} revenue={c.revenue} key={c.name} />)}
            <Wardrobe />
            <Wardrobe2 />

        </div>
    )
}


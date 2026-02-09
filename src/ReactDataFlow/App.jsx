import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'

import Quotes from './Quotes'
import SpotCheck1 from './SpotCheck1'
import Exercise1 from "./Exercise1";
import Conversation from "./Conversation";
import Exercise2 from "./Exercise2";

export default function App() {


    return (
        <div>
            <Quotes />
            <SpotCheck1 />
            <Exercise1 />
            <Exercise2 />

        </div>
    )
}



import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { InputTest } from './InputState'
import Exercise1 from './Exercise1'
import Exercise2 from './Exercise2'
import Quotes from '../ReactDataFlow/Quotes'
import SpotCheck1 from '../ReactDataFlow/SpotCheck1'

export default function App() {


    return (
        <div>
            <InputTest />
            <Exercise1 />
            <Exercise2 />
            <Quotes />
            <SpotCheck1 />
        </div>
    )
}



import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './main/calculator'
import './index.css'

const el = document.getElementById('root')

ReactDOM.render (
    <div>
        <h1>Calculadora</h1>
        <Calculator />
    </div>,el
)
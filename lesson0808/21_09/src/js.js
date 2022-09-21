import sum from '../src/calculator'
import bad from '../src/calculator-bad'
import $ from 'jquery'
import  './index.scss'
const app=document.querySelector('.app')
const result=sum(2,2)
const resultBad=bad.bad(2,2)
app.innerHTML=`2+2=${result} 2-2=${resultBad}`


console.log($)
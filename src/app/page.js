"use client"
import { string } from "yup"
import FormInput from "./form"
import { useState, useEffect } from "react"
import Image from "next/image"
import arrow from "/Users/astro/OneDrive/Desktop/CodingProjects/age-calculator/public/arrow.svg"
export default function Home() {
  const TODAY = new Date();
  const [d, setD] = useState("--") 
  const [m, setM] = useState("--")
  const [y, setY] = useState("--")
  const calculateAge = (year, month, day) => {
    let birthDate, birthMonth, birthYear
    let currentYear = TODAY.getFullYear()
    let currentDate = TODAY.getDate()
    let currentMonth = TODAY.getMonth() + 1
    let months = [31,28,31,30,31,30,31,31,30,31,30,31]
    birthYear = currentYear - year
    if(currentMonth >= month) {
      birthMonth = currentMonth - month
    }
    else {
      birthYear--
      birthMonth = 12 + currentMonth - month
    }

    if(currentDate >= day) {
      birthDate = currentDate - day
    }else {
      birthMonth--
      let days = months[currentMonth - 2]
      birthDate = days + currentDate - day
      if(birthMonth < 0) {
        birthMonth = 11
        birthYear--
      }
    }

    setD(birthDate)
    setM(birthMonth)
    setY(birthYear)
  };
  
  const [valuesOne, setValuesOne] = useState("")
  const [valuesTwo, setValuesTwo] = useState("")
  const [valuesThree, setValuesThree] = useState("")
  const daysInMonth = new Date(valuesOne, valuesThree, 0);
  console.log(daysInMonth.getDate())
  const [errorOne, setErrorOne] = useState("")
  const [errorTwo, setErrorTwo] = useState("")
  const [errorThree, setErrorThree] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if(valuesTwo == ""){
      setErrorOne("This field is required")
    }
    if(valuesOne == ""){
      setErrorTwo("This field is required")
    }
    if(valuesThree == ""){
      setErrorThree("This field is required")
    }
    
    if( errorOne == "" && errorTwo == "" && errorThree == ""){
      calculateAge(valuesThree, valuesOne, valuesTwo)
    }
    else{

    }
  }
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const handleInputOne = (e) => { 
    setValuesOne(e.target.value)
  }
  const handleInputTwo = (e) => {
    setValuesTwo(e.target.value)
    // if (valuesTwo > 31){
    //   alert('error1')
    // }
    // else if(valuesTwo < 1){
    //   alert("error-1")
    // }
    // else if (valuesOne == 4 ||valuesOne == 6 ||valuesOne == 9 ||valuesOne == 11){
    //   valuesTwo <= 30
    //   if(valuesTwo > 30){
    //     alert("error5")
    //   }
    // } 
  }
  useEffect(() => {
    if (valuesTwo > 31){
      setErrorOne("Must be a valid day")
    }
    else if(valuesTwo <= 0){
      setErrorOne("Must be a valid day")
    }
    else if(Number.isInteger(Number(valuesTwo)) == false){
      setErrorOne("Must be a valid day")
    }
    else if (valuesOne == 4 ||valuesOne == 6 ||valuesOne == 9 ||valuesOne == 11){
      valuesTwo <= 30
      if(valuesTwo > 30){
        setErrorOne("Must be a valid day")
      }
      else{
        setErrorOne('')
      }
    }
    else if (valuesThree == 1992 ||valuesThree == 1996 ||valuesThree == 2000 ||valuesThree == 2004 ||valuesThree == 2008 ||valuesThree == 2012 ||valuesThree == 2016 ||valuesThree == 2020){
      if(valuesOne == 2){
        valuesTwo <= 29
        if(valuesTwo>29){
          setErrorOne('Must be a valid day')
        }
        else{
          setErrorOne("")
        }
      }
      else{
        setErrorOne("")
      }
    }
    else if (valuesThree != 1992 ||valuesThree != 1996 ||valuesThree != 2000 ||valuesThree != 2004 ||valuesThree != 2008 ||valuesThree != 2012 ||valuesThree != 2016 ||valuesThree != 2020){
      if(valuesOne == 2){
        valuesTwo <= 28
        if(valuesTwo>28){
          setErrorOne('Must be a valid day')
        }
        else{
          setErrorOne("")
        }
      }
      else{
        setErrorOne("")
      }
    }

    if (Number(valuesTwo.length) === 1 && valuesTwo != 0 && valuesTwo > 0){
      setErrorOne("Must be formatted(DD)")
    }
    if (Number(valuesOne.length) === 1 && valuesTwo == 0 || valuesTwo < 0){
      setErrorOne("Must be a valid day")
    }
    
    
    if(valuesOne > 12){
      setErrorTwo("Must be a valid month")
    }
    else if(valuesOne <= 0){
      setErrorTwo("Must be a valid month")
    }
    else if(Number.isInteger(Number(valuesOne)) == false){
      setErrorTwo("Must be a valid month")
    }
    else{
      setErrorTwo("")
    }
    if (Number(valuesOne.length) === 1 && valuesOne != 0){
      setErrorTwo("Must be formatted(MM)")
    }
    else if(Number(valuesOne.length) === 1 && valuesOne == 0){
      setErrorTwo("Must be a valid month")
    }

    if(valuesThree >= 2023){
      setErrorThree("Must be in the past")
    }
    else if(valuesThree<1900){
      setErrorThree("Must be a valid year")
    }
    else if(Number.isInteger(Number(valuesThree)) == false){
      setErrorThree("Must be a valid year")
    }
    else{
      setErrorThree("")
    }

  }, [valuesOne, valuesTwo, valuesThree]);
  // else{
  //   setError(false)
  // }
  console.log(Number.isInteger(Number(valuesThree)))
  console.log(valuesTwo.length)
  const handleInputThree = (e) => {
    setValuesThree(e.target.value)
  }
  // DAY CHECK
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
          <div className="containerC">
          <label className={errorOne == "" ? "label" : "errL"}>
            Day
          </label>
          <input id="1" name="Day" placeholder="DD" type="text" className={errorOne == "" ? "input" : "errI"}  onChange={handleInputTwo}/>
          <span className={errorOne == "" ? "span" : "errS"}>{errorOne}</span>
        </div>
        <div className="containerC">
          <label className={errorTwo == "" ? "label" : "errL"}>
            Month
          </label>
          <input id="2" name="Month" placeholder="MM" type="text" className={errorTwo == "" ? "input" : "errI"} onChange={handleInputOne}/>
          <span className={errorTwo == "" ? "span" : "errS"}>{errorTwo}</span>
        </div>
        <div className="containerC">
          <label className={errorThree == "" ? "label" : "errL"}>
            Year
          </label>
          <input id="2" name="Year" placeholder="YYYY" type="text" className={errorThree == "" ? "input" : "errI"}  onChange={handleInputThree}/>
          <span className={errorThree == "" ? "span" : "errS"}>{errorThree}</span>
        </div>
        <div className="btn">
          <div className="line">

          </div>
          <button>
            <Image alt="" src={arrow}/>
          </button>
        </div>
      </form>
      <div className="calc">
        <div className="Years">
          <p className="big">
            <span className="smol">{d}</span> days
          </p>
        </div>
        <div className="Days">
          <p className="big">
          <span className="smol">{m}</span> months
          </p>
        </div>
        <div className="Months">
          <p className="big">
          <span className="smol">{y}</span> years
          </p>
        </div>
      </div>
    </div>
  )
}

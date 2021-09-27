import React, {ReactElement, useEffect, useRef, useState} from "react";
import Arcticle from "../Arcticle/Article";
import {IPost} from "../../interfaces/interfaces";

interface IDataWraper {
    data : IPost[],
}

const dataOnPage : number = 5

const showData = (currentPage : number, data : IPost[]) : ReactElement[] => {
    const startData : number = currentPage  * dataOnPage
    const endData : number = startData + dataOnPage
    const dataShower :ReactElement [] = [];

    for (let i = startData ;i < endData && i < data.length ;i++){
        dataShower.push(<Arcticle  title = {data[i].title}  body = {data[i].body}  key ={data[i].id}/>)
    }
    return dataShower;
}


const DataWrapper : React.FC<IDataWraper>  = ({ data})=>{
    const [currentPage, setCurrentPage] = useState<number> (0)
    const [allPages,setAllPages] = useState<number>(0)
    const [currentArticle, setCurrentArticle] = useState<ReactElement[]>(showData(currentPage,data))

    const refDecreaseBtn = useRef<HTMLButtonElement>(null)
    const refIncreaseBtn = useRef<HTMLButtonElement>(null)

    useEffect(()=>{
       if(refIncreaseBtn.current && refDecreaseBtn.current){
           if (currentPage === 0) {
              refDecreaseBtn.current.disabled = true
           }
           else{
              refDecreaseBtn.current.disabled = false
           }
           if(currentPage === allPages - 1){
              refIncreaseBtn.current.disabled = true
           }
           else{
              refIncreaseBtn.current.disabled = false
           }
        }
        setAllPages(Math.ceil(data.length / dataOnPage))
        setCurrentArticle(showData(currentPage,data))
    },[currentPage,data])

    const increasePage = (): void =>{
       if(currentPage < allPages - 1) {
         setCurrentPage(currentPage + 1)
       }
    }

    const decreasePage = (): void =>{
       if(currentPage > 0) {
         setCurrentPage(currentPage - 1)
       }
    }

    return(
        <div>
             {currentArticle}
             <button onClick={decreasePage} ref={refDecreaseBtn}> prev </button>
             <span> current page {currentPage + 1} from {allPages} </span>
             <button onClick={increasePage} ref={refIncreaseBtn}> next </button>
        </div>
    )
}
export  default DataWrapper
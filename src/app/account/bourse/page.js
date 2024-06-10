"use client";

import TitlePage from "@/components/UI/TitlePage";
import { useEffect, useState } from "react";
import BourseTable from "@/components/UI/Table";
import useFetch from "@/hooks/useFetch";

import ChartComponent from '@/components/bourse/ChartComponent.js';
import BarChart from '@/components/bourse/BarChart.js';
import { AAPL } from "./AAPL.js";
import { MSFT } from "./MSFT.js";
import { bourse } from "../../../services/api/bourse.api.js"


import "./page.modules.css";

const BourseGraphique = () => {
    // const { fetchData, data, error, loading, typeofError } = useFetch({});

    const [bourseData, setBourseData] = useState([]);

//     const test = async ()=>{
//         const table=["AAPL","MSFT"]
//         const res = await bourse("AAPL");
//         const data = res.data;
//         setBourseData(data)
//         console.log(bourseData)
//     }

    
//     useEffect(() => {
//         // test();
// }, []);

    if(
        AAPL.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        })
        &&
        MSFT.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        })
      ){
        // // console.log("data: "+new Date(Data[0].date)+" MSFT: "+new Date(MSFT[0].date))
        if(AAPL[0].date === MSFT[0].date){
            const [chartData, setChartData] = useState({
          
                labels: AAPL.map((data) => {
                  return data.date.split("T")[0];
                }),
                datasets: [
                  {
                    label: AAPL[0].symbol,
                    data: AAPL.map((data) => data.open),
                    backgroundColor: [
                      "rgba(75,192,192,1)",
                      "&quot;#ecf0f1",
                      "bleue",
                    ],
                    borderColor: "black",
                    // borderWidth: 2
                  },
                  {
                    label:  MSFT[0].symbol,
                    data:  MSFT.map((data) => data.open),
                    backgroundColor: [
                      "rgba(75,192,192,1)",
                      "&quot;#ecf0f1",
                      "red",
                    ],
                    borderColor: "black",
                    // borderWidth: 2
                  }
                ]
              });
            
              return (
                <div className="App">
                  <div className="mainTitle">
                  <p></p>
                  {/* <PieChart chartData={chartData} />
                  <BarChart chartData={chartData} /> */}
                  {/* <div className="min-h-screen">
                    <div className="mb-8">
                        <BourseTable
                            data={chartData}
                            type="bourse"
                        />
                    </div>
                </div> */}
                <div>
                    <ChartComponent chartData={chartData}/>
                </div>
                <div>
                    <BarChart chartData={chartData} />
                </div>
                  
                </div>
                  
                </div>
              );
          
            }
          }



    // return (
    //     <div className="container mx-auto bg-gray-100">
    //         <TitlePage title="Bourse" />
    //         {loading && <p>Loading...</p>}
    //         {error && <p>Error: {error.message}</p>}
    //         {!data && (
    //             <div>
    //                 <p>Type of Error: {typeofError}</p>
    //             </div>
    //         )}
    //         <div className="min-h-screen">
    //             <div className="mb-8">
    //                 <BourseTable
    //                     data={bourseData}
    //                     type="bourse"
    //                 />
    //             </div>
    //         </div>
    //     </div>
    // );
    
};

export default BourseGraphique;

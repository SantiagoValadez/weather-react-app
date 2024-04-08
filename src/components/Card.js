import React from "react";
import Spinner from "./Spinner";

const Card = ({loadingData, showData, weather, forecast}) =>{

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;

    if (loadingData){
        return <Spinner />
    }
    return (
        <div className="mt-5">

            {
                showData === true? (

                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0"> 
                                <div className="col-md-4">
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>

                                    <img src="https://images.unsplash.com/photo-1512864733469-8c0d7cc3ccf5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid rounded-start" alt="..."/>

                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start mt-2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        


                ):(
                    <h2 className='text-light'>Sin datos </h2>
                )


            }

        </div>

    );
}

export default Card;
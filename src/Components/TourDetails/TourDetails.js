import React from 'react';
import { useState } from "react"
import { useParams } from 'react-router-dom';
let data = require('../../data/data.json') ;
const TourDetails = () => {
    const id  = useParams.id;
    console.log(id);
    const [seeMore, setSeeMore] = useState(false);
    function another() {
        setSeeMore(!seeMore)
    }
    return (
        
            <section className="full">
                <div className="container">
                    {
                        data.map((element) => {
                            const text = element.info;
                            // eslint-disable-next-line eqeqeq
                            if (element.id == id) {
                                return (<>
                                <div>
                                        <h2>{element.name}</h2>
                                        <img src={element.image} alt={element.name} />
                                        <h3>{element.price}</h3>

                                        <h3>{seeMore ? 
                                        text : `${text.substring(0, 300)}`}

                                            <button className="btn" onClick={another}>{seeMore ? "See Less" : "See More"}</button>
                                        </h3>
                                        
                                    </div>

                                    <div>

                                    </div>
                                </>
                                    
                                )
                            }
                        })
                    }
              </div>

            </section>
        
    )
}
export default TourDetails;
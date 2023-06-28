import React from "react";
import { classes } from "../class/listOfClass";
import './booking.css'
export default function Booking() {
    return (
        <div>
            <div className="row">
                <div>
                    <img className="col s3 poster" src="/image/poster1.png" />
                    <img className="col s3 poster" src="/image/poster2.png" />
                    <img className="col s3 poster" src="/image/poster3.png" />
                    <img className="col s3 poster" src="/image/poster4.png" />
                </div>

                <h3>Classes</h3>
                <div className="col s2"></div>
                <div className="col s8">{classes.map((Data) => (
                    <div className="card col s4" key={Data.idClass}>
                        <div className="card-image">
                            <img className="poster-class" src={Data.img} alt={Data.name} /><br />
                            <h5 className="card-title bkg">{Data.name}</h5>
                        </div>

                        <p>Duration: 30m</p>
                        <p>Instructor: {Data.instructor}</p>
                        <p>Price:<b>${Data.price}</b></p>


                        <div className="card-action">
                            <button className="btn-small button">Book Now</button>
                        </div>

                    </div>
                ))}</div>
                <div className="col s2"></div>

            </div>
            <div className="row">
                <div className="col s1"></div>
                <div className="col s4"><img src="logo192.png"/></div>
                <div className="col s6">
                    <p>
                        We believe that yoga is for everyone and every body, which is why, from beginner to advanced, all levels of practice are welcome in our studios.
                    </p>
                </div>

            </div>
            <div className="col s1"></div>
        </div>

    )
}
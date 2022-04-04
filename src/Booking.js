import React from "react";
import Optionsmenu from "./OptionMenu";

const Booking = (props) => {
    const options = [
        {
        text: "Delivery",
        handler: props.actionProvider.deliveryhandler,
        id: 1,
        },
        {
        text: "Pickup",
        handler: props.actionProvider.pickuphandler,
        id: 2,
        },
        {
        text: "Emergency",
        handler: props.actionProvider.emergencyhandler,
        id: 3,
        },
    ]


    return <Optionsmenu options={options} title="Options" {...props} />
}


export default Booking
import React from "react";
import Optionsmenu from "./OptionMenu";

const Options = (props) => {
    const options = [
        {
        text: "Sign up",
        handler: props.actionProvider.signuphandler,
        id: 1,
        },
        {
        text: "Booking",
        handler: props.actionProvider.bookinghandler,
        id: 2,
        },
        {
        text: "Order status",
        handler: props.actionProvider.orderhandler,
        id: 3,
        },
        {
        text: "FAQ",
        handler: props.actionProvider.faqhandler,
        id: 4,
        },
    ]


    return <Optionsmenu options={options} title="Options" {...props} />
}


export default Options
import React from "react";
import UserClass from "./User"

export class About extends React.Component{
    constructor(props) {
        super(props)

    }
    componentDidMount() {

    }
    render() {

        return ( 
            <>
            <h1>Hello From Class Component</h1>
            <UserClass/>
            </>
        )
    }
}
import React from "react";
import { json } from "react-router-dom";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component{
    constructor(props) {
        super(props)
      
    
        this.state = {
            userInfo: {
                login:"dummy",
                id:"dummyId"
            }
        }
    }
     
    async componentDidMount() {
     const response = await fetch("https://api.github.com/users/SamarSiddiqui")
     const data  = await response.json() 
    
     this.setState({
        userInfo:data
     })
    }

  

   
    render() { 
        
        let {login,bio,id,location} = this.state.userInfo
        return (
            <>   
         
            <h2>Id: {id}</h2>
            <h2>Name: <UserContext.Consumer>
                {(data)=>data.loginDetails}
                </UserContext.Consumer></h2>
            <h2>Location: {location}</h2>
            <h2>User Bio: {bio}</h2>
            <h3>Location:Lucknow</h3>
            <h4>Contact:samar@gmail.com</h4>
            </>
        )
    }
}


export default UserClass;
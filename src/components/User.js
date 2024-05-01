import React from "react";
class UserClass extends React.Component{
    constructor(props) {
        super(props)

        // const state = useState(0)
        this.state= {
            count:0
        }
    }
    
    render() {
        const {name}= this.props
        const {count} = this.state
        return (
            <>   
            <h2>Count:{count}</h2>  
            <button 
            onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}
            >ClickMe</button>       
            <h2>name:{name}</h2>
            <h3>Location:Lucknow</h3>
            <h4>Contact:samar@gmail.com</h4>
            </>
        )
    }
}


export default UserClass;
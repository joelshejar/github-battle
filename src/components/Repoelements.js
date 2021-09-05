import React from 'react'

class Repoelements extends React.Component{
    render(){
        console.log(this.props.data)
        if(!this.props.data){
            return(<h2>Loading...</h2>)
        }
        return(
            this.props.data.data.items.map((elm)=>{
                return(
                    <div>{elm.name}</div>
                )
            })
        )
    }
}

export default Repoelements





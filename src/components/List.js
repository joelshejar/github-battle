import React from 'react'

class List extends React.Component{
    
    render(){
        const list=['All','Javascript','Ruby','Java','CSS','Python']
        return(
            list.map((elm)=>{
                return(
                    <ul className='repo-name'>
                        <li key={elm} onClick={()=>{this.props.handlePopular(elm); this.props.componentWillUnmount();this.props.componentDidMount()}}>{elm}</li>
                    </ul>
                )
            })
        )
    }
}

export default List

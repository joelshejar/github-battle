import React from 'react'
import axios from 'axios'
import List from './List'
import Repoelements from './Repoelements'



class Popular extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:null,
            language:'All',            
        }
        this.url='https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories'
    }
    
    handlePopular=(elm)=>{
        this.url=this.url.replace(this.state.language,elm)
        this.setState({
            language:elm
        })
        
    }
    componentDidMount=()=>{
        axios.get(this.url)
            .then((data)=>{
                this.setState({
                    data
                })
            })
            
    }
    componentWillUnmount=()=>{
        this.setState({
            data:null
        })
        console.log('Unmount')
    }
    
    render(){
        return(
            <>
        <section>
            <div>
                <List handlePopular={this.handlePopular} componentWillUnmount={this.componentWillUnmount} componentDidMount={this.componentDidMount}/>
            </div>
        </section>
        <section className='name'>
            <Repoelements data={this.state.data}/>
        </section>
        </>
        )
    }
        
        
    
}

export default Popular

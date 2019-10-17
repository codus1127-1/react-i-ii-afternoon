import React, {Component} from 'react'

export default class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state= {}
    }

    render(){
        return(
            <div>
                <button className='button1' onClick={() => this.props.previous()}>Previous</button>
                <button className='button2' onClick={() => this.props.next()}>Next</button>
            </div>
        )
    }

}
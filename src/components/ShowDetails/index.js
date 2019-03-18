import React, { Component } from 'react'
import { ShowDetailsComponent } from './ShowDetails.style';
import Parser from 'html-react-parser';


class ShowDetails extends Component {
    
    render() {
        return (
            <ShowDetailsComponent className="col-md-6 col-sm-12">
                <h1>{ this.props.value.name }</h1>
                <h2>{ (this.props.value.genres || []).join(', ') }</h2>
                { this.props.value.summary ? <h4>{ Parser(this.props.value.summary) }</h4> : ''}
                <h6>{ this.props.value.premiered }</h6>
            </ShowDetailsComponent>
        )
    };
};


export default ShowDetails;
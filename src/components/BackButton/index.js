import React, { Component } from 'react';
import { BackButtonComponent } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class BackButton extends Component {
    
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack();
    }

    render() {
        return (
            <BackButtonComponent>
                <button className="btn btn-primary btn-block" onClick={this.goBack}><FontAwesomeIcon icon={faArrowLeft} /></button>
            </BackButtonComponent>
        );
    };
};


export default BackButton;
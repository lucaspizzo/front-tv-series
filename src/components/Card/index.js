import React, { Component } from 'react'
import { CardComponent } from './style';
import { Link, } from 'react-router-dom';


class Card extends Component {
    
    render() {
        return (
            <CardComponent className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card justify-content-center text-center mx-auto" >
                    <img className="card-img-top" 
                        src={ (this.props.value.image || {}).medium } alt=""/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{ this.props.value.name }: { (this.props.value.genres || []).join(', ') }</h5>
                        <Link to={{
                            pathname: '/detail',
                            state: {
                                currentShow: this.props.value
                            }
                        }} className="btn btn-primary btn-block"> Detalhes </Link>
                    </div>
                </div>
            </CardComponent>
        )
    };
};


export default Card;
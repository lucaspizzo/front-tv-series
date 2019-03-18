import React, { Component, Fragment } from 'react';
import { DetailStyle } from './Detail.style';
import BannerImage from '../../components/BannerImage'
import ShowDetails from '../../components/ShowDetails'
import BackButton from '../../components/BackButton'

class Detail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {...this.props.location.state}
    }

    componentDidMount() {}

    render() {
        
        return (
        
            <Fragment>
                <DetailStyle>
                <div className="container-fluid mt-3">
                    <div className="row">
                    <BackButton history={this.props.history}/>
                    </div>
                    <div className="row">
                        <BannerImage value={ (this.state.currentShow.image || {}).original } ></BannerImage>
                        <ShowDetails value={this.state.currentShow}></ShowDetails>
                    </div>
                </div>
                </DetailStyle>
            </Fragment>
        );
  }
}

export default Detail;

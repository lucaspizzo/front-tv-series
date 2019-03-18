import React, { Component, Fragment } from 'react';
import { HomeStyle } from './Home.style';
import Show from '../../components/Show';
import { fetchShows } from '../../actions/Show'

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            shows: [],
            currentShow: {}
        };
    }

    state = {
        shows: [],
        currentShow: {}
    }

    componentDidMount() {
        if (sessionStorage.getItem('HomeState')) {
            let state = JSON.parse(sessionStorage.getItem('HomeState'))
      this.setState({ ...state })
        } else {
            fetchShows().then((res) => {
                this.setState({shows: res.data.map(item => item.show )});
                sessionStorage.setItem('HomeState', JSON.stringify(this.state));
            });
        }
        
    }

    render() {
        
        return (
        
            <Fragment>
                <HomeStyle>
                <div className="container mt-3">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                        { this.state.shows ? this.state.shows.map( item => <Show key={item.id} value={ item } /> ) : []}
                        { this.state.shows.length === 0 ? <h1 className="white text-white">Nenhum resultado</h1> : '' }
                        </div>
                    </div>
                    </div>
                </div>
                </HomeStyle>
            </Fragment>
        );
  }
}

export default Home;

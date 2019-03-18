import React, { Component, Fragment } from 'react';
import { HomeStyle } from './Home.style';
import Show from '../../components/Card';
import { fetchShows } from '../../actions/Show';
import Loading from '../../components/Loading';


class Home extends Component {
    
    constructor(props) {
        super(props);
    }

    state = {
        shows: [],
        currentShow: {},
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true });
        if (sessionStorage.getItem('HomeState')) {
            let state = JSON.parse(sessionStorage.getItem('HomeState'));
            this.setState({ ...state });
            this.setState({ loading: false });
        } else {
            fetchShows().then((res) => {
                this.setState({shows: res.data.map(item => item.show )});
                sessionStorage.setItem('HomeState', JSON.stringify(this.state));
                this.setState({ loading: false });
            });
        }
        
    }

    render() {

        const { loading } = this.state

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
                <Loading loading={loading} message='Carregando series...' />
            </Fragment>
        );
  }
}

export default Home;

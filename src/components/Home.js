import React from 'react';
import PropTypes from 'prop-types';

import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {increment} from "../reducers/counter";

// class Home extends React.Component {
//     constructor(props){
//         super();
//         this.state = {
//           name: 'Aldi'
//         };
//     }
//
//     render(){
//         return (<h1>Hello {this.state.name}</h1>);
//     }
// }

const Home = (props) => {
    return (
        <div>
            <h1>Home</h1>
            <p>{props.countValue}</p>
            <button onClick={() => props.increment}>Click</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    increment,
    changePage: () => push('/about')
}, dispatch);

const mapStateToProps = (state) => ({
    countValue: state.counter.countValue
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

// Home.propTypes = {
//     name: PropTypes.number
// }

//export default Home;
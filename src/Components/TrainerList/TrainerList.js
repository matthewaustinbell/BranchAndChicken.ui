import React from 'react';
import getAllTrainers from '../../Requests/trainerRequests';

class TrainerList extends React.Component {

    state = {
        trainers : []
    };

    componentDidMount() {
        getAllTrainers().then(data =>{
            this.setState({trainers:data});
        })
    }

    buildTrainers = () => this.state.trainers.map(t => (
        <div>{t.name}</div>
    ));

    render() {
        return (
            <div>
                {this.buildTrainers()}
            </div>
        )
    }
}

export default TrainerList;
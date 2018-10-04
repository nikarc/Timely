import React from 'react';
import { connect } from 'react-redux';
import TaskList from '../../Components/TaskList';

const mapStateToProps = state => {
  return { clients: state.clients };
};

class ConnectedCurrentClientView extends React.Component {
  state = {
    client: {}
  }
  componentDidMount () {
    // get current client
    const id = this.props.match.params.clientId;
    const client = this.props.clients.find(c => c.id === parseInt(id, 10));
    console.log('client: ', client);

    this.setState({ client });
  }
  render () {
    const { client } = this.state;
    return (
      <div uk-grid="true">
        <div className="uk-width-2-3">
          <div className="uk-card uk-card-body">
            <h3>{client.name}</h3>
            <small>${client.rate}</small>
            <TaskList clientId={client.id} />
          </div>
        </div>
      </div>
    );
  }
}

const CurrentClientView = connect(mapStateToProps)(ConnectedCurrentClientView);

export default CurrentClientView;
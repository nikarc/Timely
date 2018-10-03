import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from '../../Components/Modal';
import { addClient } from '../../actions';

import './Clients.scss';

const mapStateToProps = state => {
  return { clients: state.clients };
}

const mapDispatchToProps = dispatch => {
  return {
    addClient: client => dispatch(addClient(client))
  }
}

const modalId = 'new-client-modal'

class ConnectedClientView extends React.Component {
  state = {
    form: {
      clientName: null,
      clientRate: null,
      buttonDisabled: true,
    }
  }

  validateForm = ({ target }) => {
    const { value, name } = target;
    let { form } = this.state;
    let {  buttonDisabled } = this.state;

    if (!value || !value.length) return;

    form[name] = value;
    this.setState({ form });

    if (this.state.form.clientName && this.state.form.clientRate) {
      buttonDisabled = false;
    } else {
      buttonDisabled = true;
    }

    this.setState({
      form: {
        ...this.state.form,
        buttonDisabled
      }
    });
  }

  saveNewClient = () => {
    console.log('Save new client: ', this.state.form);
    const { form } = this.state;
    const { clients, addClient} = this.props;
    const id = clients[clients.length - 1].id + 1;

    const newClient = {
      id,
      name: form.clientName,
      rate: form.clientRate
    };

    addClient(newClient);
    this.setState({
      form: {
        clientName: null,
        clientRate: null,
        buttonDisabled: true
      }
    });

    this.refs.clientName.value = '';
    this.refs.clientRate.value = '';

    this.refs.newClientModal.close();
  }

  render () {
    const { clients } = this.props;
    return (
      <div uk-grid="true" id="client-view">
        <div className="uk-width-2-3">
          <button className="uk-button uk-button-primary" type="button" uk-toggle={`target: #${modalId}`}>
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            Add Client
          </button>
        </div>
        <div className="uk-width-2-3 client-list">
          <ul>
            {clients.map(c => (
              <li className="uk-card uk-card-body uk-card-default" key={c.id}>{c.name} - <small>${c.rate}/hr</small></li>
            ))}
          </ul>
        </div>
        <Modal id={modalId} title="Add New Client" buttonDisabled={this.state.form.buttonDisabled} saveCallback={this.saveNewClient} ref="newClientModal">
          <form>
            <fieldset className="uk-fieldset">
              <div className="uk-margin">
                <input type="text" className="uk-input" name="clientName" ref="clientName" onInput={this.validateForm} placeholder="Client Name"/>
              </div>
              <div className="uk-margin">
                <input type="number" className="uk-input" name="clientRate" ref="clientRate" onInput={this.validateForm} placeholder="Client Rate: $31" />
              </div>
            </fieldset>
          </form>
        </Modal>
      </div>
    );
  }
}

const ClientView = connect(mapStateToProps, mapDispatchToProps)(ConnectedClientView);

export default ClientView;
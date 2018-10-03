import React from 'react';

class Modal extends React.Component {
  close () {
    this.refs.closeModalButton.click();
  }

  render () {
    const {children, id, title, saveCallback, buttonDisabled} = this.props;
    return (
      <div id={id} className="app-modal" uk-modal="true">
        <div className="uk-modal-dialog uk-modal-body">
          {title ? <h2 className="uk-modal-title">{title}</h2> : ''}
          {children}
          <p className="uk-text-right">
            <button className="uk-button uk-button-default uk-modal-close" type="button" ref="closeModalButton">Cancel</button>&nbsp;
            {saveCallback ? <button className="uk-button uk-button-primary" type="button" onClick={saveCallback} disabled={buttonDisabled}>Save</button> : ''}
          </p>
        </div>
      </div>
    );
  }
}

export default Modal;
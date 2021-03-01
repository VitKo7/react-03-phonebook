import React, { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state); // todo: need more practice here

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  // ---------------------------------MARKUP---------------------------------
  render() {
    const { name, number } = this.state;
    return (
      <div className="addContact">
        <form onSubmit={this.handleSubmit}>
          <label className="form-label fw-bold">Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Name Surname"
            className="form-control"
            onChange={this.handleInput}
            value={name}
          />
          <label className="form-label fw-bold">Number:</label>
          <input
            name="number"
            type="tel"
            placeholder="123-456"
            pattern="[0-9]{3}-[0-9]{3}"
            className="form-control"
            onChange={this.handleInput}
            value={number}
          />
          <span className="form-text">
            <i>Use this format only:</i> xxx-xxx{' '}
          </span>

          <div className="d-md-flex justify-content-md-end">
            <button
              type="submit"
              className="btn btn-secondary btn-sm border-secondary fw-bold"
            >
              Add contact
            </button>
          </div>
        </form>
      </div>
    );
  }
}

import React from 'react';

class UsersForm extends React.Component {
  state = {
    name: '',
    email: '',
    gen: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, gen } = this.state;
    const newUser = { name, email, gen };
    this.props.onAddUser(newUser);
    this.setState({ name: '', email: '', gen: '' });
  };

  render() {
    const { name, email, gen } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label>Gen:</label>
          <input
            type="number"
            name="gen"
            value={gen}
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    );
  }
}

export default UsersForm;

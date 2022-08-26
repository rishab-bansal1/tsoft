import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    number: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Name and email field are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", number: "" });
  };
  render() {
    return (
      <div className="ui main">
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label style={{ marginTop: "50px" }}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              value={this.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}
            />
          </div>
          <div className="field">
            Select Gender: <b />
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                className="hidden"
                name="radioGroup"
                readOnly=""
                tabIndex={0}
                defaultValue="this"
              />
              <label>Male</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                className="hidden"
                name="radioGroup"
                readOnly=""
                tabIndex={0}
                defaultValue="that"
              />
              <label>Female</label>
            </div>
          </div>

          <div className="field">
            Select Hobbies: <b />
          </div>

          <div className="ui checkbox">
            <input
              type="checkbox"
              className="hidden"
              readOnly=""
              tabIndex={0}
            />
            <label>Cricket</label>
          </div>

          <div className="ui checkbox">
            <input
              type="checkbox"
              className="hidden"
              readOnly=""
              tabIndex={0}
            />
            <label>Football</label>
          </div>

          <div className="ui checkbox">
            <input
              type="checkbox"
              className="hidden"
              readOnly=""
              tabIndex={0}
            />
            <label>Volleyball</label>
          </div>
          <br></br>
          <br></br>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;

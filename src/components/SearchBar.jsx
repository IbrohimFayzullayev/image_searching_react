import React from "react";

class SearchBar extends React.Component {
  state = { keyWord: "" };

  // constructor(props) {
  //   super(props);
  //   this.getInputVal = this.getInputVal.bind(this);
  // }

  // bu this ni deb shu klassni ichidagi malumotlarni taniitb olish uchun 2-usuldir

  getInputVal = (event) => {
    // console.log(event.target.value);
    this.setState({ keyWord: event.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.keyWord);
    this.props.malumotOl(this.state.keyWord);
  };
  render() {
    return (
      <div className="ui container">
        <form
          onSubmit={this.onFormSubmit}
          className="ui category search"
          style={{ marginTop: "30px" }}
        >
          <div className="ui icon input" style={{ width: "100%" }}>
            <input
              onChange={this.getInputVal}
              className="prompt"
              type="text"
              placeholder="Search animals..."
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

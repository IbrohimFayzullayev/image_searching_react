import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar.jsx";
import ImageList from "./ImageList.jsx";

class App extends React.Component {
  state = { key: "" };

  searchGetVal = (data) => {
    console.log(data);
    this.setState({ key: data });
  };

  getData = async () => {
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: this.state.key,
      },
      headers: {
        Authorization: "Client-ID qBBsi-sJ8iXDTxhSirJ0WIvzoPRrR1N_bGenHWOuFVE",
      },
    });
    console.log(data.data.results);
  };

  componentDidUpdate() {
    this.getData();
  }
  render() {
    return (
      <div>
        <SearchBar malumotOl={this.searchGetVal} />
      </div>
    );
  }
}

export default App;

// secter key : BQ9U6eeu-Y-otebxKiq0tdQ_Ipw7THABvF6vCjgCw_g
// acces key : qBBsi-sJ8iXDTxhSirJ0WIvzoPRrR1N_bGenHWOuFVE

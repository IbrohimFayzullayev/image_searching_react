import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar.jsx";
import ImageList from "./ImageList.jsx";

class App extends React.Component {
  state = { imageArr: [] };

  searchGetVal = async (data) => {
    const dat = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: data,
        page: 3,
        per_page: 20,
      },
      headers: {
        Authorization: "Client-ID qBBsi-sJ8iXDTxhSirJ0WIvzoPRrR1N_bGenHWOuFVE",
      },
    });
    this.setState({ imageArr: dat.data.results });
    console.log(dat.data);
  };

  render() {
    return (
      <div>
        <SearchBar malumotOl={this.searchGetVal} />
        <ImageList dataImg={this.state.imageArr} />
      </div>
    );
  }
}

export default App;

// secter key : BQ9U6eeu-Y-otebxKiq0tdQ_Ipw7THABvF6vCjgCw_g
// acces key : qBBsi-sJ8iXDTxhSirJ0WIvzoPRrR1N_bGenHWOuFVE

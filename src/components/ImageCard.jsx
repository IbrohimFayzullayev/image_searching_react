import React from "react";
import "../StyleImage.css";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageDOM = React.createRef();
  }
  setSpan = () => {
    const height = this.imageDOM.current.clientHeight;
    const spans = Math.ceil(height + 10);
    this.setState({ spans: spans });
  };
  componentDidMount() {
    this.imageDOM.current.addEventListener("load", this.setSpan);
  }

  render() {
    return (
      <img
        ref={this.imageDOM}
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        className="image"
        alt={this.props.data.alt_description}
        src={this.props.data.urls.regular}
      />
    );
  }
}

export default ImageCard;
// const ImageCard = (props) => {
//   return (
//     <img
//       className="image"
//       key={props.id}
//       alt={props.alt_description}
//       src={props.urls.regular}
//     />
//   );
// };

// export default ImageCard;

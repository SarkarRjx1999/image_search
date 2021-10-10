import React from 'react'

export default class ImgCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { spans: 0 }
    this.ImageRef = React.createRef();
  }

  componentDidMount() {
    this.ImageRef.current.addEventListener('load', this.setSpans);
  };

  setSpans = () => {
    const height = this.ImageRef.current.clientHeight;
    const spans = Math.ceil(height /10);
    this.setState({spans});
  }

  render() {
    const { description, urls } = this.props.Image
    return (
      <div style={{gridRowEnd:`span ${this.state.spans}`}}>
        <img ref={this.ImageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

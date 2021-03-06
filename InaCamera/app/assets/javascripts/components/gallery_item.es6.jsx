class GalleryItem extends React.Component {
  constructor() {
    super();
  }

  render () {
    const background = {
      backgroundImage: `url(${this.props.backgroundImage})`
    };

    return (
      <li onClick={this.props.onItemClick} id={this.props.itemId} className={`gallery-item ${this.props.className}`}>
        <span style={background}>
          <p>{this.props.blurb}</p>
        </span>
      </li>
    );
  }
}

class GalleryShow extends React.Component {
  constructor() {
    super();

  }

  
  componentDidMount() {
    this.getGalleryItem();
  }

  getGalleryItem() {

    $.ajax({
      url: `/gallery/${this.props.id}.json`,
      success: this.updateGallery.bind(this)
    });
  }

  updateGallery(data, status, jqHXR) {
    console.log(data);
  }

  render () {
    return (
      <section>
        {this.props.id}
        hi
      </section>
    );
  }
}

class GalleryShow extends React.Component {
  constructor() {
    super();

    this.state = {
      galleryItem: undefined
    };
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

    this.setState({galleryItem: data});
  }

  redirectToGallery() {
    window.location.hash = "gallery";
  }

  render () {
    let galleryItem;

    if(this.state.galleryItem === undefined) {
      galleryItem = (
        <span key={"loading"} className={"loading"}></span>
      );
    } else {
      galleryItem = (
        <article>
          <img src={this.state.galleryItem.pictures[0].image_url} />
          <h2>{this.state.galleryItem.blurb}</h2>
        </article>
      );
    }


    return (
      <section className="gallery">
        <p className={"back-button"} onClick={this.redirectToGallery}>Back to gallery</p>
        {galleryItem}
      </section>
    );
  }
}

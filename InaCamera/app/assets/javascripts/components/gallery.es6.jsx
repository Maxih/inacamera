class Gallery extends React.Component {

  constructor() {
    super();

    this.state = {
      gallery: []
    };

    this.getGalleryItems();
  }

  getGalleryItems() {
    $.ajax({
      url: "/gallery.json",
      success: this.updateGallery.bind(this)
    });
  }

  updateGallery(data, status, jqXHR) {
    console.log(data);
    this.setState({gallery: data});
  }

  render () {
    const items = this.state.gallery.map((item) => {
      return (
        <li key={item.id}>
          {item.blurb}
        </li>
      );
    });

    return (
      <ul>
        {items}
      </ul>
    );
  }
}

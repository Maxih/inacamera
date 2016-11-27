class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      gallery: [],
      row_length: 0
    };

    this.galleryRows = 4;

    this.loadedNum = 0;
    this.loadedAll = false;

    $(document).on('scroll', (e) => {
      let distanceFromBottom = Math.floor($(document).height() - $(document).scrollTop() - $(window).height());

      if(distanceFromBottom < 50 && !this.loadedAll) {
          this.getGalleryItems();
      }
    });

    this.getGalleryItems();
  }

  getGalleryItems() {
    console.log(this.state.row_length);
    $.ajax({
      url: "/gallery.json",
      data: {start: this.loadedNum},
      success: this.updateGallery.bind(this)
    });
  }

  updateGallery(data, status, jqXHR) {
    if(data.length === 0) {
      this.loadedAll = true;
      return;
    }
    let loadedImages = 0;
    this.loadedNum += data.length;

    data.forEach((galleryItem) => {
      const image = new Image();
      image.src = galleryItem.pictures[0].image_url;
      image.onload = () => {

        let ratio = image.height / image.width;

        if(ratio < 0.5 && this.state.row_length + 4 <= this.galleryRows) {
          this.state.row_length += 4;
          galleryItem.class_name = "gallery-item-full";
        } else if(ratio < 0.8 && this.state.row_length + 3 <= this.galleryRows) {
          this.state.row_length += 3;
          galleryItem.class_name = "gallery-item-large";
        } else if(ratio < 1.2 && this.state.row_length + 2 <= this.galleryRows) {
          this.state.row_length += 2;
          galleryItem.class_name = ratio > 1 ? "gallery-item-half wide" : "gallery-item-half";
        } else {
          this.state.row_length += 1;
          galleryItem.class_name = "gallery-item-quarter";
        }

        if(this.state.row_length === this.galleryRows)
          this.state.row_length = 0;

        loadedImages++;

        if(loadedImages === data.length)
          this.setState({gallery: this.state.gallery.concat(data)});

      };
    });
  }


  render () {
    const items = this.state.gallery.map((item) => {
      const background = {
        backgroundImage: `url(${item.pictures[0].image_url})`
      };

      const classname = `gallery-item ${item.class_name}`;

      return (
        <li
          className={classname}
          key={item.id}
        >
        <span style={background}></span>
        </li>
      );
    });

    return (
      <ul className={"gallery group"}>
        {items.length === 0 ? "loading" : items }
      </ul>
    );
  }
}

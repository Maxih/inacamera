class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      gallery: [],
      loading: true
    };

    $(document).on('scroll', (e) => {
      let distanceFromBottom = Math.floor($(document).height() - $(document).scrollTop() - $(window).height());
      if(distanceFromBottom < 50 && !this.loadedAll) {
          this.getGalleryItems();
      }
    });

    this.unMounted = false;
    this.loadingImages = false;
    this.getGalleryItems();
  }

  componentWillUnmount () {
    this.unMounted = true;
  }

  getGalleryItems() {
    if(!this.loadingImages) {
      this.loadingImages = true;
      $.ajax({
        url: "/gallery.json",
        data: {start: this.state.gallery.length},
        success: this.updateGallery.bind(this)
      });
    }
  }

  updateGallery(data, status, jqXHR) {
    this.loadingImages = false;

    data.forEach((galleryItem) => {
      const image = new Image();
      image.src = galleryItem.pictures[0].image_url;
      image.onload = () => {

        let ratio = image.height / image.width;

        if(ratio < 1)
          galleryItem.class_name = "gallery-item-wide";
        else
          galleryItem.class_name = "gallery-item-tall";

        //
        // if(ratio < 0.5 && this.state.row_length + 4 <= this.galleryRows) {
        //   this.state.row_length += 4;
        //   galleryItem.class_name = "gallery-item-full";
        // } else if(ratio < 0.8 && this.state.row_length + 3 <= this.galleryRows) {
        //   this.state.row_length += 3;
        //   galleryItem.class_name = "gallery-item-large";
        // } else if(ratio < 1.2 && this.state.row_length + 2 <= this.galleryRows) {
        //   this.state.row_length += 2;
        //   galleryItem.class_name = ratio > 1 ? "gallery-item-half wide" : "gallery-item-half";
        // } else {
        //   this.state.row_length += 1;
        //   galleryItem.class_name = "gallery-item-quarter";
        // }
        //
        // if(this.state.row_length === this.galleryRows)
        //   this.state.row_length = 0;


        const updatedData = this.state.gallery.slice(0);
        if(updatedData.indexOf(galleryItem) === -1)
          updatedData.push(galleryItem);

        if(!this.unMounted)
          this.setState({gallery: updatedData});
      };
    });

    if(data.length === 0) {
      if(!this.unMounted)
        this.setState({loading: false});
    }
  }

  render () {
    const items = this.state.gallery.map((item) => {
      return (
        <GalleryItem
          backgroundImage={item.pictures[0].image_url}
          className={item.class_name}
          key={item.id}
          blurb={item.blurb}
          />
      );
    });

    if(this.state.loading) {
      items.push(
        <span key={"loading"} className={"loading"}></span>
      );
    }
    else {
      items.push(
        <span key={"loading"} className={"not-loading"}>No More Items</span>
      );
    }

    return (
      <ul className={"gallery group"}>
        <ReactCSSTransitionGroup
           transitionName="gallery-item-trans"
           transitionEnterTimeout={500}
           transitionLeaveTimeout={500}
           >
        {items}
        </ReactCSSTransitionGroup>
      </ul>
    );
  }
}

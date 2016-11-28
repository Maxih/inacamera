
class Router extends React.Component {
  constructor(node) {
    super();

    this.pageId = -1;

    const routes = {
      gallery: Gallery,
      show_gallery: GalleryShow,
      contact: Contact
    };


    this.state = {
      route: "",
      routes: routes
    };



    $(window).on("hashchange", this.changeRoute.bind(this));
  }

  componentDidMount() {
    this.changeRoute();
  }

  renderRoute() {
    let CurRoute = this.state.routes[this.state.route];

    if(CurRoute === undefined)
      return "";

    return (<CurRoute id={this.state.id}/>);
  }

  changeRoute() {
    const route = this.activeRoute().split("/");
    let curRoute = route.length === 1 ? route[0] : `show_${route[0]}`;
    let routeId = route.length > 1 ? route[1] : -1;

    this.setState({route: curRoute, id: routeId});
  }

  activeRoute() {
    return window.location.hash.slice(1);
  }

  render() {
    return(
      <section>
        <ReactCSSTransitionGroup
          transitionName="content"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.renderRoute()}
        </ReactCSSTransitionGroup>
      </section>
    );
  }
}


class Router extends React.Component {
  constructor(node) {
    super();

    const routes = {
      index: (<Gallery />)
    };


    this.state = {
      route: this.activeRoute(),
      routes: routes
    };

    $(window).on("hashchange", this.changeRoute.bind(this));
  }


  changeRoute() {
    this.setState({route: this.activeRoute()});
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
          {this.state.routes[this.state.route]}
        </ReactCSSTransitionGroup>
      </section>
    );
  }
}

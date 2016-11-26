class Router extends React.Component {
  constructor(node) {
    super();

    const routes = {
      index: (<Gallery />)
    };


    this.state = {
      route: routes.index,
      routes: routes
    };
  }


  changeRoute() {
    alert(this.activeRoute());
    this.setState({route: this.activeRoute()});
  }

  activeRoute() {
    return window.location.hash.slice(1);
  }

  render() {
    return(
      <section>
        {this.state.routes[this.state.route]}
      </section>
    );
  }
}

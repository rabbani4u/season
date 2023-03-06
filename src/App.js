import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Latitude:{this.state.lat}</h1>
        <h1>Error Mesasge: {this.state.errorMessage}</h1>
      </div>
    );
  }
}

export default App;

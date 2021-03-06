import React from 'react';
import '../styles/Search.scss'

export default class StartPage extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   textInput: ''
    // }

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);

  }


  //once we can access text input pass that to get Weather function on click
  //which will be passed from app
  //make api call based on input
  onChange(e) {
    this.props.onType(e);
  }

  onClick() {
    this.props.onInitialSearch();
  }

  render() {
    return (
      <section>
        <div className="input-wrap">
          <input className="searchCity" placeholder="Search Cities" onChange={this.onChange}></input>
          <button onClick={this.onClick}>Go</button>
        </div>
      </section>
    )
  }
}

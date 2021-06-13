import * as React from 'react';
import Navbar from '../navbar/navbar';
import ContentNotLogged from '../contentNotLogged/contentNotLogged';
import '../../../assets/main.css'; // Import custom styles

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
        <div>
            <Navbar />
            <ContentNotLogged />
        </div>
    );
  }
}

document.title = "Home";
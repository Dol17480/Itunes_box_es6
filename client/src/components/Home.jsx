import React from 'react';
import {Link} from 'react-router'

class Home extends React.Component{
  render () {
    return (
       <div>
       <h4>C7 Website</h4>
       <ul>
       <li><Link to='/home'>Home</Link></li>
       <li><Link to='/about'>About</Link></li>
       <li><Link to='/pricing'>Pricing</Link></li>
       </ul>
       {this.props.children}
       </div>
      )
  }
}

export default Home
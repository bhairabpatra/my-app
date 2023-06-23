import axios from "axios";
import React, { Component } from "react";
import Userlist from "../components/Userlist";
import Spiner from "../layout/Spiner";
export default class User extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await axios.get(
        "https://api.github.com/users"
      );
      this.setState({ user: response.data });
      console.log('user', this.state.user)
      this.setState({ loading: false });
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  render(){
    return(
        <div className="container">
            {/* <Spiner /> */}
            <Userlist userList={this.state.user} spinner = {this.state.loading} />
        </div>
    )
  }
}

 


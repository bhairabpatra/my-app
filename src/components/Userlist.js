import React from "react";
import Spiner from "../layout/Spiner";
const Userlist = (props) => {
  if (props.userList.length) {
    return (
      <div className="profile">
        <div className="row">
          {props.userList.map((user) => {
            return (
              <div className="col-md-3 mb-4" key={user.id}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={user.avatar_url}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{user.login}</h4>
                    <p className="card-text">{user.type}</p>
                    <a href={user.url} class="btn btn-primary">
                      <span className="">visit profile</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    if(props.userList.length === 0){
        return(
            <>
                <Spiner spiner = {props.spinner}/>
            </>
        )
    }else{
        return (
            <div className="text-center mt-5">
              <h5>Loading ....</h5>
            </div>
          );
    }
   
  }
};
export default Userlist;

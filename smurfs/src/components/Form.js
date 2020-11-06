import React, {useState} from "react";
import {connect} from "react-redux";
import {postSmurf} from "../actions/actions";
const Form = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    props.postSmurf(smurf);
    document.getElementById("smurf-form").reset();
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form id="smurf-form" onSubmit={submitHandler}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={props.name}
          onChange={inputHandler}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={props.name}
          onChange={inputHandler}
        />
        <input
          name="height"
          type="text"
          placeholder="Height"
          value={props.name}
          onChange={inputHandler}
        />
        <button>Add Smurf</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    errors: state.errors
  };
};

export default connect(mapStateToProps, { postSmurf })(Form);
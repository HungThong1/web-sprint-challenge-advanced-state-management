import React, {useEffect} from "react";
import Card from "./Card";
import {connect} from "react-redux";
import {fetchSmurfs} from "../actions/actions";

const List = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      <h2>Smurf List</h2>
      {props.smurfs.map((smurf) => (
        <Card key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    errors: state.errors,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(List);
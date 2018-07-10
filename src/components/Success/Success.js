import React from "react";
import { Link } from 'react-router-dom';

import Aux from '../../Aux';

const success = props => {
  return (
    <Aux>
      <h1>Success</h1>
      <Link style={{"display": "block", "textAlign": "center"}} to="/itemList">
        Go back to Your Item List
    </Link>
    </Aux>
  );
};

export default success;

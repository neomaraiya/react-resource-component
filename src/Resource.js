import React, { useState, useEffect } from "react";
import axios from "axios";

const Resource = function(props) {
  const [api, setAPI] = useState(() => ({
    path: props.path,
    loading: true,
    data: [],
    error: false
  }));

  useEffect(() => {
    axios
      .get(api.path)
      .then(data => {
        setAPI(value => ({ ...value, loading: false, data: data.data }));
      })
      .catch(error => {
        console.log(error);
        setAPI(value => ({ ...value, loading: false, error: true }));
      });
  }, []);

  return props.state(api);
};

export default Resource;

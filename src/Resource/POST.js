import React, { useState, useEffect } from "react";
import axios from "axios";

const Resource = function(props) {
  const [api, setAPI] = useState(() => ({
    loading: true,
    data: [],
    error: null
  }));

  useEffect(() => {
    axios
      .post(props.path, props.data)
      .then(data => {
        setAPI(value => ({ ...value, loading: false, data: data.data }));
      })
      .catch(error => {
        setAPI(value => ({ ...value, loading: false, error }));
      });
  }, []);

  return props.state(api);
};

export default Resource;

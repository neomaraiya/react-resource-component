import React from "react";
import Resource from "./Resource";
import "./style.css";

export default function App() {
  return (
    <div>
      <Resource
        path="https://random-data-api.com/api/address/random_address"
        state={state => {
          if (state.loading) return <div>Loading</div>;
          if (state.error) return <div>Error</div>;
          return <pre>{JSON.stringify(state.data, null, 2)}</pre>;
        }}
      />
      <Resource
        path="https://random-data-api.com/api/bank/random_bank"
        state={state => {
          if (state.loading) return <div>Loading</div>;
          if (state.error) return <div>Error</div>;
          return <pre>{JSON.stringify(state.data, null, 2)}</pre>;
        }}
      />
    </div>
  );
}

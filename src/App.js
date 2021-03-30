import React from "react";
import { GetResource, PostResource } from "./Resource";
import "./style.css";

export default function App() {
  return (
    <div>
      <GetResource
        path="https://random-data-api.com/api/address/random_address"
        state={state => {
          if (state.loading) return <div>Loading</div>;
          if (state.error) return <div>Error</div>;
          return <pre>{JSON.stringify(state.data, null, 2)}</pre>;
        }}
      />
      <PostResource
        path="https://reqres.in/api/users"
        data={{
          name: "Test",
          job: "leader"
        }}
        state={state => {
          if (state.loading) return <div>Loading</div>;
          if (state.error) return <div>Error</div>;
          return <pre>{JSON.stringify(state.data, null, 2)}</pre>;
        }}
      />
    </div>
  );
}

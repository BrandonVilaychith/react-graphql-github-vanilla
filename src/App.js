import React, { useEffect, useState } from "react";
import { InputForm, Organization } from "./components";
import { getIssuesOfRepository, resolveIssuesQuery } from "./helpers";
import "./App.css";

const App = () => {
  const [path, setPath] = useState(
    "the-road-to-learn-react/the-road-to-learn-react",
  );


  const [state, setState] = useState({
    organization: null,
    errors: null,
  });

  useEffect(() => {
    onFetchFromGitHub(path);
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    onFetchFromGitHub(path);
  };

  const onFetchFromGitHub = (path, cursor) => {
    getIssuesOfRepository(path, cursor).then(queryResult =>
      setState(resolveIssuesQuery(queryResult, cursor)),
    );
  };

  const onFetchMoreIssues = () => {
    const { endCursor } = state.organization.repository.issues.pageInfo;
    onFetchFromGitHub(path, endCursor);
  };
  return (
    <div>
      <h1>React GraphQL GitHub Client</h1>
      <InputForm path={path} setPath={setPath} onSubmit={onSubmit} />
      {state.organization ? (
        <Organization
          organization={state.organization}
          errors={state.organization}
          onFetchMoreIssues={onFetchMoreIssues}
        />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default App;

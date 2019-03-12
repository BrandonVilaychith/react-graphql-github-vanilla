import React from "react";
import { Issue } from "../components";

const Repository = ({ repository, onFetchMoreIssues }) => {
  const listIssues = repository.issues.edges.map(issue => {
    return (
      <Issue
        key={issue.node.id}
        link={issue.node.url}
        title={issue.node.title}
        reactions={issue.node.reactions}
      />
    );
  });

  return (
    <div>
      <p>
        <strong>In Repository:</strong>
        <a href={repository.url}>{repository.name}</a>
      </p>
      <ul>{listIssues}</ul>
      <hr />
      {repository.issues.pageInfo.hasNextPage && (
        <button onClick={onFetchMoreIssues}>More</button>
      )}
    </div>
  );
};

export default Repository;

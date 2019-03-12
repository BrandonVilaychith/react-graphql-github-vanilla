import { axiosGitHubGraphQL } from "../auth";
import { GET_ISSUES_OF_REPOSITORY } from "../queries";

export const getIssuesOfRepository = (path, cursor) => {
  // debugger;
  const [organization, repository] = path.split("/");

  return axiosGitHubGraphQL.post("", {
    query: GET_ISSUES_OF_REPOSITORY,
    variables: { organization, repository, cursor },
  });
};

export const resolveIssuesQuery = (queryResult, cursor) => state => {
  const { data, errors } = queryResult.data;

  if (!cursor) {
    return {
      organization: queryResult.data.data.organization,
      errors,
    };
  }

  const { edges: oldIssues } = state.organization.repository.issues;
  const { edges: newIssues } = data.organization.repository.issues;
  const updatedIssues = [...oldIssues, ...newIssues];
  return {
    organization: {
      ...data.organization,
      repository: {
        ...data.organization.repository,
        issues: {
          ...data.organization.repository.issues,
          edges: updatedIssues,
        },
      },
    },
    errors,
  };
};

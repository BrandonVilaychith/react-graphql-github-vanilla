import { axiosGitHubGraphQL } from '../auth';
import { GET_ISSUES_OF_REPOSITORY } from '../queries';

export const getIssuesOfRepository = (path) => {
    const [organization, repository] = path.split('/');

    return axiosGitHubGraphQL.post('', {
        query: GET_ISSUES_OF_REPOSITORY,
        variables: { organization, repository }
    });
};

export const resolveIssuesQuery = (queryResult) => () => ({
    organization: queryResult.data.data.organization,
    errors: queryResult.data.errors
});

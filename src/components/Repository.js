import React from 'react';
import { Issue } from '../components';

const Repository = ({ repository }) => {
    const listIssues = repository.issues.edges.map((issue) => {
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
        </div>
    );
};

export default Repository;

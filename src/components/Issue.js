import React from 'react';

const Issue = ({ link, title, reactions }) => {
    return (
        <li>
            <a href={link}>{title}</a>
            <ul>
                {reactions.edges.map((reaction) => {
                    return (
                        <li key={reaction.node.id}>{reaction.node.content}</li>
                    );
                })}
            </ul>
        </li>
    );
};

export default Issue;

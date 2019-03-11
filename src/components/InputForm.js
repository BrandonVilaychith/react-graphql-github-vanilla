import React from 'react';

const InputForm = ({ path, setPath, onSubmit }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='url'>
                    Show open issues for https://github.com/
                </label>
                <input
                    id='url'
                    type='text'
                    onChange={(e) => setPath(e.target.value)}
                    style={{ width: '300px' }}
                    value={path}
                />
                <button type='submit'>Search</button>
            </form>
            <hr />
        </div>
    );
};

export default InputForm;

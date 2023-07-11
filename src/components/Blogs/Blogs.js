import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1>Questions & Answers</h1>
            <div>
                <h3>1. What is context API and it's purpose?</h3>
                <p><strong>Answer:</strong> Context API is a feature of react version 16.3 that allows one to share state or any data accross the whole app or part of it. It's an alternative to 'prop drilling' for state management so that one can share any state or data to any of the components of react app from the top level of the component tree. It has solved the prop drilling issue.</p>
            </div>
            <div>
                <h3>2. What is semantic tag ?</h3>
                <p><strong>Answer:</strong>  Semantic tags are those tags which itself gives a meaning to both browser and developer. Normal html tags like: div tag only carries meaning to the browsers that how to display an specific portion of the markup, that doesn't represent any meaning to the developer that what kind of content is this! Semantic tags are like: header, section, nav, blockquote, code, h1-h6 etc.</p>
            </div>
        </div>
    );
};

export default Blogs;
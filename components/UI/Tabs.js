import React from 'react';

const Tabs = ({input, setInput}) => {
    console.log(input)
    return (
        <div className="tab">
            <button onClick={() => setInput("art")}>Art</button>
            <button onClick={() => setInput("sports")} className="active">Sports</button>
            <button onClick={() => setInput("photography")}>Photography</button>
            <button onClick={() => setInput("pattern")}>Pattern</button>
        </div>
    );
};

export default Tabs;

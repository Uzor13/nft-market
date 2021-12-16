import React from 'react';

const Tabs = ({data}) => {

    const sports = data.filter(sport => sport.tags === "sports")
    console.log(sports)

    return (
        <div className="tab">
            <button>Art</button>
            <button className="active">Sports</button>
            <button>Photography</button>
            <button>Pattern</button>
        </div>
    );
};

export default Tabs;

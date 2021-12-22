import React from 'react';
import Card from "../UI/Card";
import Title from "../UI/Title";

const Creators = ({data}) => {
    return (
        <div>
            <Title title="Top Creators" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <div className="collection">
                {data?.map(creator => (
                    <Card
                        img={creator.image.url}
                        name={creator.name}
                        text={`Follow`}
                        description={creator.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Creators;

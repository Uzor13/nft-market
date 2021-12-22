import React, {Fragment} from 'react';
import Card from "../UI/Card";
import Title from "../UI/Title";

const Creators = ({data}) => {
    return (
        <div>
            <Title title="Top Creators" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <div className="collection">
                {data?.map(creator => (
                    <Fragment key={creator.id}>
                        <Card
                            img={creator.image.url}
                            name={creator.name}
                            text={`Follow`}
                            description={creator.description}
                        />
                    </Fragment>

                ))}
            </div>
        </div>
    );
};

export default Creators;

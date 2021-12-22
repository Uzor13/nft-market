import React, {Fragment} from 'react';
import Title from "../UI/Title";
import Card from "../UI/Card";

const Featured = ({nfts}) => {

    const featured = nfts.filter(nft => nft.featured === true)
    console.log(featured)

    return (
        <section>
           <Title title="Featured Artworks" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <div className="collection">
                {featured.map(nft => {
                    const {
                        id,
                        nft_name,
                        nftPrice,
                        nftImage,
                        currentBid,
                        creator
                    } = nft;

                    return (
                        <Fragment key={id}>
                            <Card img={nftImage.url}
                                  creator={`@${creator.name}`}
                                  price={`${nftPrice} ETH`}
                                  name={nft_name}
                                  current_bid={currentBid}
                                  text="Place a bid"
                            />
                        </Fragment>
                    )
                })}
            </div>

        </section>
    );
};

export default Featured;

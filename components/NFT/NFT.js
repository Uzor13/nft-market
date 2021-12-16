import React, {Fragment} from 'react';
import Title from "../UI/Title";
import Card from "../UI/Card";
import Tabs from "../UI/Tabs";


const NFT = ({nfts}) => {
    console.log("NFTS", nfts)
    return (
        <section>
            <Title title="Collection" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <Tabs data={nfts}/>
            <div className="collection">
                {nfts.map(nft => {
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
                                  creator={creator.name}
                                  price={nftPrice}
                                  name={nft_name}
                                  current_bid={currentBid}/>
                        </Fragment>
                    )
                })}
            </div>

        </section>
    );
};

export default NFT;

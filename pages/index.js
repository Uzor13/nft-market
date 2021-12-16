import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Companies from "../components/companies/Companies";
import About from "../components/About/About";
import NFT from "../components/NFT/NFT";
import {gql, GraphQLClient} from "graphql-request";
import Featured from "../components/Featured/Featured";



export async function getServerSideProps() {

    const url = `https://api-eu-west-2.graphcms.com/v2/ckww7t5ym75u201xr053l13eo/master`

    const graphQLClient = new GraphQLClient(url)

    const query = gql`
      query {
        nfts {
        id,
        nft_name,
        nftPrice,
        nftImage {
          url
        },
        tags,
        currentBid,
        featured,
        creator {
          name
        }
      }
  }
`

    const data = await graphQLClient.request(query)
    const nfts = data.nfts

    return {
        props: {
            nfts
        }
    }
}


export default function Home({nfts}) {
  return (
    <div className="grid-container">
        <Header/>
        <Hero/>
        <Companies/>
        <About/>
        <NFT nfts={nfts}/>
        <Featured nfts={nfts}/>
    </div>
  )
}

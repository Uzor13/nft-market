import {useState} from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Companies from "../components/companies/Companies";
import About from "../components/About/About";
import NFT from "../components/NFT/NFT";
import {gql, GraphQLClient} from "graphql-request";
import Featured from "../components/Featured/Featured";
import Creators from "../components/Creators/Creators";
import Footer from "../components/Footer/Footer";


export async function getServerSideProps() {


    const graphQLClient = new GraphQLClient(process.env.API_URL)

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

    const creators = gql`
       query {
          creators {
            name,
            description,
            image {
              url
            }
          }
}

    `


    const data = await graphQLClient.request(query)
    const nfts = data.nfts

    const creatorsData = await graphQLClient.request(creators)
    const creator = creatorsData.creators


    return {
        props: {
            nfts,
            creator
        }
    }
}


export default function Home({nfts, creator}) {

    const [tagInput, setTagInput] = useState('');

    return (
        <div className="grid-container">
            <Header/>
            <Hero/>
            <Companies/>
            <About/>
            <NFT nfts={nfts} input={tagInput} setInput={setTagInput}/>
            <Featured nfts={nfts}/>
            <Creators data={creator}/>
            <section className="cta">
                <div className="cta-inner">
                    <h1>Get ready to collect our NFT</h1>
                    <button>Get Started</button>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

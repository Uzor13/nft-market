import Document, {Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>NFT Market Place</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
                          rel="stylesheet"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
                          crossOrigin="anonymous" referrerpolicy="no-referrer"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
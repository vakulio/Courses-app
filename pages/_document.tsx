import Document, { Html, Main, Head, NextScript, DocumentContext, DocumentInitialProps } from "next/document";

class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps
        }
    }

    render(): JSX.Element {
        return (
            <Html lang='en'>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link 
                href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" 
                rel="stylesheet"/>
                </Head>
                <body>
                  <Main/>
                  <NextScript/>  
                </body>
            </Html>
        )
    }
}

export default MyDocument;
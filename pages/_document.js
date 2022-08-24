import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class CustomDocument extends Document {
  render() {
    return (
        <Html lang="de">
            <Head>
                <link rel="icon" type="image/svg+xml" href="favicon.svg" sizes="any"></link>
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    rel="preload"
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    media="print"
                    onLoad="this.media='all'"
                />
                <noscript>
                    <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    />
                </noscript>
            </Head>
            <body className='bg-white dark:bg-gray-900'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
  }
}

export default CustomDocument
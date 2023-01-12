import Document, { Html, Head, Main, NextScript } from 'next/document'

// custom document가 필요한 경우 활용 > 로딩이 더 빠름(ssr)
// html 렌더링 시, _app.js 보다 먼저 그려지는 부분
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script src="https://cdn.tailwindcss.com"></script>
                    <title>Siren Order</title>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
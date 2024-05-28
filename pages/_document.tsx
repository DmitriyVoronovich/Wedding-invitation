import React from 'react';
import {createCache, extractStyle, StyleProvider} from '@ant-design/cssinjs';
import type {DocumentContext} from 'next/document';
import Document, {Head, Html, Main, NextScript} from 'next/document';

const MyDocument = () => (
    <Html lang="en">
        <Head/>
        <body style={{'margin': 0}}>
        <Main/>
        <NextScript/>
        </body>
    </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    if (!ctx.pathname.startsWith('/admin')) {
        return Document.getInitialProps(ctx);
    }

    const cache = createCache();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => (
                <StyleProvider cache={cache}>
                    <App {...props} />
                </StyleProvider>
            ),
        });

    const initialProps = await Document.getInitialProps(ctx);
    const style = extractStyle(cache, true);
    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                <style dangerouslySetInnerHTML={{__html: style}}/>
                <style jsx global>{`
                    body {
                        margin: 0;
                    }
                `}</style>
            </>
        ),
    };
};

export default MyDocument;

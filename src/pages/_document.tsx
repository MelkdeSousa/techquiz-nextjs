import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />

          {/* Primary Meta Tags */}
          <title>TechQuiz</title>
          <meta name="title" content="TechQuiz" />
          <meta
            name="description"
            content="Um quiz para quem pensa que sabe de algo sobre Tech."
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://techquiz.vercel.app/" />
          <meta property="og:title" content="TechQuiz" />
          <meta
            property="og:description"
            content="Um quiz para quem pensa que sabe de algo sobre Tech."
          />
          <meta
            property="og:image"
            content="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://techquiz.vercel.app/" />
          <meta property="twitter:title" content="TechQuiz" />
          <meta
            property="twitter:description"
            content="Um quiz para quem pensa que sabe de algo sobre Tech."
          />
          <meta
            property="twitter:image"
            content="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

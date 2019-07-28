import * as React from 'react'
import Head from 'next/head'

export const Layout: React.FunctionComponent = props =>
  <div>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <main>
      {props.children}
    </main>
  </div>
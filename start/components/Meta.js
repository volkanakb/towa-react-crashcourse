import React from 'react';
import Head from 'next/head';

const Meta = ({ title = 'React Crashcourse' }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
    <meta charSet="utf-8" key="charset" />
    <meta name="robots" content="noindex" />
    <link rel="shortcut icon" href="/favicon.ico" key="favicon" />
    <title>{title}</title>
  </Head>
);

export default Meta;

import Head from 'next/head'

export default () => (
    <Head>
        <title>Michael Koenig</title>
        <meta name='description' content='Personal Website of Michael Koenig' />
        <meta
            name='keywords'
            content='Michael Koenig,Programming,ATRIA,Web Development'
        />
        <meta name='author' content='Michael Koenig' />
        <meta name='theme-color' content='#ff4444' />
        <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/images/favicons/apple-touch-icon.png'
        />
        <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/images/favicons/favicon-32x32.png'
        />
        <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/images/favicons/favicon-16x16.png'
        />
        <link
            rel='mask-icon'
            href='/images/favicons/safari-pinned-tab.svg'
            color='#212121'
        />
        <link rel='shortcut icon' href='/images/favicons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#ff4444' />
        <meta
            name='msapplication-config'
            content='/images/favicons/browserconfig.xml'
        />
        <link rel='manifest' href='manifest.json'></link>
        <link href='https://fonts.googleapis.com/css?family=Space+Mono:400,700&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Baloo+2:400,500,600,700&display=swap' rel='stylesheet' />
        <link href='style.css' rel='stylesheet' />
    </Head>
)

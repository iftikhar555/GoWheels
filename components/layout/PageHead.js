import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Go Wheels"}
                </title>
            </Head>
        </>
    )
}

export default PageHead
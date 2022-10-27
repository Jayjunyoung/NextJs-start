import Head from "next/head";//header부분 작성할수있게하는 nextjs만의 툴

export default function Seo({ title }) {
    return (
        <Head>
        <title>{title} | Next Movies</title>
        </Head>
    );
}
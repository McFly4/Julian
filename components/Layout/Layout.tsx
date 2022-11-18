import React from "react";
import Nav from "../Nav/Nav";
import Head from "next/head";

export default function Layout({ children }: any) {
    return (
        <>
            <Head>
                <title>Julian | UX - UI</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main>{children}</main>
        </>
    );
}

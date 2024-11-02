'use client';

export default function Error({error}) {
    return (
        <main className="error">
            <h1>An Error occured!</h1>
            <p>Failed to get meals data. Tyr again later</p>
        </main>
    )
}
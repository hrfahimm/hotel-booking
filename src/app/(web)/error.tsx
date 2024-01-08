'use client'

import Link from "next/link";

export default function Error({ error, reset }: {
    error: Error & { digest?: string };
    reset: () => void
}) {
    return (
        <div className="container mx-auto flex flex-wrap justify-between items-center py-32 px-5 ">
            <h2 className="font-heading  text-red-600  ">Something Went Wrong !!!</h2>
            <button onClick={() => reset()} className="btn-primary mt-4 ">Try Again</button>
        </div>
    )
}
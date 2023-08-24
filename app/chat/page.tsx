import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chat'
}

export default function Chat() {
    return (
        <div className="bg-blue-500 p-10">
            <h1>chat</h1>
        </div>
    )
}
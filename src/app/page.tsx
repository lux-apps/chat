import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Chat
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          Secure Communication for Everyone
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          End-to-end encrypted messaging with blockchain-verified identities.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Private by Design</h2>
          <p className="text-lg text-gray-400">All messages are encrypted end-to-end. Only you and your recipients can read your conversations.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Verified Identities</h2>
          <p className="text-lg text-gray-400">Blockchain-based identity verification ensures you always know who you are talking to.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Decentralized</h2>
          <p className="text-lg text-gray-400">No central servers to hack. Your messages are stored securely across the Lux Network.</p>
        </div>
      </section>

    </main>
  )
}

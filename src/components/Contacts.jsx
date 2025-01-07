export default function Contacts() {
    return (
      <main className="min-h-screen bg-gray-800 flex items-center justify-center pt-24 px-4">
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-6">Kontak</h1>
          <div className="space-y-4 text-white">
            <p>
              Email:{" "}
              <a href="mailto:nazrilpro10@email.com" className="text-blue-400 hover:text-blue-300">
                nazrilpro10@email.com
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.link/7gfx13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                +62 85 806 477 799 (Nazril)
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/na-x-ril"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                github.com/na-x-ril
              </a>
            </p>
          </div>
        </div>
      </main>
    );
  }
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-800 flex items-center justify-center pt-24 px-4">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6">Proyek</h1>
        <div className="space-y-6">
          {/* Proyek 1 */}
          <div className="bg-gray-700/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white">D'Nazrill Prtfolio</h2>
            <p className="text-gray-300 mt-2">
              Website portfolio yang menampilkan proyek-proyek saya, kontak, dan media sosial saya,
              termasuk deskripsi dan tautan untuk melihat detail setiap proyek.
            </p>
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-400 hover:text-blue-300"
            >
              Lihat Proyek →
            </Link>
          </div>

          {/* Proyek 2 */}
          <div className="bg-gray-700/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white">Web Injector</h2>
            <p className="text-gray-300 mt-2">
              Sebuah ekstensi chrome yang berguna untuk menyelipkan beberapa function untuk
              berinteraksi dengan website, juga untuk mengubah tampilan website dengan custom CSS.
            </p>
            <a
              href=""
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-400 hover:text-blue-300"
            >
              Lihat Proyek (Private) →
            </a>
          </div>

          {/* Proyek 3 */}
          <div className="bg-gray-700/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white">GainNode</h2>
            <p className="text-gray-300 mt-2">
              Sebuah script JavaScript untuk mengubah kualitas suara pada suatu website.
            </p>
            <a
              href="https://github.com/na-x-ril/tdea1-dev3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-400 hover:text-blue-300"
            >
              Lihat Proyek →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
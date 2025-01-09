import { useState } from "react";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "D'Nazrill Portfolio",
    description: "Website portfolio yang menampilkan proyek-proyek saya, kontak, dan media sosial saya.",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Web Injector",
    description: "Ekstensi Chrome untuk menyelipkan function dan mengubah tampilan website dengan custom CSS.",
    category: "Chrome Extension",
  },
  {
    id: 3,
    title: "GainNode",
    description: "Script JavaScript untuk mengubah kualitas suara pada suatu website.",
    category: "JavaScript",
  },
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory ? project.category === filterCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center pt-24 px-4">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6">Proyek</h1>

        {/* Pencarian dan Filter */}
        <div className="mb-6 space-y-4">
          <input
            type="text"
            placeholder="Cari proyek..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          >
            <option value="">Semua Kategori</option>
            <option value="Web Development">Web Development</option>
            <option value="Chrome Extension">Chrome Extension</option>
            <option value="JavaScript">JavaScript</option>
          </select>
        </div>

        {/* Daftar Proyek */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-700/50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <Link
                to="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-400 hover:text-blue-300"
              >
                Lihat Proyek →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
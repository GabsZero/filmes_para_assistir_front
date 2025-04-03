'use client'
export default function FilmeCard({ nome, genero, onAssistido, onApagar }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">{nome}</h2>
      <p className="text-gray-600 mb-4">Gênero: {genero}</p>
      <div className="flex gap-2">
        <button
          onClick={onAssistido}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Marcar como assistido
        </button>
        <button
          onClick={onApagar}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Apagar
        </button>
      </div>
    </div>
  );
} 
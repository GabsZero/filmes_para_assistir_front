import { apagarFilme, getFilmes, marcarAssistido } from "./lib/actions"
export default async function Page() {
  const filmes = await getFilmes(false);

  console.log(filmes)


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Lista de Filmes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filmes.data.map((filme) => (
          <div key={filme.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{filme.nome}</h2>
            <p className="text-gray-600 mb-4">Gênero: {filme.genero}</p>
            <div className="flex gap-2">
              <form action={marcarAssistido}>
                <input type="hidden" name="id" value={filme.id} />
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Marcar como assistido
                </button>
              </form>
              <form action={apagarFilme}>
                <input type="hidden" name="id" value={filme.id} />
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Apagar
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


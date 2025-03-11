import Form from 'next/form'
import criarFilme from './criarFilme'

export default async function Criar() {
    return (
    <div className="container mx-auto max-w-3xl mt-5">
        <h1 className="text-2xl font-bold mb-4 text-center">Filmes para assistir</h1>
        <div className="bg-white p-12">
          <div className="space-y-4">
            <Form action={criarFilme} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="titulo" className="block mb-2 text-sm font-medium text-black">Título</label>
                    <input type="titulo" id="titulo" name='titulo' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="um filme bem bonito" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="tipo" className="block mb-2 text-sm font-medium text-gray-900">Tipo</label>
                    <select id="tipo" name='tipo' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                        <option value="">Selecionar</option>
                        <option value="1">Filme</option>
                        <option value="2">Série</option>
                    </select>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  -700 -800">Salvar</button>
            </Form>
          </div>
        </div>
    </div>
    )
}
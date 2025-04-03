
import Form from 'next/form'
import criarFilme from './criarFilme'

export default async function Page() {

    const generosData = await getGeneros()

    return (
        <div className="container mx-auto max-w-3xl mt-5">
            <h1 className="text-2xl font-bold mb-4 text-center">Criar um novo filme para assistir</h1>
            <div className="bg-white p-12">
                <div className="space-y-4">
                    <Form action={criarFilme} className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label htmlFor="nome" className="block mb-2 text-sm font-medium text-black">Nome</label>
                            <input type="nome" id="nome" name='nome' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="um filme bem bonito" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="genero_id" className="block mb-2 text-sm font-medium text-gray-900">Gênero</label>
                            <select id="genero_id" name='genero_id' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                                <option value="">Selecionar</option>
                                {
                                    generosData?.data.map((genero) => (
                                        <option key={genero.id} value={genero.id}>{genero.nome_exibicao}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  -700 -800">Salvar</button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

async function getGeneros() {
    try {
        const generos = await fetch('http://localhost:3333/api/v1/generos')
        const generosData = await generos.json()
        return generosData
    } catch (error) {
        console.error('Erro ao buscar gêneros:', error)
        return { data: [] }
    }
}

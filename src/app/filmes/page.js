'use client'
import Form from 'next/form'
import criarFilme from './criarFilme'
import { useState } from 'react'

export default function Criar() {
    const [filmes, setFilmes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    async function sugerirFilme(formData) {
        setFilmes([])
        setIsLoading(true)
        const response = await fetch(`http://localhost:8080/sugerir-filmes/`, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                genero: formData.get('genero'),
             }),
          });
        const filmesResponse = await response.json();
        
        setIsLoading(false)
        setFilmes(filmesResponse.data);
    }

    return (
    <>
    <div className="container mx-auto max-w-3xl mt-5">
            <h1 className="text-2xl font-bold mb-4 text-center">Deixe a IA sugerir</h1>
            <h2 className='text-center font-bold text-lg'>Não sabe o que escolher? Escolha um gênero e receba algumas sugestões de filmes</h2>
            <div className='bg-white p12'>
                {
                    filmes.map(filme => (
                        <div key={filme.ID} className="text-center p-4 items-center border border-gray-300 rounded-lg shadow-sm">
                            <span className="">
                                {filme.Nome} - {filme.Genero} - {filme.Tipo}
                            </span>
                        </div>
                    ))
                }
            </div>
            <div className="bg-white p-12">
                <div className="space-y-4">
                    <Form action={sugerirFilme} className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label htmlFor="genero" className="block mb-2 text-sm font-medium text-gray-900">Gênero</label>
                            <select id="genero" name='genero' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                                <option value="">Selecionar</option>
                                <option value="Comédia">Comédia</option>
                                <option value="Ação">Ação</option>
                                <option value="Suspense">Suspense</option>
                                <option value="Drama">Drama</option>
                                <option value="Terror">Terror</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                            </select>
                        </div>
                        {
                            isLoading ?
                            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            :
                            <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-blue-500">
                                Sugerir filmes
                            </button>
                        }
                    </Form>
                </div>
            </div>
        </div>
        <div className="container mx-auto max-w-3xl mt-5">
            <h1 className="text-2xl font-bold mb-4 text-center">Criar um novo filme para assistir</h1>
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
    </>
    )
}
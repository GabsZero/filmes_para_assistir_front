'use server'

const baseUrl = process.env.API_FILMES

export default async function criarFilme(formData) {
  const response = await fetch(`${baseUrl}/filmes/`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome: formData.get('nome'),
      genero_id: formData.get('genero_id'),
    }),
  });
  const data = await response.json();
}
'use server'

export default async function criarFilme(formData) {
  const response = await fetch(`http://localhost:3333/api/v1/filmes/`, {
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
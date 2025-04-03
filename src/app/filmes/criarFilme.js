'use server'

export default async function criarFilme(formData) {
  const response = await fetch(`http://localhost:8080/filmes/`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome: formData.get('titulo'),
      tipoID: formData.get('tipo'),
    }),
  });
  const data = await response.json();
}
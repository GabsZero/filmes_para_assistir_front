'use server'

import { revalidatePath } from "next/cache"

const baseUrl = process.env.API_FILMES

export async function marcarAssistido(formData) {
  const { id } = Object.fromEntries(formData)

  const response = await fetch(`${baseUrl}/filmes/assistido/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error('Falha ao marcar filme como assistido')
  }
  revalidatePath('/')
}

export async function apagarFilme(formData) {
  const { id } = Object.fromEntries(formData)

  const response = await fetch(`${baseUrl}/filmes/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Falha ao apagar filme')
  }

  revalidatePath('/')

}

export async function getFilmes(assistido) {
  try {
    const filmesReponse = await fetch(`${baseUrl}/filmes?assistido=${assistido}`, { cache: 'no-store' });
    const filmes = await filmesReponse.json();
    return filmes;
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    return { data: [] };
  }
}
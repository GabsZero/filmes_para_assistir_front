'use server'

import { revalidatePath } from "next/cache"

export async function marcarAssistido(formData) {
  const { id } = Object.fromEntries(formData)

  const response = await fetch(`http://localhost:3333/api/v1/filmes/assistido/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    console.log(response)
    throw new Error('Falha ao marcar filme como assistido')
  }
  revalidatePath('/')
}

export async function apagarFilme(formData) {
  const { id } = Object.fromEntries(formData)

  const response = await fetch(`http://localhost:3333/api/v1/filmes/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    console.log(response)
    throw new Error('Falha ao apagar filme')
  }

  revalidatePath('/')

}
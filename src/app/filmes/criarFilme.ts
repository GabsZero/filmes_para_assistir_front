'use server'

import { revalidatePath } from 'next/cache';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { cookies } from 'next/headers';

const baseUrl = process.env.API_FILMES

export default async function criarFilme(formData) {
  const response: Response = await fetch(`${baseUrl}/filmes/`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      cache: 'no-store'
    },
    body: JSON.stringify({
      nome: formData.get('nome'),
      genero_id: formData.get('genero_id'),
    }),
  });
  const cookieStore: ReadonlyRequestCookies = await cookies()

  if (!response.ok) {
    cookieStore.set('error', 'Erro ao criar filme', {
      maxAge: 1
    })
    revalidatePath('/')
    return
  }

  const data = await response.json();

  cookieStore.set('success', `O Filme ${data.data.nome} foi criado com sucesso`, {
    maxAge: 1
  })

  revalidatePath('/')
}
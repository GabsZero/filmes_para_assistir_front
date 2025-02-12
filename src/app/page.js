import { revalidatePath } from "next/cache"


export default async function Home() {
  const data = await fetch('http://localhost:8080/filmes')
  const filmesResponse = await data.json()
  
  const marcarFilmeAssistido = async (formData) => {
    'use server'
    const id = formData.get('ID')
    const assistido = formData.get('Assistido') === 'true' ? true : false;
    
    const response = await fetch(`http://localhost:8080/filmes/assistido/${id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ assistido:!assistido }),
    });
    const updatedFilme = await response.json();
    if(updatedFilme.status == 200) {
      revalidatePath("/");
    }
  }

  return (
    <div className="container mx-auto max-w-xl mt-5">
      <h1 className="text-2xl font-bold mb-4 text-center">Filmes para assistir</h1>
      <div className="bg-white p-12">
        <div className="space-y-4">
          {filmesResponse.data.filmes.map((filme) => (
            <div key={filme.ID} className="flex justify-between p-4 items-center border border-gray-300 rounded-lg shadow-sm">
              <span className={filme.Assistido ? "line-through text-gray-500" : ""}>
                {filme.Nome}
              </span>
              <div className="flex space-x-2">
                {
                  !filme.Assistido ?
                  <>
                    <form action={marcarFilmeAssistido}>
                      <input type="hidden" name="ID" value={filme.ID} />
                      <input type="hidden" name="Assistido" value={filme.Assistido} />
                      <button
                      className="bg-green-700 hover:bg-green-600 text-white p-4 rounded-lg shadow-md shadow-green-900"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </button>
                    </form>
                  <button
                    className="bg-red-700 hover:bg-red-600 text-white p-4 rounded shadow-md shadow-red-900"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                  </button>
                  </>
                :""
                }
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

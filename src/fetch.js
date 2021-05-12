
class Connect{
  async buscarDados() {
    const resp = await fetch('http://localhost:3000/posts')
    const result = await resp.json()
    return result
    
  }

  async enviaDados(titulo, corpo) {
    const envia = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        titulo, corpo
      })
    })

    return envia
  }

  async deletar(id) {
    const envia = await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })

    return envia
  }
    
  async editado(id, titulo, corpo) {
    const envia = await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        titulo, corpo
      })
    })

    return envia
  }
    
} 

export const busca = new Connect;
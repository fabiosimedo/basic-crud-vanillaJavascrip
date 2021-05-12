class UI {

  
  //   this.formState = 'add'


  mostraPosts(posts) {
    const display = document.querySelector('#posts')
    let saida = '';
    posts.forEach(post => {
      saida += `
        <div class="card mb-3 mt-3">
          <div calss="card-body">
            <h4 class="card-title p-1">${post.titulo}</h4>
            <p class="card-text p-1">${post.corpo}</p>
            <div class="row">
              <div class="col">
                <button class="btn btn-outline-secondary w-100" data-id="${post.id}">Editar</button>
              </div>
              <div class="col">
                <button class="btn w-100 btn-outline-warning" data-id="${post.id}">Apagar</button>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    display.innerHTML = saida
  }

  mostraAlerta(msg, className) {
    const alerta = document.createElement('div')
    alerta.className = className
    alerta.appendChild(document.createTextNode(msg))
    const parent = document.querySelector('.postsContainer')
    const postDiv = document.querySelector('#posts')
    parent.insertBefore(alerta, postDiv)

    setTimeout(() => {
      this.limpaAlerta()
    }, 3000);
  }

  limpaAlerta() {
    const alerta = document.querySelector('.alert')
    if(alerta) {
      alerta.remove()
    }
  }

  limparCampos() {
    document.querySelector('#titulo').value = ''
    document.querySelector('#corpo').value = ''
  }

  prencheForm(dados) {
    document.querySelector('#titulo').value = dados.title
    document.querySelector('#corpo').value = dados.corpo
    document.querySelector('#id').value = dados.id

    this.mudaEstadoForm('edit')

  }

  clearIdinput() {
    document.querySelector('#id').value = ''
  }

  mudaEstadoForm(type){
    if(type === 'edit') {
      const btn = document.querySelector('.enviaPost')
      btn.textContent = "Editar Post"
      btn.className = 'btn btn-warning btn-block mt-3 enviaPost'

      const btnCancel = document.createElement('button')
      btnCancel.className = 'cancelar btn btn-light btn-block mt-2' 
      btnCancel.appendChild(document.createTextNode("Cancelar"))

      const parent = document.querySelector('.cardForm')
      const span = document.querySelector('.form-end')
      parent.insertBefore(btnCancel, span)


    } else {
      const btn = document.querySelector('.enviaPost')
      btn.textContent = "Postar"
      btn.className = 'btn btn-primary btn-block mt-3 enviaPost'
      if(document.querySelector('.cancelar')) {
        document.querySelector('.cancelar').remove()
      }

      this.clearIdinput()
      this.limparCampos()

    }
  }

  
}

export const ui = new UI()
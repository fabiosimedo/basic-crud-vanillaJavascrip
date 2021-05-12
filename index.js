import { busca } from './src/fetch.js'
import { ui } from './src/ui.js'

document.addEventListener('DOMContentLoaded', () => {
  busca.buscarDados()
  .then(res => ui.mostraPosts(res))
  .catch(err => console.log(err))
})

document.querySelector('.enviaPost').addEventListener('click', e => {
  const titulo = document.querySelector('#titulo').value
  const corpo = document.querySelector('#corpo').value
  const id = document.querySelector('#id').value
  if(titulo == '' && corpo == '') {
    ui.mostraAlerta("Você precisa preencher algum dado...", "alert alert-success")
  } else {
    if(id === '') {
      const dados = { titulo, corpo }
      busca.enviaDados(titulo, corpo)
      ui.mostraAlerta('Post adicionado!', 'alert alert-success')
      ui.limparCampos()
      busca.buscarDados()
    } else {
      busca.editado(id, titulo, corpo)
      ui.mudaEstadoForm('add')
      ui.mudaEstadoForm('add')
      ui.mostraAlerta('Post editado!', 'alert alert-light')
    }
    
    e.preventDefault()
  }
  
})

document.querySelector('#posts').addEventListener('click', e => {
  if(e.target.innerText === 'Apagar') {
    const id = e.target.dataset.id
    if(confirm("Voçê que mesmo deletar esse post?")) {
      busca.deletar(id)
      ui.mostraAlerta("Post deletado", "alert alert-danger")
    }
  }
  e.preventDefault()
})

document.querySelector('#posts').addEventListener('click', e => {
  if(e.target.innerText === 'Editar') {
    const id = e.target.dataset.id
    const title = e.target.parentElement.parentElement.parentElement.firstElementChild.innerText
    const corpo = e.target.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.innerText
    
    const dados = { id, title, corpo }

    ui.prencheForm(dados)
  }
  e.preventDefault()
})

document.querySelector('.cardForm').addEventListener('click', e => {
  if(e.target.innerText === 'Cancelar') {
    ui.mudaEstadoForm('add')
  } 
  e.preventDefault()
})
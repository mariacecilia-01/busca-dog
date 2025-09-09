'use strict'

async function buscarImagens() {
    const url = `https://dog.ceo/api/breed/images`
    const response = await fetch (url)
    const imagens = await response.json()

    const container = document.getElementById('container')
    
    const div = document.createElement('div')
    const imagem = document.createElement('img')

    imagem.src = url

    div.appendChild(imagem)


}

buscarImagens('beagle')

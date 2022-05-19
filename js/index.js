let listCarrinho = []

const div = document.querySelector('.conteudoInterno')
const vitrine = document.getElementById("vitrine")


function gerarVitrine() {

    for (let i = 0; i < data.length; i++) {
        const productCard = document.createElement('li')
        productCard.classList = "card"
        /* const vitrineAcessorios = document.createElement('li') */

        const productImg = document.createElement('img')
        productImg.classList = "product-img"
        productImg.src = data[i].img

        const productCategory = document.createElement('h4')
        productCategory.classList = "product-category"
        productCategory.innerHTML = data[i].tag

        const productTitle = document.createElement('h3')
        productTitle.classList = "product-title"
        productTitle.innerHTML = data[i].nameItem

        const productDescription = document.createElement('p')
        productDescription.classList = "product-description"
        productDescription.innerHTML = data[i].description

        const preco = document.createElement('strong')
        preco.classList = "price"
        preco.innerHTML = `R$ ${data[i].value}`

        const p = document.createElement('p')

        const carButton = document.createElement('button')
        carButton.classList = "btnAddCar"
        carButton.id = data[i].id
        carButton.innerHTML = "Adicionar ao carrinho"
        carButton.addEventListener('click', (e) => {
            listCarrinho.push(data[i])
            carrinho(listCarrinho)
        })

        productCard.appendChild(productImg)
        productCard.appendChild(productCategory)
        productCard.appendChild(productTitle)
        productCard.appendChild(productDescription)
        productCard.appendChild(preco)
        productCard.appendChild(p)
        productCard.appendChild(carButton)

        vitrine.appendChild(productCard)

        /* não é preguiça é so cansaço depois de 10horas no pc
            document.addEventListener('click', (e) => {
            const click = e.target.id
            if (click === `todos`) {
                vitrine.appendChild(productCard)
            }
             if (click === `acessorios`) {
                if(productCategory === 'Acessórios'){
                    vitrineCardAcessorios.appendChild(productCard)  
                }
            }
            if(click === 'camisetas'){
                productCardCamisas.appendChild(productCard)
                vitrine.appendChild(productCardCamisas)

            } 
        }) */

    }
}

function gerarCarrinhoVazio() {
    const divInterna = document.createElement('div')
    divInterna.classList = "interno"
    const h2carrinho = document.createElement('h2')
    h2carrinho.classList = "h2Carrinho"
    h2carrinho.innerText = "Carrinho vázio"

    const p = document.createElement('p')
    p.innerText = "adicione itens"
    p.classList = "pCarrinho"

    divInterna.appendChild(h2carrinho)
    divInterna.appendChild(p)
    div.appendChild(divInterna)
}


function gerarConteudoCarrinho(produto, index) {
    const ulCarrinho = document.createElement('ul')
    ulCarrinho.classList = "ulCarrinho"
    const liCarrinho = document.createElement('li')
    liCarrinho.classList = "liCarrinho"

    const divImg = document.createElement('div')
    divImg.classList = "divImg"
    const imgCarrinho = document.createElement('img')
    imgCarrinho.src = produto.img
    imgCarrinho.classList = "imgCarrinho"

    const divConteudo = document.createElement('div')
    divConteudo.classList = "divConteudo"

    const productTitleCarrinho = document.createElement('h3')
    productTitleCarrinho.innerHTML = produto.nameItem
    productTitleCarrinho.classList = "productTitleCarrinho"

    const precoCarrinho = document.createElement('strong')
    precoCarrinho.innerHTML = `R$ ${produto.value}`
    precoCarrinho.classList = "precoCarrinho"

    const removerProduto = document.createElement('button')
    removerProduto.classList = 'remover'
    removerProduto.innerHTML = "Remover"
    removerProduto.id = index
    removerProduto.addEventListener('click', (e) => {
        listCarrinho.splice(index, 1)
        carrinho(listCarrinho)
        console.log(listCarrinho.length)
        if (listCarrinho.length === 0) {

            const reset = document.querySelector('.boxResumo')
            reset.innerHTML = "Carrinho Vazio"
        }
    })

    divImg.appendChild(imgCarrinho)
    liCarrinho.appendChild(divImg)

    divConteudo.appendChild(productTitleCarrinho)
    divConteudo.appendChild(precoCarrinho)
    divConteudo.appendChild(removerProduto)

    liCarrinho.appendChild(divConteudo)

    ulCarrinho.appendChild(liCarrinho)
    div.appendChild(ulCarrinho)
    boxResumo(listCarrinho)

}

function boxResumo(listCarrinho) {
    let soma = 0

    const divBoxCarrinho = document.querySelector(".boxResumo")

    divBoxCarrinho.innerHTML = ''

    const quantidade = document.createElement('p')
    quantidade.classList = "quantidade"
    quantidade.innerHTML += `Quantidade: ${listCarrinho.length}`

    const valor = document.createElement('p')
    valor.classList = valor

    for (let i = 0; i < listCarrinho.length; i++) {
        soma += listCarrinho[i].value
        valor.innerHTML = `R$ ${soma}`
    }

    divBoxCarrinho.appendChild(quantidade)
    divBoxCarrinho.appendChild(valor)
}

function carrinho(listProdutos) {
    const carrinhoConteudo = document.querySelector(".conteudoInterno")
    carrinhoConteudo.innerHTML = ''
    if (listProdutos.length > 0) {
        for (let i = 0; i < listProdutos.length; i++) {
            gerarConteudoCarrinho(listProdutos[i], i)
        }
    } else {
        gerarCarrinhoVazio()
    }
}


gerarVitrine()
carrinho(listCarrinho)







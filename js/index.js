
let listCarrinho = []
const vitrine = document.getElementById("vitrine")
const div = document.querySelector('.boxCarrinhoConteudo')

function gerarVitrine() {
    for (let i = 0; i < data.length; i++) {
        const productCard = document.createElement('li')
        productCard.classList = "card"

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


        productCard.appendChild(productImg)
        productCard.appendChild(productCategory)
        productCard.appendChild(productTitle)
        productCard.appendChild(productDescription)
        productCard.appendChild(preco)
        productCard.appendChild(p)
        productCard.appendChild(carButton)
        vitrine.appendChild(productCard)
    }

    return vitrine
}

function gerarCarrinhoVazio(){
    const h2carrinho = document.createElement('h2')
    h2carrinho.classList = "conteudoCarrinho"
    h2carrinho.innerHTML = "Carrinho vázio"

    const p = document.createElement('p')
    p.innerHTML = "adicione itens"
    
    div.appendChild(h2carrinho)
    div.appendChild(p)
}

function gerarConteudoCarrinho(){
    console.log('conteudo carrinho teste')
}

document.addEventListener('click', gerarConteudoCarrinho)




gerarVitrine()

if (listCarrinho.length === 0){
    gerarCarrinhoVazio()
}else{
    gerarConteudoCarrinho()
}



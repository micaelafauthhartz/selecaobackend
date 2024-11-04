// Desafio de Seleção para Desenvolvedor Backend

// importando express
const express = require('express')
// criando instância do aplicativo express
const app = express()
// definir rota para o endpoint raiz ('/')
// quando solicitação GET é feita para '/', a função abaixo é executada
app.get('/', function (request, response) {
    // retorna resposta no formato JSON com mensagem de boas-vindas na biblioteca
    return response.json({
        message: 'Essa é a biblioteca do escritor. Uma mente necessita de livros da mesma forma que uma espada necessita de uma pedra de amolar, se quisermos que se mantenha afiada. (George R. R. Martin)'
    })
})
// definindo rota para o endpoint 'books'
// quando solicitação GET é feita para 'books', a função a seguir é executada
app.get('/books', function (request, response) {
    return response.json([
        'Percy Jackson e os Olimpianos - O Ladrão de Raios (Livro 1)',
        'Percy Jackson e os Olimpianos - O Mar de Monstros (Livro 2)',
        'Percy Jackson e os Olimpianos - A Maldição do Titã (Livro 3)'
    ])
})
// definindo rota para criar um novo livro
// quanto solicitação POST é feita para '/books, a função a seguir é executada
app.post('/books', function (request, response) {
    // retorna resposta com lista de livros, incluindo o novo livro
    return response.json([
        'Percy Jackson e os Olimpianos - O Ladrão de Raios (Livro 1)',
        'Percy Jackson e os Olimpianos - O Mar de Monstros (Livro 2)',
        'Percy Jackson e os Olimpianos - A Maldição do Titã (Livro 3)',
        'Percy Jackson e os Olimpianos - A Batalha do Labirinto (Livro 4)'
    ])
})
// definindo rota para atualizar livro específico
// id é um parâmetro de rota
app.put('/books/:id', function (request, response) {
    // retorna resposta com lista de livros atualizada
    return response.json([
        'Percy Jackson e os Olimpianos - O Ladrão de Raios (Livro 1)',
        'Percy Jackson e os Olimpianos - O Mar de Monstros (Livro 2)',
        'Percy Jackson e os Olimpianos - A Maldição do Titã (Livro 3)',
        'Percy Jackson e os Olimpianos - O Último Olimpiano (Livro 5)'
    ])
})
// definindo rota para deletar livro específico
app.delete('/books/:id', function (request, response) {
    // retorna resposta com lista de livros após exclusão
    return response.json([
        'Percy Jackson e os Olimpianos - O Ladrão de Raios (Livro 1)',
        'Percy Jackson e os Olimpianos - A Maldição do Titã (Livro 3)',
        'Percy Jackson e os Olimpianos - O Último Olimpiano (Livro 5)'
    ])
})
// iniciando servidor na porta 5000 (orientar no terminal que o servidor foi inciado)
app.listen(5000, () => {
    console.log('Servidor iniciado na porta 5️⃣ 0️⃣ 0️⃣ 0️⃣')
})

// navegador - http://localhost:5000
// postman GET - http://localhost:5000
// postman POST - http://localhost:5000/books
// postman PUT - http://localhost:5000/books/:id
// postman DELETE - http://localhost:5000/books/:id
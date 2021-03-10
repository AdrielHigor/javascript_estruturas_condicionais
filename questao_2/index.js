let user = [
    {
        id: 1,
        username: 'adriel',
        password: '123'
    }
]

let username = 'adrielhigor'
let password = '1234'

for ( let i = 0; i < user.length; i++ ){
    if (user[i].username == username && user[i].password == password){
        console.log('login feito com sucesso!')
    } else if (user[i].username == username && user[i].password !== password){
        console.log('Senha está incorreta')
    } else {
        console.log('Que não existe usuário com esse nome')
    }
}
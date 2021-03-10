let users = [
    {
        id: 1,
        username: 'Adriel',
        idade: 4
    },
    {
        id: 2,
        username: 'William',
        idade: 80
    },
    {
        id: 3,
        username: 'Guilherme',
        idade: 20
    },
    {
        id: 4,
        username: 'Nicolas',
        idade: 35
    }
]

for (let i = 0; i < users.length; i++){
    if (users[i].idade < 5 || users[i].idade > 70){
        console.log(users[i])
    }
}
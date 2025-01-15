const user = {
    name: 'Veronika',
    age: 17,
    movie: "Pulp Fiction"
}

for(let key in user) {
    console.log(`${key} : ${user[key]}`)
}

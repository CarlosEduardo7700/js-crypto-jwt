import jwt from 'jsonwebtoken'

const chaveSecreta = 'chaveSeperSecreta'

const token = jwt.sign(
    {
        apelido: "CEMS",
        curso: "Node com Security"
    }, chaveSecreta
)

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta)

console.log(tokenDecodificado)
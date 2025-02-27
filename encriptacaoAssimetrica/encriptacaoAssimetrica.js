import { generateKeyPairSync } from "crypto"

const {privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    }
})

// console.log(privateKey)
// console.log(publicKey)

import { publicEncrypt, privateDecrypt } from "crypto"

// Enviando a msg

const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from("Mensagem Secreta")
)

console.log(dadosCriptografados.toString('hex'))

// Recebendo a msg

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
)

console.log(`Dados decifrados: ${dadosDecifrados.toString('utf-8')}`)

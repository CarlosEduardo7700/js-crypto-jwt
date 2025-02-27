import { createCipheriv, randomBytes, createDecipheriv } from 'crypto'

const mensagem = 'Mensagem Secreta'
const chave = randomBytes(32)
const vetorDeInicializacao = randomBytes(16)

const cifra = createCipheriv('aes256', chave, vetorDeInicializacao)

const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex')
console.log(mensagemCifrada)

// Transmissão --------------------------------- chave, vetorDeInicializacao, mensagem

// Decifrar a mensagem

const decifra = createDecipheriv('aes256', chave, vetorDeInicializacao)

const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8')

console.log(`Decifrado: ${mensagemDecifrada.toString('utf-8')}`)


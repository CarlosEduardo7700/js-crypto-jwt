import { createHash } from 'crypto'

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash("Senha Difícil"))

class Usuario {
    constructor(nome, senha) {
        this.nome = nome
        this.hashDaSenha = criaHash(senha)
    }

    autentica(nome, senha) {
        if (nome === this.nome && this.hashDaSenha === criaHash(senha)) {
            console.log("Usuário autenticado com sucesso!")
            return true
        } else {
            console.log("Usuário ou senha inválidos!")
            return false
        }
    }
}

const usuario = new Usuario("Eduardo", "Senha bem difícil")
console.log(usuario)

// Caso de sucesso
usuario.autentica("Eduardo", "Senha bem difícil")

// Caso de fracasso
usuario.autentica("Carlos", "senha bem difícil")
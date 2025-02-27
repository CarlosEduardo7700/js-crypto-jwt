import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'

function criaHashComSal(senha) {
    const sal = randomBytes(16).toString('hex')
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex')

    return `${sal}:${senhaHasheada}`
}

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(":")
    }

    autentica(nome, senha) {
        if (nome === this.nome) {
            const testeHash = scryptSync(senha, this.sal, 64)
            const hashReal = Buffer.from(this.hash, 'hex')

            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)

            if (hashesCorrespondem) {
                console.log("Usuário autenticado com sucesso!")
                return true
            } else {
                console.log("Senha incorreta!")
                return false
            }
        } else {
            console.log("Usuário incorreto!")
            return false
        }
    }
}

const usuario = new Usuario("Eduardo", "Senha@Secreta")

console.log(usuario)

// Caso de Sucesso
usuario.autentica("Eduardo", "Senha@Secreta")

// Casos de Fracasso
usuario.autentica("Carlos", "senha@secreta")
usuario.autentica("Eduardo", "senha@secreta")
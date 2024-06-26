import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

    procurarPorTitular(titular: string) {
        let listaContasPorTitular = this.listaContas.filter( c =>
            c.titular.toUpperCase().includes(titular.toUpperCase()))

        for ( let conta of listaContasPorTitular){
            conta.visualizar();
        }
    }


    private listaContas: Array<Conta> = new Array<Conta>();

    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null)
            buscaConta.visualizar()
        else
            console.log("\nConta não Encontrada!")
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A Conta foi adicionada!")
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);
        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(`A Conta número ${conta.numero} foi Atualizada com sucesso!`)
        } else
            console.log("\nConta não foi Encontrada!")
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1)
            console.log(`A Conta número ${numero} foi Excluída com sucesso!`)
        } else
            console.log("\nConta não foi Encontrada!")
    }

    sacar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            if (buscaConta.sacar(valor) === true)
                console.log(`O Saque na Conta número ${numero} foi realizado com Sucesso!`)
        } else
            console.log("\nConta não foi Encontrada!")
    }

    depositar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.depositar(valor)
            console.log(`Seu Deposito na Conta número ${numero} foi realizado com sucesso!`)
        } else
            console.log("\nConta não foi Encontrada!")
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {

        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem !== null && contaDestino !== null) {
            if (contaOrigem.sacar(valor) === true) {
                contaDestino.depositar(valor)
                console.log(`A Transferencia da conta ${numeroOrigem} para a conta ${numeroDestino} 
                    foi realizada com sucesso!`)
            }

        } else
            console.log("\nConta de Origem e/ou a Conta de Destino não foram Encontradas!")
    }


    // metodo para gerar um número para uma nova conta
    public gerarNumero(): number {
        return ++this.numero
    }

    // metodo para procurar uma conta pelo numero
    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }

        return null;
    }
}
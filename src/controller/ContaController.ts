import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    procurarPorTitular(titular: string) {
        let listaContasPorTitular = this.listaContas.filter(c =>
            c.titular.toUpperCase().includes(titular.toUpperCase()))

        for (let conta of listaContasPorTitular) {
            conta.visualizar();
        }
    }


    // Collection Array que aramzenará os Objetos das Classes
    // ContaCorrente e ContaPoupanca
    private listaContas: Array<Conta> = new Array<Conta>();
    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null)
            buscaConta.visualizar()
        else
            console.log("\nConta não foi encontrada!")
    }


    // Collection Array que aramzenará os Objetos das Classes
    // ContaCorrente e ContaPoupanca
    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }
    
    // Método para adicionar Objetos das Classes 
    // ContaCorrente e ContaPoupanca
    // na Collection listaContas
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A Conta foi adicionada!");
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero)

        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(A conta número ${ conta.numero } foi atualizada com sucesso!)
        } else
            console.log("\nConta não foi encontrada!")
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1) // o 1 serve para apagar apenas ele, se colocasse 2 por exemplo, apagaria ele e o próximo
            console.log(A conta número ${ numero } foi excluída com sucesso!)
        } else
            console.log("\nConta não foi encontrada!")
    }

    public sacar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {

            if (buscaConta.sacar(valor) === true)
                console.log(colors.fg.green, "\nO Saque na Conta numero: " + numero +
                    " foi efetuado com sucesso!", colors.reset);

        } else
            console.log(colors.fg.red, "\nA Conta numero: " + numero +
                " não foi encontrada!", colors.reset);

    }
  
    public depositar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.depositar(valor);
            console.log(colors.fg.green, "\nO Depósito na Conta numero: " + numero +
                " foi efetuado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + numero +
                " não foi encontrada!", colors.reset);
    }

    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            if (contaOrigem.sacar(valor) == true) {
                contaDestino.depositar(valor);
                console.log(colors.fg.green, "\nA Transferência da Conta numero: " + numeroOrigem +
                    " para a Conta numero: " + numeroDestino + " foi efetuada com sucesso!",
                    colors.reset);
            }

        } else
            console.log(colors.fg.red, "\nA Conta numero: " + numeroOrigem +
                " e/ou a Conta numero: " + numeroDestino + " não foram encontradas!",
                colors.reset);
    }

    //Métodos Auxiliares

    public gerarNumero(): number {
        return ++this.numero;
    }

    /Checa se uma Conta existe/
    public buscarNoArray(numero: number): Conta | null {

    for (let conta of this.listaContas) {
        if (conta.numero === numero)
            return conta;
    }

    return null;
}

}
import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    //Classe ContaController
    const contas: ContaController = new ContaController();

    // Classe Conta Corrente
    // Adicionada na Collection listaContas
    const contaCorrente: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 665, 1, "Fulano", 2500, 1000)
    contas.cadastrar(contaCorrente);

    // Classe ContaPoupanca
    // Adicionada na Collection listaContas
    const contaPoupanca: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 666, 2, "Beltrano", 1500, 10);
    contas.cadastrar(contaPoupanca);

    while (true) {

        console.log(colors.bg.blue, colors.fg.whitestrong,
                    "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("                                                                               ");
        console.log(" .d8888b.                           888888b.                     888           ");
        console.log("d88P  Y88b                          888  \"88b                    888          ");
        console.log("Y88b.                               888  .88P                    888           ");
        console.log(" \"Y888b.    8888b.  88888b.         8888888K.   8888b.  88888b.  888  888     ");
        console.log("    \"Y88b.     \"88b 888 \"88b        888  \"Y88b     \"88b 888 \"88b 888 .88P");
        console.log("      \"888 .d888888 888  888 888888 888    888 .d888888 888  888 888888K      ");
        console.log("Y88b  d88P 888  888 888  888        888   d88P 888  888 888  888 888 \"88b     ");
        console.log(" \"Y8888P\"  \"Y888888 888  888        8888888P\"  \"Y888888 888  888 888  888 ");
        console.log("                                                                               ");
        console.log("                    * Provando que dinheiro, traz felicidade! *                ");
        console.log("                                                                               ");
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("                                                                               ");
        console.log("                         1 - Criar Conta                                       ");
        console.log("                         2 - Listar todas as Contas                            ");
        console.log("                         3 - Buscar Conta por Numero                           ");
        console.log("                         4 - Atualizar Dados da Conta                          ");
        console.log("                         5 - Apagar Conta                                      ");
        console.log("                         6 - Sacar                                             ");
        console.log("                         7 - Depositar                                         ");
        console.log("                         8 - Transferencia de Valor                            ");
        console.log("                         9 - Buscar Conta por Titular                                              ");
        console.log("                         0 - Sair                                              ");
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("                                                                               ",
            colors.bg.blue );

        console.log(colors.bg.white, colors.fg.bluestrong, "Escolha uma opção entre 1 a 9 ou '0' para SAIR:");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.bg.blue, colors.fg.white,
                "\nSan-Bank - Provando que dinheiro, traz felicidade! ($_$) " );
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.bg.blue, colors.fg.white,
                    "\n\nCriar Conta\n\n", colors.bg.blue);

                console.log(colors.bg.blue, colors.fg.white,
                    "\nQual é o Numero da Agencia: ")           
                agencia = readlinesync.questionInt("")

                console.log(colors.bg.blue, colors.fg.white,
                    "\nE o Nome do Titular? ")             
                titular = readlinesync.question("")

                console.log(colors.bg.blue, colors.fg.white,
                    "\nInforme o tipo da Conta: ")              
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1

                console.log(colors.bg.blue, colors.fg.white,
                    "\n Digite SALDO da conta que deseja a portabilidade: ")   
                saldo = readlinesync.questionFloat("")

                switch (tipo) {
                    case 1:
                        console.log(colors.bg.blue, colors.fg.white,
                            "\nDigite o Limite da Conta: ") 
                        limite = readlinesync.questionFloat("")
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        )
                        break;
                    case 2:
                        console.log(colors.bg.blue, colors.fg.white,
                            "\nDigite o dia do aniversário da Conta: ")
                        aniversario = readlinesync.questionInt("")
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.bg.white, colors.fg.bluestrong,
                    "\n\nListar todas as Contas\n\n", colors.bg.white);

                // Chamada do Método listarTodas() da Classe ContaController
                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.bg.blue, colors.fg.white,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                console.log(colors.bg.blue, colors.fg.white,
                    "\nDigite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.bg.white, colors.fg.bluestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                console.log(colors.bg.blue, colors.fg.white,
                "\nDigite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                let conta = contas.buscarNoArray(numero)

                if (conta !== null) {

                    console.log(colors.bg.blue, colors.fg.white,
                    "\nDigite o Número da Agência: ")
                    agencia = readlinesync.questionInt("")

                    console.log(colors.bg.blue, colors.fg.white,
                    "\nDigite o Nome do Titular: ")
                    titular = readlinesync.question("")

                    tipo = conta.tipo

                    console.log(colors.bg.blue, colors.fg.white,
                        "\nDigite o Saldo da Conta: ")
                    saldo = readlinesync.questionFloat("")

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da Conta: ")
                            limite = readlinesync.questionFloat("")
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            )
                            break;
                        case 2:
                            console.log("Digite o dia do aniversário da Conta: ")
                            aniversario = readlinesync.questionInt("")
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            )
                            break;
                    }

                } else {
                    console.log(colors.bg.redbright, colors.fg.whitestrong, 
                        "\n\nA Conta não foi Encontrada!", colors.reset);
                }

                keyPress()
                break;
            case 5:
                console.log(colors.bg.blue, colors.fg.white,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                console.log(colors.bg.blue, colors.fg.white,
                "\nDigite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                contas.deletar(numero);

                keyPress()
                break;
            case 6:
                console.log(colors.bg.white, colors.fg.bluestrong,
                    "\n\nSaque\n\n", colors.bg.white);

                console.log(colors.bg.white, colors.fg.bluestrong,
                "\nDigite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                console.log(colors.bg.white, colors.fg.bluestrong,
                "\nDigite o valor do Saque: ")
                valor = readlinesync.questionFloat("")

                contas.sacar(numero, valor);

                keyPress()
                break;
            case 7:
                console.log(colors.bg.white, colors.fg.bluestrong,
                    "\nDepósito\n\n", colors.bg.blue);

                console.log(colors.bg.white, colors.fg.bluestrong,
                "\nDigite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                console.log(colors.bg.white, colors.fg.bluestrong,
                "\nDigite o valor do Depósito: ")
                valor = readlinesync.questionFloat("")

                contas.depositar(numero, valor);

                keyPress()
                break;
            case 8:
                console.log(colors.bg.blue, colors.fg.white,
                    "\n\nTransferência entre Contas\n\n", colors.bg.white);

                console.log(colors.bg.blue, colors.fg.white,
                "\nDigite o Número da Conta de Origem: ")
                numero = readlinesync.questionInt("")

                console.log("Digite o Número da Conta de Destino: ")
                numeroDestino = readlinesync.questionInt("")

                console.log("Digite o valor do Depósito: ")
                valor = readlinesync.questionFloat("")

                contas.transferir(numero, numeroDestino, valor);

                keyPress()
                break;
            case 9:
                console.log(colors.bg.blue, colors.fg.white,
                    "\n\nConsultar conta por titular\n\n", colors.bg.blue);

                console.log("Digite o Nome do Titular: ")
                titular = readlinesync.question("")

                contas.procurarPorTitular(titular);

                keyPress();
                break;
                
            default:
                console.log(colors.bg.redbright, colors.fg.white,
                    "\nOpção Inválida!\n", colors.bg.redbright);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
              ("\n******************************************************");
    console.log("Projeto Desenvolvido por: Filipe Santiago              ");
    console.log("Email para o contato- work.frodrigues@gmail.com        ");
    console.log("https://github.com/DEVnaoCry #Nemétãofacil¯\_(ツ)_/¯ ");
    console.log("*******************************************************");
}

function keyPress(): void {
    console.log(colors.bg.blue, colors.fg.white, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./src/util/Model.ts/Conta";
import { ContaCorrente } from "./src/util/Model.ts/ContaCorrente";

export function main() {

    let opcao: number;

    //Instanciando um novo objeto da Classe Conta.
    //console.log("\nCriar o objeto da Classe Conta")
    //let c1: Conta = new Conta(1,123, 1, "Fulano", 40000);

    //visualizando todos o dados da conta criada
    //c1.visualizar();

    //console.log("\nAlterar o Saldo para  R$ 450000")
    //c1.set_saldo(450000) = modificação de saldo


    //console.log(c1.get_saldo()); = recuperando valor do Saldo


    //c1.sacar(500);
    //c1.visualizar();

    //c1.depositar(75)
    //.visualizar();

    const cc1: ContaCorrente = new ContaCorrente(2, 669, 1, "Jalam Bipal", 66600000000, 1000000);
    cc1.visualizar();

    cc1.sacar(100000)

    cc1.visualizar();

    cc1.depositar(850);

    cc1.visualizar();

    while (true) {

        console.log(colors.bg.yellow, colors.fg.greenstrong,
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
        console.log("                         9 - Sair                                              ");
        console.log("                                                                               ");
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("                                                                               ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.bg.black, colors.fg.yellow,
                "\nSan-Bank - Provando que dinheiro, traz felicidade!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.bg.black, colors.fg.yellow,
                    "\n\nCriar Conta\n\n", colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.bg.black, colors.fg.yellow,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.bg.black, colors.fg.yellow,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.bg.black, colors.fg.yellow,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.bg.black, colors.fg.yellow,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.bg.black, colors.fg.yellow,
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.bg.black, colors.fg.yellow,
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.bg.black, colors.fg.yellow,
                    "\n\nTransferencia de Valor\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.bg.black, colors.fg.yellow,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log(colors.bg.black, colors.fg.green,

        "\n******************************************************");
    console.log("Projeto Desenvolvido por: Filipe Santiago              ");
    console.log("Email para o contato- work.frodrigues@gmail.com        ");
    console.log("https://github.com/DEVnaoCry                           ");
    console.log("*******************************************************");


}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
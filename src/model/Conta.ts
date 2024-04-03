export abstract class Conta {

    // Atributos da Classe Conta
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // Método Construtor - Instanciar um novo Objeto da Classe Conta
    constructor(_numero: number, _agencia: number, _tipo: number, _titular: string, _saldo: number) {
        this._numero = _numero;
        this._agencia = _agencia;
        this._tipo = _tipo;
        this._titular = _titular;
        this._saldo = _saldo;
    }

    // Métodos Get e Set - Responsáveis por recuperar (get) e 
    // alterar (set) os dados dos atributos

    /**
     * Getter numero
     * @return {number}
     */
    public get numero(): number {
        return this._numero;
    }

    /**
     * Getter agencia
     * @return {number}
     */
    public get agencia(): number {
        return this._agencia;
    }

    /**
     * Getter tipo
     * @return {number}
     */
    public get tipo(): number {
        return this._tipo;
    }

    /**
     * Getter titular
     * @return {string}
     */
    public get titular(): string {
        return this._titular;
    }

    /**
     * Getter saldo
     * @return {number}
     */
    public get saldo(): number {
        return this._saldo;
    }

    /**
     * Setter numero
     * @param {number} value
     */
    public set numero(value: number) {
        this._numero = value;
    }

    /**
     * Setter agencia
     * @param {number} value
     */
    public set agencia(value: number) {
        this._agencia = value;
    }

    /**
     * Setter tipo
     * @param {number} value
     */
    public set tipo(value: number) {
        this._tipo = value;
    }

    /**
     * Setter titular
     * @param {string} value
     */
    public set titular(value: string) {
        this._titular = value;
    }

    /**
     * Setter saldo
     * @param {number} value
     */
    public set saldo(value: number) {
        this._saldo = value;
    }


    // Método Sacar
    public sacar(valor: number): boolean {

        if (this._saldo >= valor) {
            this._saldo = this._saldo - valor;                  
            return true;
        }

        console.log("\nSaldo insuficiente!");
        return false;

    }

    // Método Depositar
    public depositar(valor: number): void {
        this._saldo = this._saldo + valor; 
    }

    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança";
                break;
        }

        console.log("\n*****************************************************");
        console.log("Dados da Conta: ");
        console.log("***************************************************** ");
        console.log(`Número da conta: ${this._numero}`);

        console.log(`Número da agência: ${this._agencia}`);

        console.log(`Tipo da conta: ${tipo}`);

        console.log(`Titular da conta: ${this._titular}`);

        console.log(`Saldo da conta: ${this._saldo}`);
    }
}
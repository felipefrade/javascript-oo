//Declarando a classe Cliente com suas propriedades:
class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;
    //#saldo significa que esse atributo é privado. Por enquanto usaremos _saldo. Link: https://github.com/tc39/proposal-class-fields#private-fields

    //Métodos
    sacar(valor) {
        if (this._saldo >=valor) {
            this._saldo -= valor;
            return valor; //Para devolver o valor da operação devemos sempre utilizar o return. O return interrompe a execução da função
        }
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }
}

//Criando objetos (cliente1 e 2) do tipo Cliente:
//Os clientes1 e 2 são instâncias da classe Cliente
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

//Instanciando uma conta corrente e definindo seus valores
const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

//Realizando operações através dos métodos
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

//Valor final da conta
console.log(contaCorrenteRicardo);

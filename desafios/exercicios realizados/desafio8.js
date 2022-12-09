/* 1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um Gasto Medio de Combustivel por KM.
    Crie um metodo que dado a quantidade de quilometros e o preco do combustivel nos de o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKM;


    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca; 
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcularGastoDePercurso(precoCombustivel, distanciaEmKm){
        return distanciaEmKm * this.gastoMedioPorKM * precoCombustivel;
    }

}

const uno = new Carro('Fiat','Prata', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));

// y esperado com o resultado que saiu comparado com quantas interacoes rodaram,
// me retorna o taxa e acerto e erro

// this.sigmoid = function(sumSum) {
//   return 1 / (1 + Math.exp(1 * -sumSum));
// };

class Perceptron {
  constructor(entries) {
    this.bias = 1; //COLOCAR UM VALOR RANDOMICO ENTRE -1 E 1 = Math.floor(Math.random() * 3) - 1;
    this.weights = [];
    this.learnRate = 0.2;
    this.interactions = 1000;

    for (let i = 0; i < entries; i++) {
      this.weights[i] = Math.random() * 2 - 1;
      console.log(`Peso ${i}: ${this.weights[i]}`);
    }
  }

  calc(inputs) {
    let sum = this.bias * this.weights[0];

    for (let i = 0; i < this.weights.length - 1; i++) {
      sum += inputs[i] * this.weights[i + 1];
    }

    return this.activationSum(sum);
  }

  activationSum = function(sum) {
    return sum >= 0 ? 1 : 0
  };

  train(inputs, outputs) {
    let hasError = true;
    let interactions = 0;
    let errorDifference = 0;

    while (hasError && interactions < this.interactions) {
      console.log(`***Interação: ${interactions}`);

      hasError = false;

      for (let i = 0; i < inputs.length; i++) {
        const result = this.calc(inputs[i]);

        console.log(`Entradas: *1,${inputs[i]}`);
        console.log(`Desejado: ${outputs[i]}`);
        console.log(`Saída: ${result}`);

        errorDifference = outputs[i] - result;

        if (errorDifference !== 0) hasError = true;

        console.log(`Erro: ${outputs[i]} - ${result} = ${errorDifference}`);
        console.log(`*Tem erro: ${hasError}`);

        // this.recalcWeights(errorDifference, inputs[i]);
        this.weights[0] = this.weights[0] + (this.learnRate * errorDifference * this.bias);

        console.log(`*Peso ${0}: ${this.weights[0]}`);

        for (let j = 0; j < this.weights.length - 1; j++) {
          this.weights[j + 1] =
            this.weights[j + 1] + (this.learnRate * errorDifference * inputs[i][j]);

          console.log(`*Peso ${j + 1}: ${this.weights[j + 1]}`);
        }
      }

      console.log("-------------------");
      interactions++;
    }
  }
}

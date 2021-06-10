import colecaoSignos from './dados/arquivo.js';
import retorna_signo from './funcoes/funcoes.js';

let data_app = new Date();

const nome_signo = retorna_signo(colecaoSignos, data_app);

console.log("O signo do dia é: " + nome_signo);
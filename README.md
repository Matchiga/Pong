# Pong

## Introdução 

Criar o jogo pong com o 2 linguagens de programção, Scratch e JavaScript.

Caso não saiba o significado de pong:
https://pt.wikipedia.org/wiki/Pong

### Criação do jogo Pong

**Primeiro Passo:**
 - Basicamente para entender como funciona a montagem do jogo, precisa saber o que irá fazer.

- Então de primeiro caso com o Projeto iniciado do zero, iremos criar os "atores" e o "cenário", sendos os atores: "bola","minhaRaquete", "raqueteOponente", e para o cenário, um fundo com alguma cor ou imagem de própria escolha.

>OBS: Os "atores" que forem adicionados, devem ser sempre centralizados e modificados para desecentralizar somente  na hora de arrumar o código. 

**Movimentação:**

Bola:
- Para movimentção acontecer devo informar o quanto a bola deve se mover e o ângulo inicial.

MinhaRaquete:
 - Precisamos inserir um comando para ela se movimentar somente verticalmente, então inserimos que no se eu clicar para cima ela se movimenta no eixo vertical para cima e das mesma forma acontece para baixo.

 RaqueteOponente:
 - Para acontecer uma movimentação da raqueteOponente ela não pode receber comandos, então ela tem que saber qual é o eixo vertical que a bola está seguindo e tentar defender a sua borda. Para isso adicionamos uma variável ao eixo Y da Bola para que todos os atores cosigam a ver, inserimos essa variável dentro da movimentação da raqueteOponente e também inserimos dentro do Evento da movimentação da bola.

 Colisão:   
 - Para a bola não seguir somente uma direção, inserir que ao tocar nas bordas ela volte.
 - Para bola não passar por cima das raquetes é necessário adicionar o comando de colisão, toda vez que a bolinha encostar na raquete irá acontecer uma operação E ela irá para o lado oposto.
 - E para a pontuação, todas as vezes que a bola enconstar na borda ela irá marcar um ponto, é necessário criar uma variável com placar e adicionar aos eventos que ao tocar na borda irá conta um ponto para um dos "players"


**Projeto:** 
https://scratch.mit.edu/projects/706474053/
https://editor.p5js.org/Shiganhiga/sketches/J14-5ctzh
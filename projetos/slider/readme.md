Este código JavaScript controla a exibição de imagens em um contexto onde há três imagens numeradas de 1 a 3. Vamos resumir as principais funcionalidades:

Variável imagemAtual:

Inicializada com o valor 1, indicando que inicialmente a primeira imagem está destacada.
Função destacarImagem():

Utilizada para destacar a imagem atual e definir a opacidade das outras imagens.
Um loop percorre as imagens de 1 a 3.
Se o índice do loop (i) for igual à imagemAtual, a opacidade é definida como 1 (imagem destacada).
Para outras imagens, a opacidade é definida como 0.3.
Função avancar():

Incrementa imagemAtual para avançar para a próxima imagem.
Se imagemAtual ultrapassar 3, ela é ajustada para 1, voltando à primeira imagem.
Chama a função destacarImagem() para refletir a mudança.
Função retornar():

Decrementa imagemAtual para retornar à imagem anterior.
Se imagemAtual for menor que 1, ela é ajustada para 3, indo para a última imagem.
Chama a função destacarImagem() para refletir a mudança.
Inicialização:

Chama a função destacarImagem() inicialmente para garantir que a imagem inicial seja destacada.
Essencialmente, este código fornece um mecanismo simples para percorrer um conjunto de três imagens, avançando ou retornando entre elas. Cada vez que uma imagem é destacada, as opacidades das outras são ajustadas para indicar visualmente a imagem ativa.
Projeto Pokédex

<a href="">Página do Projeto</a>

Front End consumindo API https://pokeapi.co/

O projeto é uma Pokédex, objeto utilizado no mundo da animação Pokémon para pesquisar informações sobre pokémons. 
No topo tem o título do projeto e um link que vai abrir um modal explicando ao usuário como utilizar o projeto.
Ao passar o mouse sobre a tampa da pokédex, acontece um flip, abrindo a interface interna da pokedex.
Pode ser buscado um pokemón pelo nome ou pelo número, que pode ser entre 1 e 649.
Na API existem mais de 649 pokémons cadastrados, entretanto, a partir deste número, a maioria dos pokémons está sem imagem, frustrando a experiência do usuário.
Para que não seja enviado um número fora do intervalo, implementei uma verificação simples que dispara um alerta.

Para telas grandes de desktop, a tampa do pokédex abre totalmente. Em telas menores, a tampa do pokédex abre menos e o pokédex se ajusta para melhor visualização pelo usuário.

Feito em HTML, CSS e Javascript puro.

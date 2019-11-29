# Grid works

Esse repo é uma lembrança para brincar com Grid (feita em Svelte) que possui algumas considerações conforme fui estudando sobre:

Pra rodar:

- clonar
- `yarn`
- `yarn dev`

Esse doc vai ser atualizado conforme for manjando mais das props, mas acho que já é o bastante para montar a maioria das interfaces gráficas.

## Best practices

Basicamente, usar `grid-template-areas`, `grid-template-rows` e `grid-template-columns` para montar seu grid mentalmente. Ai só ligar as coisas com o `grid-area` no componente filho.

```css
/**
  Corpo que contêm o grid e pega a página inteira
*/
#body {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

/**
  Definição do grid
*/
main {
  margin: 20px;
  display: grid;
  /**
    Página de cadastro
  */
  grid-template-areas:
    "name name surname surname"
    "email email email button"
    "address address address number"
    "password password password password"
    "ok ok ok ok";

  /**
    Espaçamento entre linhas e colunas
  */
  grid-row-gap: 10px;
  grid-column-gap: 20px;

  /** 
    Tamanho das linhas e colunas
  */
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows:
    40px
    40px
    40px
    40px
    40px;
}

/**
  Definição de um componente que vai tomar metade da primeira linha
*/
#name {
  grid-area: name;
}
```

Eu preferi utilizar dessa forma pois fica separado o bastante assim como visual (na parte do `template-areas`) o bastante manter a manutenção do grid.

## Fazendo overlap

Basicamente, definir um grid, deixar umas colunas a mais com template, e usar só o component do overlap com `grid-row` e `grid-column`

```css
/* Definir corpo do overlap */
#overlap-1 {
  display: grid;

  grid-template-areas:
    "d d d d"
    "a a a a"
    "b b b b"
    "c c c c";

  grid-template-columns: repeat(4, minmax(0, 50px));
  grid-template-rows: repeat(4, minmax(0, 50px));
  border-radius: 20px;
  overflow: hidden;

  box-shadow: 0 3px 0px rgba(0, 0, 0, 0.16), 0 3px 0px rgba(0, 0, 0, 0.23);
}

/* filhos com template-area */

#overlap-a {
  grid-area: a;
  background-color: red;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
#overlap-b {
  grid-area: b;
  background-color: green;
}
#overlap-c {
  grid-area: c;
  background-color: blue;
}

/* circulo em cima de x filhos, com margin pra ficar menor que o tamanho da linha */
#overlap-circle {
  grid-row: 1 / 3;
  grid-column: 2 / 4;
  background-color: grey;
  opacity: 0.5;
  border-radius: 100px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 15px;
}
```

## Paus & Soluções

### Padding em grid:

```css
#body {
  /**
    Cria um corpo superior
  */
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

main {
  /**
    Coloca margin no teu grid
  */
  margin: 20px;
  display: grid;
}
```

### Problemas do grid ficando maior que a tela em celulares:

É problema relacionado ao meta no index.html, setar o meta para:

```html
<!-- Não brincar com scale -->
<head>
  <meta name="viewport" content="width=device-width" />
</head>
```

### Último componente do grid (col) não ficando menor que X tamanho

Esse foi o que mais me fodeu, mas depois de uma caça incessante achei:
[essa resposta](https://stackoverflow.com/questions/43311943/prevent-content-from-expanding-grid-items) que me levou a [essa](https://stackoverflow.com/questions/52861086/how-come-minmax0-1fr-works-for-long-elements-while-1fr-doesnt)

No final, o código que importa é:

```css
/**
  minmax(0, 1fr) é o importante no lugar de só 1fr
*/
grid-template-columns: repeat(4, minmax(0, 1fr));
```

## Código da página completo

```html
<script></script>

<style>
  #body {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }

  main {
    margin: 20px;
    display: grid;
    grid-template-areas:
      "name name surname surname"
      "email email email button"
      "address address address number"
      "password password password password"
      "ok ok ok ok";

    grid-row-gap: 10px;
    grid-column-gap: 20px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows:
      40px
      40px
      40px
      40px
      40px;
  }

  #name {
    grid-area: name;
  }

  #surname {
    grid-area: surname;
  }

  #email {
    grid-area: email;
  }

  #address {
    grid-area: address;
  }

  #number {
    grid-area: number;
  }

  #password {
    grid-area: password;
  }

  #button {
    grid-area: button;
  }

  #ok {
    grid-area: ok;
  }
</style>

<div id="body">
  <main>
    <input id="name" placeholder="nome" />
    <input id="surname" placeholder="sobrenome" />
    <input id="email" placeholder="email" />
    <input id="address" placeholder="endereço" />
    <input id="number" placeholder="número" />
    <input id="password" placeholder="senha" />

    <button id="button">Ok</button>
    <button id="ok">Salvar</button>
  </main>
</div>
```

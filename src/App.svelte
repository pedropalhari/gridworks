<script>

</script>

<style>
  #body {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

  #overlapBody {
    margin-top: 50px;
  }

  #overlap-1 {
    display: grid;

    grid-template-areas:
      ". d d . ."
      "a a a a ."
      "b b b b ."
      "c c c c .";

    grid-template-columns: repeat(5, minmax(0, 50px));
    grid-template-rows: repeat(4, minmax(0, 50px));
    border-radius: 20px;
    overflow: hidden;
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
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  #overlap-circle {
    /* inicial linha, inicial coluna */
    /* final linha, final coluna (intervalo aberto)*/
    grid-area: d / d / a / d;

    background-color: grey;
    opacity: 0.5;
    border-radius: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 15px;
  }
  #overlap-x {
    /* por números */
    grid-area: 1 / 4 / 3 / 6;
    background-color: black;
    border-radius: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 30px;
    margin-right: 40px;
    margin-top: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
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

  <div id="overlapBody">
    <div id="overlap-1">

      <div id="overlap-a" />
      <div id="overlap-b" />
      <div id="overlap-c" />

      <div id="overlap-circle" />

      <div id="overlap-x">x</div>
    </div>
  </div>
</div>

<script>

</script>

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

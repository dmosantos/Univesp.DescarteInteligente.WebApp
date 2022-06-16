<script setup>



</script>

<template>
    <form class="new-point">

        <h2 class="title">Cadastrar novo ponto de coleta</h2>

        <label for="name" class="label">Nome:</label>
        <input id="name" class="field" type="text" placeholder="Nome do ponto de coleta" required />

        <label for="address" class="label">Endereço:</label>
        <input id="address" class="field" type="text" placeholder="Endereço completo do ponto de coleta" required />

        <label for="phonenumber" class="label">Telefone:</label>
        <input id="phonenumber" class=" field" type="text" placeholder="(00) 00000-0000" />

        <button class="button" type="submit">Cadastrar</button>

    </form>
</template>

<style lang="scss" scoped>

.new-point {

    margin: 0 auto 5rem auto;
    max-width: 600px;

}

.title {

    color: #fff;
    margin: 0 0 2rem 0;
    text-align: center;

}

.label {

    color: #fff;
    display: block;
    margin-bottom: .3rem;

}

.field {

    border: 0 none;
    border-radius: 3px;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 100%;

}

.button {

    background: transparent;
    border: 3px solid #fff;
    border-radius: 3rem;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 1.2rem;
    font-weight: 700;
    margin: 1rem auto 0 auto;
    padding: 1rem 2rem;
    text-transform: uppercase;

    &:hover {

        background-color: #fff;
        color: var(--theme-color);

    }

}

</style>
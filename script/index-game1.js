 document.addEventListener("DOMContentLoaded", () => {
    const poke = document.querySelector(".poke");
    const telapkm = document.querySelector(".telapkm");

    poke.addEventListener("click", () => {

        // Posição da pokebola (centro)
        const pokeRect = poke.getBoundingClientRect();
        const pokeCenterX = pokeRect.left + pokeRect.width / 2;
        const pokeCenterY = pokeRect.top + pokeRect.height / 2;

        // Posição da tela (centro)
        const telaRect = telapkm.getBoundingClientRect();
        const telaCenterX = telaRect.left + telaRect.width / 2;
        const telaCenterY = telaRect.top + telaRect.height / 2;

        // Diferença entre os centros
        const deslocamentoX = telaCenterX - pokeCenterX;
        const deslocamentoY = telaCenterY - pokeCenterY;

        // Aplicar movimento
        poke.style.transform = `translate(${deslocamentoX}px, ${deslocamentoY}px) rotate(360deg)`;
        poke.classList.add("atirar");

        // Voltar para o lugar depois do movimento
        setTimeout(() => {
            poke.style.transform = "translate(0, 0)";
            poke.classList.remove("atirar");
        }, 500); // mesmo valor do transition
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const poke = document.querySelector(".poke");
    const telapkm = document.querySelector(".telapkm");
    const pokemon = document.querySelector(".pokemon");

    poke.addEventListener("click", () => {

        // Posição da pokebola (centro)
        const pokeRect = poke.getBoundingClientRect();
        const pokeCenterX = pokeRect.left + pokeRect.width / 2;
        const pokeCenterY = pokeRect.top + pokeRect.height / 2;

        // Posição da tela (centro)
        const telaRect = telapkm.getBoundingClientRect();
        const telaCenterX = telaRect.left + telaRect.width / 2;
        const telaCenterY = telaRect.top + telaRect.height / 2;

        // Diferenças
        const deslocamentoX = telaCenterX - pokeCenterX;
        const deslocamentoY = telaCenterY - pokeCenterY;

        // Atira pokebola
        poke.style.transition = "transform 0.5s ease-out";
        poke.style.transform = `translate(${deslocamentoX}px, ${deslocamentoY}px) rotate(360deg)`;

        // Quando chegar no alvo:
        setTimeout(() => {
            // Pokémon aparece
            pokemon.style.opacity = 1;
            pokemon.style.transform = "scale(1)";
        }, 500);

        // Captura após aparecer
        setTimeout(() => {
            pokemon.classList.add("capturado");
        }, 1000);

        // Esconde depois da captura
        setTimeout(() => {
            pokemon.style.opacity = 0;
        }, 1400);

        // Pokébola volta para o lugar
        setTimeout(() => {
            poke.style.transform = "translate(0, 0)";
        }, 1500);
    });
});

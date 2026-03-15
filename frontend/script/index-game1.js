document.addEventListener("DOMContentLoaded", () => {
    const poke = document.querySelector(".poke");
    const telapkm = document.querySelector(".telapkm");
    const pokemon = document.querySelector(".pokemon");
    const inputPokemon = document.querySelector(".pokemon-input");

    // --- Movimento da Pokébola ---
    poke.addEventListener("click", () => {
        const pokeRect = poke.getBoundingClientRect();
        const pokeCenterX = pokeRect.left + pokeRect.width / 2;
        const pokeCenterY = pokeRect.top + pokeRect.height / 2;

        const telaRect = telapkm.getBoundingClientRect();
        const telaCenterX = telaRect.left + telaRect.width / 2;
        const telaCenterY = telaRect.top + telaRect.height / 2;

        const deslocamentoX = telaCenterX - pokeCenterX;
        const deslocamentoY = telaCenterY - pokeCenterY;

        poke.style.transition = "transform 0.5s ease-out";
        poke.style.transform = `translate(${deslocamentoX}px, ${deslocamentoY}px) rotate(360deg)`;

        setTimeout(() => {
            pokemon.style.opacity = 1;
            pokemon.style.transform = "scale(1)";
        }, 500);

        setTimeout(() => {
            pokemon.classList.add("capturado");
        }, 1000);

        setTimeout(() => {
            pokemon.style.opacity = 0;
        }, 1400);

        setTimeout(() => {
            poke.style.transform = "translate(0, 0)";
        }, 1500);
    });

    // --- Função para preencher os quadrados ---
    function preencherCampos(pokemonDados) {
        for (const campo in pokemonDados) {
            const div = document.getElementById(campo);
            if (div) {
                div.textContent = pokemonDados[campo];
                div.classList.remove("correto", "parcial", "incorreto");
                div.classList.add("correto"); // dados corretos do sistema
            }
        }
    }

    // --- Enviar pelo input ao apertar Enter ---
    inputPokemon.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const nome = inputPokemon.value.trim().toLowerCase();
            if (!nome) return;

            // Dados exemplo, substitua por API ou banco
            let dados = null;
            if (nome === "bulbasaur") {
                dados = {
                    tipo1: "Planta",
                    tipo2: "Venenoso",
                    habitat: "Grama",
                    cor: "Verde",
                    fase: "Inicial",
                    altura: "0.7 m",
                    peso: "6.9 kg"
                };
            } else if (nome === "pikachu") {
                dados = {
                    tipo1: "Elétrico",
                    tipo2: "",
                    habitat: "Floresta",
                    cor: "Amarelo",
                    fase: "Inicial",
                    altura: "0.4 m",
                    peso: "6.0 kg"
                };
            } else {
                alert("Pokémon não encontrado!");
                return;
            }

            preencherCampos(dados);
            inputPokemon.value = "";
        }
    });

    // --- Preencher campos iniciais (opcional) ---
    const dadosPokemon = {
        tipo1: "Planta",
        tipo2: "Venenoso",
        habitat: "Grama",
        cor: "Verde",
        fase: "Inicial",
        altura: "0.7 m",
        peso: "6.9 kg"
    };
    preencherCampos(dadosPokemon);
});
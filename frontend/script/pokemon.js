document.addEventListener("DOMContentLoaded", () => {
    const poke = document.querySelector(".poke");
    const telapkm = document.querySelector(".telapkm");
    const pokemonImg = document.querySelector(".pokemon");
    const input = document.querySelector(".pokemon-input");
    const fieldsContainer = document.getElementById("pokemon-fields");

    // Exemplo Pokedex
    const pokedex = [
        {
            nome: "Bulbasaur",
            tipo1: "Planta",
            tipo2: "Venenoso",
            habitat: "Grama",
            cor: "Verde",
            fase: "Inicial",
            altura: "0.7 m",
            peso: "6.9 kg",
            imagem: "images/pkm/001.png"
        },
        {
            nome: "Charmander",
            tipo1: "Fogo",
            tipo2: "",
            habitat: "Floresta",
            cor: "Laranja",
            fase: "Inicial",
            altura: "0.6 m",
            peso: "8.5 kg",
            imagem: "images/pkm/004.png"
        }
        // Adicione mais Pokémon aqui
    ];

    // Quando o usuário digitar e apertar Enter
    input.addEventListener("keypress", e => {
        if (e.key === "Enter") {
            const nome = input.value.trim().toLowerCase();
            const encontrado = pokedex.find(p => p.nome.toLowerCase() === nome);

            if (!encontrado) {
                alert("Pokémon não encontrado!");
                return;
            }

            // Limpa campos antigos
            fieldsContainer.innerHTML = "";

            // Preenche quadrados com os campos
            const campos = ["tipo1","tipo2","habitat","cor","fase","altura","peso"];
            campos.forEach(key => {
                const item = document.createElement("div");
                item.classList.add("item");

                const span = document.createElement("span");
                span.textContent = key.charAt(0).toUpperCase() + key.slice(1);

                const div = document.createElement("div");
                div.classList.add("campo-status");
                div.textContent = encontrado[key];

                item.appendChild(span);
                item.appendChild(div);
                fieldsContainer.appendChild(item);
            });

            // Atualiza a imagem do Pokémon
            pokemonImg.style.backgroundImage = `url(${encontrado.imagem})`;
        }
    });

    // Pokébola animada (igual antes)
    poke.addEventListener("click", () => {
        const pokeRect = poke.getBoundingClientRect();
        const pokeCenterX = pokeRect.left + pokeRect.width / 2;
        const pokeCenterY = pokeRect.top + pokeRect.height / 2;

        const telaRect = telapkm.getBoundingClientRect();
        const telaCenterX = telaRect.left + telaRect.width / 2;
        const telaCenterY = telaRect.top + telaRect.height / 2;

        const dx = telaCenterX - pokeCenterX;
        const dy = telaCenterY - pokeCenterY;

        poke.style.transition = "transform 0.5s ease-out";
        poke.style.transform = `translate(${dx}px, ${dy}px) rotate(360deg)`;

        setTimeout(() => {
            pokemonImg.style.opacity = 1;
            pokemonImg.style.transform = "scale(1)";
        }, 500);

        setTimeout(() => {
            pokemonImg.classList.add("capturado");
        }, 1000);

        setTimeout(() => {
            pokemonImg.style.opacity = 0;
        }, 1400);

        setTimeout(() => {
            poke.style.transform = "translate(0, 0)";
        }, 1500);
    });
});
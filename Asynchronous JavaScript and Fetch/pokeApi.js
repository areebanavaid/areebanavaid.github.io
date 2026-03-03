// Areeba Navaid
// CIS 4004
// Week 6 - Asynchronous JavaScript and Fetch


// Assign variables based on the HTML elements

const pokemonInput = document.getElementById("pokemonInput");
const findBtn = document.getElementById("findBtn");

const pokemonImg = document.getElementById("pokemonImg");
const pokemonAudio = document.getElementById("pokemonAudio");

const movesArea = [
    document.getElementById("move1"),
    document.getElementById("move2"),
    document.getElementById("move3"),
    document.getElementById("move4")
];

const addToTeamBtn = document.getElementById("addToTeamBtn");
const teamList = document.getElementById("teamList");
const teamArea = document.getElementById("teamArea");
let currentPokemon = null;

const pokemonCache = {};

// Event listener for the Find button
findBtn.addEventListener("click", async() => {
    const pokemonQuery = pokemonInput.value.toLowerCase().trim();

    if (!pokemonQuery) {
        alert("Please enter a Pokémon name or ID.");
        return;
    }

    loadPokemon(pokemonQuery);
});

// Event listener for the Add to Team button
addToTeamBtn.addEventListener("click", () => {
    if (!currentPokemon) {
        alert("No Pokémon loaded to add to team.");
        return;
    }

    // Get the selected moves from the dropdowns
    const selectedMoves = movesArea.map(select => select.value);

    // Create a new table row
    const row = document.createElement("tr");

    const spriteCell = document.createElement("td");

    // Create an image element for the Pokémon sprite
    const img = document.createElement("img");
    img.src = currentPokemon.sprites.front_default;
    img.alt = currentPokemon.name;
    img.width = 72;

    spriteCell.appendChild(img);

    const movesCell = document.createElement("td");
    
    const ul = document.createElement("ul");

    // Add each selected move as a list item
    selectedMoves.forEach(move => {
        const li = document.createElement("li");
        li.textContent = move;
        ul.appendChild(li);
    });

    movesCell.appendChild(ul);

    // Add cells to the row
    row.appendChild(spriteCell);
    row.appendChild(movesCell);

    // Add row to the table body
    teamList.appendChild(row);
});


// Function to load Pokémon data from the API
async function loadPokemon(pokemonQuery) {
    if (pokemonCache[pokemonQuery]) {
        displayPokemon(pokemonCache[pokemonQuery]);
        return;
    } 
    // Try-catch block to handle errors when fetching data from the API
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonQuery}`);
        if (!response.ok) {
            throw new Error("Pokémon not found");
        }
        const pokemonData = await response.json();
        pokemonCache[pokemonQuery] = pokemonData;
        displayPokemon(pokemonData);
    } catch (error) {
        alert("Error loading Pokémon data: " + error.message);
    }
}

// Function to display Pokémon data on the page
function displayPokemon(pokemonData) {
    // This is for the sprite
    pokemonImg.src = pokemonData.sprites.front_default;
    pokemonImg.style.display = "block"; // Show the image element
    pokemonImg.alt = pokemonData.name; // Set alt text for accessibility

    // This is for the audio
    pokemonAudio.src = pokemonData.cries.latest;

    // This gets the move names from API
    const moves = pokemonData.moves.slice(0, 20).map(m => m.move.name);

    // This will populate the dropdowns
    movesArea.forEach((select, i) => {
        select.innerHTML = ""; // This is to clear previous options

        moves.forEach(move => {
            const option = document.createElement("option");
            option.value = move;
            option.textContent = move;
            select.appendChild(option);
        });
        select.selectedIndex = i;
    });

    currentPokemon = pokemonData; // Store the current Pokémon data for later use when adding to team

    addToTeamBtn.disabled = false; // Enable the Add to Team button now that a Pokémon is loaded
}








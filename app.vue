<script>
export default {
  data() {
    return {
      apples: [], // Define the pokemons property here
    };
  },
  async asyncData(i) {
    console.log(i);
    const apples = [];
    for(let i = 0; i < 60; i++) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Access the sprites property within the data object
        const sprites = data.sprites;
        const names = data.name;
        const ids = data.id;
        apples.push(sprites, names, ids);
        // return {sprites, names, ids};
      } catch (error) {
        console.error('Error:', error);
        // return null;
      }
    }
  }
}
    // for(let i = 0; i < 60; i++) {
    // fetchData(i)
    //   .then(({ sprites, names, ids }) => {
    //     if (sprites) {
    //       const linkElement = document.createElement('a');
    //       linkElement.href = `/profile/${ids}`;

    //       const imgElement = document.createElement('img');
    //       imgElement.src = sprites.front_default; 
    //       imgElement.alt = 'Sprite Image';
    //       imgElement.title = names;
          
    //       const labelElement = document.createElement('label');
    //       labelElement.textContent = names; 
    //       const containerElement = document.createElement('div');
    //       // containerElement.classList.add('image-container');

    //       containerElement.appendChild(imgElement);
    //       containerElement.appendChild(labelElement);
    //       linkElement.appendChild(containerElement);

    //       linkElement.appendChild(imgElement);
    //       document.body.appendChild(linkElement);
    //     } else {
    //       console.log('Failed to fetch sprites.');
    //     }
    //   });
    // }

</script>
<style>
img {
  border: 1px solid #ddd; /* Gray border */
  border-radius: 4px;  /* Rounded border */
  padding: 5px; /* Some padding */
  width: 150px; /* Set a small width */
}

img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
</style>
<template>
<h1>Pokemon</h1>
<body>
  <template>
  <div>
    <!-- Display Pokémon data and links using Nuxt components -->
    <div v-for="(pokemon, index) in apples" :key="index">
      <nuxt-link :to="`/profile/${pokemon.ids}`">
        <div class="image-container">
          <img :src="pokemon.sprites.front_default" :alt="pokemon.names" :title="pokemon.names" />
          <label>{{ pokemon.names }}</label>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
</body>
</template>
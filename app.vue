<template>
  <div>
    <h1>Pokemon</h1>
    <div v-for="(pokemon, index) in apples" :key="index">
      <nuxt-link :to="`/profile/${pokemon.id}`"> <!-- Use "ids" instead of "pokemon.ids" -->
        <div class="image-container">
          <img :src="pokemon.sprites.front_default" :alt="pokemon.name" :title="pokemon.name" />
          <label>{{ pokemon.name }}</label>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const apples = ref([]);

async function fetchData(i) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Access the sprites property within the data object
    const sprites = data.sprites;
    const name = data.name;
    const id = data.id;
    apples.value.push({ sprites, name, id });
  } catch (error) {
    console.error('Error:', error);
  }
}

onMounted(() => {
  for (let i = 1; i < 60; i++) {
    fetchData(i);
  }
});
</script>

<style>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}

img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
</style>

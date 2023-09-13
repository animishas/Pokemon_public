<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  // Profile page logic here
}</script>
<template>
  <span>
    <h1>Profile Page for ID: {{ id }}</h1>
  </span>
</template>

<template>
  <li>
    <base-card>
      <header>
        <h3>{{ resource.title }}</h3>
        <base-button mode="flat" @click="deleteResource(resource.id)">Delete</base-button>
      </header>
      <p>{{ resource.description }}</p>
      <nav>
        <a :href='resource.link'>View Resource</a>
      </nav>
    </base-card>
  </li>
</template>


<script>
export default {
  props: { resource: Object },
  inject:['deleteResource'],
  data () { return {}; },
  provide () { return {}; },
  computed: {},
  methods: {}
};
</script>


<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
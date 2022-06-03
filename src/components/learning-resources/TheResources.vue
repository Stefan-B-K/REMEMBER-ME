<template>
  <base-card>
    <base-button :mode="storedResButtonMode" @click="selectTab('stored-resources')">Stored Resources</base-button>
    <base-button :mode="addResButtonMode" @click="selectTab('add-resource')">Add Resource</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from '@/components/learning-resources/StoredResources';
import AddResource from '@/components/learning-resources/AddResource';

export default {
  components: { StoredResources, AddResource },
  data () {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to search and find all',
          link: 'https://google.com'
        }
      ]
    };
  },
  provide () {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    };
  },
  computed: {
    storedResButtonMode () {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode () {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  methods: {
    selectTab (tab) {
      this.selectedTab = tab;
    },
    addResource (resource) {
      const newResource = { ...resource, id: resource.title.split(' ').join('-') };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    deleteResource (resourceID) {
      const resourceIndex = this.storedResources
        .findIndex(resource => resource.id === resourceID);
      this.storedResources.splice(resourceIndex, 1);          // filter not working with PROVIDE
    }
  }
};
</script>

<style scoped></style>
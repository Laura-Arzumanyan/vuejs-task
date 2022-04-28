<template>
  <div class="routing-element">
    <div>Users from
      <a href="https://jsonplaceholder.typicode.com/users" target="_blank">
        https://jsonplaceholder.typicode.com/users
      </a>
    </div>
    <div v-for="(user, index) in users" :key="index" class="user-data-container">
      <UserData :name="user.name"
                :email="user.email"
                :city="user.address.city"
                :suite="user.address.suite"
                :street="user.address.street"
                :companyName="user.company.name"
                :catchPhrase="user.company.catchPhrase"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import UserData from './UserData.vue'

export default {
  name: 'RoutingPage',
  components: {
    UserData
  },
  props: {
    // icon: Image,
  },

  data() {
    return {
      users:[],
    }
  },

  created: function () {
    this.moment = moment;

    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(json => {
    //       return this.users = json
    //     })
    //     .catch((error) => {
    //       console.log('Error:', error);
    //     })

    // axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(response => {
    //       return this.users = response.data;
    //     })
    //     .catch((error) => {
    //       console.log('Error: ', error);
    //     })
  },
  async mounted() {
    const resp = await this.$axios.get('https://jsonplaceholder.typicode.com/users')
    this.users = resp.data
  },

  methods: {
    usersData() {
    }
  },

  computed: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-data-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

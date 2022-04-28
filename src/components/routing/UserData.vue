<template>
  <div class="user-data-element">
    <div class="first">
      <h3 class="name">{{name}}</h3>
      <h4 class="email">{{email}}</h4>
    </div>

    <div class="second">
      <div>
        {{ suite + ', ' + street + ', ' }}
        <span class="city">
        {{ city }}
      </span>
      </div>
      <div>{{ companyName }}</div>
      <div>{{ catchPhrase }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserData',
  components: {
  },
  props: {
    name: String,
    email: String,
    city: String,
    suite: String,
    street: String,
    companyName: String,
    catchPhrase: String,
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.user-data-element {
  border: 2px solid #2c3e50;
  margin-top: 10px;
  width: 40%;
  min-width: 456px;
  display: flex;
}

.first {
  border-right: 1px solid gray;
  width: 300px;
  min-width: 300px;
}

.second {
  padding-left: 15px;
  text-align: left;
}

.name {
  margin: 3px 0 3px 0;
}

.email {
  margin: 3px 0 3px 0;
}

</style>

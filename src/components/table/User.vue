<template>
  <div id="user-table">
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="10"
      item-key="email"
      class="table"
      :search="search"
      :footer-props="{
        showFirstLastPage: true
      }"
    >
      <template v-slot:item.image="{ item }">
        <v-avatar rounded size="50px">
          <img v-bind:src="item.image">
        </v-avatar>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'UserTable',
  data () {
    return {
      search: '',
      headers: [
        {
          text: '프로필',
          align: 'start',
          sortable: false,
          value: 'image',
        },
        { text: '이름', value: 'name' },
        { text: '유형', value: 'type' },
        { text: '이메일', value: 'email' }
      ],
      users: [
        {
          image: 'https://image-dev.ohcoach.com/profiles/upload_15583465698210',
          name: '오수영',
          type: 'director',
          email: 'sueyoung.oh@fitogether.com'
        },
        {
          image: 'https://image-dev.ohcoach.com/profiles/upload_15833726891451',
          name: '이훈재',
          type: 'senior developer',
          email: 'hoonjae.lee@fitogether.com'
        },
        {
          image: 'https://image-dev.ohcoach.com/profiles/upload_15563715566821',
          name: '백주희',
          type: 'developer',
          email: 'juhee.baek@fitogether.com'
        }
      ],
    }
  }
}
</script>

<style scoped>
  .table {

  }

</style>

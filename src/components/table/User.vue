<template>
  <v-data-table
    id="user-table"
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
    <template v-slot:top>
      <div class="search-bar">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          height="20">
        </v-text-field>
      </div>
      <v-spacer></v-spacer>
      <v-dialog
        v-model="dialog"
        max-width="500px">
        <v-card>
          <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="save">OK</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>

    <template v-slot:item="{ item }">
      <tr @click="editItem(item)">
        <td>
          <v-avatar rounded size="50px">
            <img v-bind:src="item.image">
          </v-avatar>
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.email }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'UserTable',
  data: () => ({
    dialog: false,
    search: '',
    headers: [
      {
        text: '프로필',
        align: 'start',
        sortable: false,
        value: 'image'
      },
      { text: '이름', value: 'name' },
      { text: '유형', value: 'type' },
      { text: '이메일', value: 'email' }
    ],
    users: [],
    editedIndex: -1,
    editedItem: {
      image: '',
      name: '',
      type: '',
      email: ''
    }
  }),
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.users = [
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
      ]
    },
    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem)
      } else {
        this.users.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

<style scoped>
  .table {

  }

  .search-bar {
    display: inline-flex;
    width: 100%;
    height: 80px;
    padding: 5px;
    border-radius: 10px;
    background: lightgray;
    vertical-align: middle;
    align-items: center;
    justify-items: center;
  }

  .search-bar .v-text-field {
    padding: 0 5px 0 5px;
    background: white;
    border-radius: 5px;
    height: 40px;
    max-width: 700px;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2),0 0px 10px 0 rgba(0,0,0,0.19);
  }

</style>

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
          <v-card-title class="headline">
            정보 수정
          </v-card-title>
          <v-card-text>
            <v-select :items="userTypes" label="Type*" v-model="selectedItem.type"></v-select>
            <v-text-field label="이름*" v-model="selectedItem.name"></v-text-field>
            <v-text-field label="휴대폰 번호*" v-model="selectedItem.phone"></v-text-field>
            <v-text-field label="Email*" v-model="selectedItem.email"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="deleteItem">DELETE</v-btn>
            <v-btn color="black darken-1" text @click="close">CLOSE</v-btn>
            <v-btn color="blue darken-1" text @click="save">SAVE</v-btn>
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
        <td>{{ item.phone }}</td>
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
      { text: '이메일', value: 'email' },
      { text: '연락처', value: 'phone' }
    ],
    users: [],
    selectedIndex: -1,
    selectedItem: {
      image: '',
      name: '',
      type: '',
      email: ''
    },
    userTypes: [
      { text: 'director' },
      { text: 'senior developer' },
      { text: 'developer' }
    ]
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
          email: 'sueyoung.oh@fitogether.com',
          phone: '010-7122-2118'
        },
        {
          image: 'https://image-dev.ohcoach.com/profiles/upload_15833726891451',
          name: '이훈재',
          type: 'senior developer',
          email: 'hoonjae.lee@fitogether.com',
          phone: '010-1234-5678'
        },
        {
          image: 'https://image-dev.ohcoach.com/profiles/upload_15563715566821',
          name: '백주희',
          type: 'developer',
          email: 'juhee.baek@fitogether.com',
          phone: '010-9876-5432'
        }
      ]
    },
    editItem (item) {
      this.selectedIndex = this.users.indexOf(item)
      this.selectedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem () {
      this.users = this.users.filter((e) => { return e.email !== this.selectedItem.email })
      this.dialog = false
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.selectedItem = Object.assign({}, this.defaultItem)
        this.selectedIndex = -1
      })
    },
    save () {
      if (this.selectedIndex > -1) {
        Object.assign(this.users[this.selectedIndex], this.selectedItem)
      } else {
        this.users.push(this.selectedItem)
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
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2),0 0 10px 0 rgba(0,0,0,0.19);
  }

</style>

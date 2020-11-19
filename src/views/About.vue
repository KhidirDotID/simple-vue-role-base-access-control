<template>
  <div class="about">
    <ul style="text-align: left">
      <li>Dashboard</li>
      <li v-if="can('index-users')">
        <ul>
          <li><router-link :to="{ name: 'Users' }">Users</router-link></li>
          <li v-if="can(['create', 'create-users'])">Create</li>
        </ul>
      </li>
    </ul>
    <h1>This is an about page</h1>
  </div>
</template>

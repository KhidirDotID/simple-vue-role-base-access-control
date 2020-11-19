# Simple Vue Role Base Access Control

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
- [Compiles and minifies for production](#compiles-and-minifies-for-production)
- [License](#License)

## Installation

```
* Download/Clone the repository
* run pnpm install
```

## Usage

- add meta permissions to your router. Example :

```
{
    path: "/users",
    name: "Users",
    component: import('@/views/users/UsersIndex'),
    meta: { title: "Users", permissions: "index-users" },
},
{
    path: "/create-users",
    name: "CreateUsers",
    component: import('@/views/users/UsersCreate'),
    meta: { title: "Users", permissions: "create-users" },
}
```

- Check if current user has a permission by its name.

```
<li v-if="can('index-users')">
    <ul>
        <li><router-link :to="{ name: 'Users' }">Users</router-link></li>
        <li v-if="can(['create', 'create-users'])"><router-link :to="{ name: 'CreateUsers' }">Create</router-link></li>
    </ul>
</li>
```

## Compiles and hot-reloads for development

```
pnpm run serve
```

## Compiles and minifies for production

```
pnpm run build
```

## License

[MIT License](LICENSE).

<template>
  <div class="nav-bar">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link :to="{name: 'Cart'}">Cart</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-bar {
  margin: 0 0 50px 0;
}
.nav-bar nav {
  display: flex;
  justify-content: center;
}
.nav-bar a {
  padding: 50px 30px 50px 30px;
  color: #aaa;
  text-decoration: none;
  text-shadow: rgb(50, 50, 50) 0px 1px 3px;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0px;
}
.nav-bar a.router-link-active{
  background: linear-gradient(200deg, rgb(68, 48, 99), rgb(186, 186, 218));
  color:white;
  box-shadow: rgba(200, 200, 200, 0.15) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 0 0 45% 45% ;
}
.nav-bar a:hover {
  color: white;
  border-radius: 0 0 45% 45% ;
}
</style>
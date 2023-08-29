<template>
  <div>
    <body>
      <nav class="navbar bg-dark p-3 mb-3">
        <div class="container-fluid">
          <h3 class="navbar-brand text-white">MyShop</h3>
        </div>
      </nav>
      <slot />
    </body>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
@use "~/assets/scss/main.scss";

.navbar {
  border-radius: 14px;
}
</style>

<script setup lang="ts">
import { items } from '../items'
// const router = useRouter()
// items.reverse()
</script>

<template>
  <div class="box">
    <router-link v-for="item of items" :key="item.no" :to="`/${item.no}`">
      {{ item.no }} : {{ item.name }}
    </router-link>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
}
</style>

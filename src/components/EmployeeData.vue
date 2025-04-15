<template>
  <EmployeeList :employees="employees"></EmployeeList>
</template>

<script setup>
import EmployeeList from "./EmployeeList.vue";
import { ref } from "vue";

const employees = ref([
  { id: 1, name: "John", lastName: "Shahin", gender: "Men" },
  { id: 2, name: "MND", lastName: "Shahin", gender: "Women" },
]);
</script>

<style></style>

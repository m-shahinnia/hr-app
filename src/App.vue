<template>
  <THeHeader />
  <AddEpmloyee @add-employee="addEmployee" />
  <!-- <EmployeeData/> -->
  <EmployeeList :employees="employees" @delete-employee="onDeleteEmploye" />
</template>

<script setup>
import EmployeeList from "./components/EmployeeList.vue";
import THeHeader from "./components/TheHeader.vue";
import AddEpmloyee from "./components/AddEpmloyee.vue";
import { ref } from "vue";
const employees = ref([
  { id: 1, name: "John", lastName: "Shahin", gender: "Men", dob: "1372/09/10" },
  {
    id: 2,
    name: "MND",
    lastName: "Shahin",
    gender: "Women",
    dob: "1372/09/10",
  },
]);
const onDeleteEmploye = (id) => {
  employees.value = employees.value.filter((employee) => employee.id !== id);
};
const addEmployee = (newEmployee) => {
  employees.value.push({
    id: employees.value.length + 1, // Generate a new ID
    // ...newEmployee,
    name: newEmployee.firstName,
    lastName: newEmployee.lastName,
    gender: newEmployee.gender,
    dob: newEmployee.dob.toLocaleDateString("en-CA"),
  });
};
</script>

<style></style>

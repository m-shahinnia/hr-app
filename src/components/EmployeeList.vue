<template>
  <ul class="employee-list">
    <li v-for="employee in employees" :key="employee.id" class="employee-card">
      <div class="employee-info">
        <p><strong>Name:</strong> {{ employee.name }}</p>
        <p><strong>Last Name:</strong> {{ employee.lastName }}</p>

        <p><strong>Gender:</strong> {{ employee.gender }}</p>
        <p><strong>date of berathDay:</strong> {{ employee.dob }}</p>
      </div>

      <div class="employee-actions">
        <i
          class="pi pi-pencil action-icon edit"
          @click="editEmployee(employee)"
        />
        <i
          class="pi pi-trash action-icon delete"
          @click="deleteEmployee(employee.id)"
        />
      </div>
    </li>
  </ul>
</template>

<script setup>
// main.js or main.ts
import "primeicons/primeicons.css";
import { defineProps, defineEmits } from "vue";
const emit = defineEmits([
  "delete-employee",
  "edit-employee", // if you also emit an edit event later
]);

defineProps({
  employees: {
    type: Array,
    required: true,
  },
});

const editEmployee = (employee) => {
  console.log("Edit:", employee);
};
const deleteEmployee = (id) => {
  emit("delete-employee", id);
  console.log("delete-employe:", id);
  // Perform delete action here, e.g., call an API or update the state
};
</script>

<style scoped>
.employee-list {
  list-style: none;
  padding: 0;
  margin: 2rem auto;
  max-width: 600px;
}

.employee-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 1px solid #ddd;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, background-color 0.3s;
}

.employee-card:hover {
  background-color: #f9f9f9;
  transform: translateY(-2px);
}

.employee-info p {
  margin: 0.3rem 0;
  font-size: 1rem;
  color: #333;
}

.employee-info strong {
  color: #2f80ed;
}

.employee-actions {
  display: flex;
  gap: 0.75rem;
}

.action-icon {
  font-size: 1.2rem;
  cursor: pointer;
  padding: 6px;
  border-radius: 5px;
  transition: 0.3s;
}

.edit:hover {
  background-color: #e3f0ff;
  color: #2f80ed;
}

.delete:hover {
  background-color: #ffe3e3;
  color: #e63946;
}
</style>

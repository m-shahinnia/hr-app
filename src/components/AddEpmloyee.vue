<template>
  <Toast />
  <!-- Must be here -->
  <div class="main-form">
    <Form
      :resolver="resolver"
      :initialValues="{
        firstName: '',
        lastName: '',
        gender: '',
        dob: null,
      }"
      @submit="onFormSubmit"
      class="flex flex-col gap-4 w-full sm:w-80"
    >
      <!-- First Name -->
      <FormField v-slot="$field" name="firstName">
        <InputText v-model="$field.modelValue" placeholder="First Name" />
        <Message v-if="$field?.invalid" severity="error">
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <!-- Last Name -->
      <FormField v-slot="$field" name="lastName">
        <InputText v-model="$field.modelValue" placeholder="Last Name" />
        <Message v-if="$field?.invalid" severity="error">
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <!-- Gender -->
      <FormField v-slot="$field" name="gender">
        <div class="flex gap-4 items-center">
          <RadioButton
            inputId="male"
            value="Male"
            v-model="$field.modelValue"
          />
          <label for="male">Male</label>

          <RadioButton
            inputId="female"
            value="Female"
            v-model="$field.modelValue"
          />
          <label for="female">Female</label>
        </div>
        <Message v-if="$field?.invalid" severity="error">
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <!-- Date of Birth -->
      <FormField v-slot="$field" name="dob">
        <!-- <Calendar v-model="$field.modelValue" placeholder="Date of Birth" /> -->
        <DatePicker v-model="$field.modelValue" placeholder="Date of Birth" />

        <Message v-if="$field?.invalid" severity="error">
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <Button type="submit" label="Submit" />
    </Form>
  </div>
  <!-- component -->
 
</template>
<script setup>
import { z } from "zod";
import { zodResolver } from "@primevue/forms/resolvers/zod";

import { useToast } from "primevue/usetoast"; // ✅ add this line
// import EmployeeData from "./EmployeeData.vue";
import { ref } from "vue";

import { defineEmits } from "vue";

const emit = defineEmits(["add-employee"]);

const toast = useToast();
const myData = ref({});
// Define the form validation schema
const resolver = zodResolver(
  z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    gender: z.string().min(1, "Please select a gender"),
    dob: z.date({ required_error: "Date of birth is required" }),
  })
);
const onFormSubmit = (formData) => {
  if (formData.valid) {
    emit("add-employee", formData.values); // Emit the event with the form data
    toast.add({
      severity: "success",
      summary: "Success",
      detail: "Form submitted successfully!",
      life: 3000,
    });
    // myData.value = formData.values; // ✅ add this line
    // console.log("add-employee", myData);
  } else {
    toast.add({
      severity: "error",
      summary: "Validation Error",
      detail: "Please correct the form errors.",
      life: 3000,
    });
    console.log("❌ Invalid form data");
  }
};
</script>
<style scoped>
.main-form {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
}
</style>

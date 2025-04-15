<template>
  <div class="main-form">
    <Form
      :resolver="resolver"
      @submit="onFormSubmit"
      class="flex flex-col gap-4 w-full sm:w-80"
    >
      <!-- First Name -->
      <FormField v-slot="$field" name="firstName" class="flex flex-col gap-1">
        <InputText v-model="$field.modelValue" placeholder="First Name" />
        <Message
          v-if="$field?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <!-- Last Name -->
      <FormField v-slot="$field" name="lastName" class="flex flex-col gap-1">
        <InputText v-model="$field.modelValue" placeholder="Last Name" />
        <Message
          v-if="$field?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <!-- Date of Birth -->
      <FormField v-slot="$field" name="dob" class="flex flex-col gap-1">
        <Calendar v-model="$field.modelValue" placeholder="Date of Birth" />
        <Message
          v-if="$field?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <!-- Gender Checkboxes -->
      <FormField v-slot="$field" name="gender" class="flex flex-col gap-1">
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <Checkbox
              inputId="men"
              name="gender"
              value="Men"
              v-model="$field.modelValue"
            />
            <label for="men">Men</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox
              inputId="women"
              name="gender"
              value="Women"
              v-model="$field.modelValue"
            />
            <label for="women">Women</label>
          </div>
        </div>
        <Message
          v-if="$field?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <Button type="submit" severity="primary" label="Submit" />
    </Form>
  </div>
</template>

<script setup>
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";

import { useToast } from "primevue/usetoast";

// Toast setup
const toast = useToast();

// Zod schema
const resolver = zodResolver(
  z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    dob: z.date({ required_error: "Date of birth is required" }),
    gender: z
      .array(z.string())
      .min(1, { message: "Select at least one gender" }),
  })
);

// On submit
const onFormSubmit = ({ data, valid }) => {
  if (valid) {
    toast.add({
      severity: "success",
      summary: `Submitted: ${data.firstName} ${data.lastName}`,
      detail: `DOB: ${data.dob.toLocaleDateString()} - Gender: ${data.gender.join(
        ", "
      )}`,
      life: 4000,
    });
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

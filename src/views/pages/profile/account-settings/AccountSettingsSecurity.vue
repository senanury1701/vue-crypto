<script lang="ts" setup>
import { ref } from 'vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'

const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)

const { handleSubmit } = useForm()

const { value: currentPassword, errorMessage: currentPasswordError } = useField('currentPassword', yup.string().required())

// eslint-disable-next-line @typescript-eslint/no-shadow
const { value: newPassword, errorMessage: newPasswordError } = useField('newPassword', yup.string().required().min(8).when('currentPassword', (currentPassword, field) =>
  currentPassword ? field.required() : field).matches(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{8,99}$/,
  ' 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number'))

const { value: confirmPassword, errorMessage: confirmPasswordError } = useField('confirmPassword', yup.string().required().oneOf([('newPassword')], 'Passwords must'))

const onSubmit = () => {
  handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })()
}
</script>

<template>
  <VRow>
    <!-- SECTION: Change Password -->
    <VCol cols="12">
      <VCard title="Change Password">
        <VForm @submit.prevent="onSubmit">
          <VCardText class="pt-0">
            <!-- 👉 Current Password -->
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 current password -->
                <VTextField
                  v-model="currentPassword"
                  name="currentPassword"
                  :type="isCurrentPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCurrentPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  label="Current Password"
                  placeholder="············"
                  @click:append-inner="isCurrentPasswordVisible = !isCurrentPasswordVisible"
                />
                <span
                  class="error-text"
                  name="currentPassword"
                >{{ currentPasswordError }}</span>
              </VCol>
            </VRow>

            <!-- 👉 New Password -->
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 new password -->

                <VTextField
                  v-model="newPassword"
                  name="newPassword"
                  :type="isNewPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isNewPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  label="New Password"
                  placeholder="············*"
                  success-message="Nice and secure!"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                />
                <span
                  class="error-text"
                  name="newPassword"
                >{{ newPasswordError }}</span>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 confirm password -->
                <VTextField
                  v-model="confirmPassword"
                  name="confirmPassword"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  label="Confirm New Password"
                  placeholder="············"
                  success-message="Glad you remembered it!"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                />
                <span
                  class="error-text"
                  name="confirmPassword"
                >{{ confirmPasswordError }}</span>
              </VCol>
            </VRow>
          </VCardText>

          <!-- 👉 Action Buttons -->
          <VCardText class="d-flex flex-wrap gap-4">
            <VBtn type="submit">
              Save changes
            </VBtn>

            <VBtn
              type="reset"
              color="secondary"
              variant="outlined"
            >
              Reset
            </VBtn>
          </VCardText>
        </VForm>
      </VCard>
    </VCol>
    <!-- !SECTION -->
  </vrow>
</template>

<style lang="scss">
.error-text {
  color: red;
}
</style>

<template>
  <div>
    <a-form
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      :rules="rules"
      :model="account"
    >
      <a-form-item label="Username" name="name">
        <a-input v-model:value="account.name" />
      </a-form-item>
      <a-form-item label="Password" name="password">
        <a-input-password v-model:value="account.password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }" name="remember">
        <a-checkbox v-model:checked="account.checkbox">Remember me</a-checkbox>
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/form-rules'
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: '',
      remember: true
    })

    return {
      account,
      rules
    }
  }
})
</script>

<style scoped></style>

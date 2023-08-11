<script setup>
import { ExternalComponent } from 'library';

const questions = ref([
  {
    id: 'a',
    title: 'title a',
  },
  {
    id: 'b',
    title: 'title b'
  }
])
</script>

<template>
  <div>
    <!-- Component builded with `@vitejs/plugin-vue` -->
    <ExternalComponent :accordionItems="questions">
      <template
        v-for="question in questions"
        :key="question.id"
        #[question.id]
      >
        <div>
          <!-- if remove `?.` will throw error on server -->
          {{ question?.title }}
        </div>
      </template>
    </ExternalComponent>

    <hr />

    <!-- The same component but is not builded with `@vitejs/plugin-vue` -->
    <LocalComponent :accordionItems="questions">
      <template
        v-for="question in questions"
        :key="question.id"
        #[question.id]
      >
        <div>
          {{ question?.title }}
        </div>
      </template>
    </LocalComponent>
  </div>
</template>

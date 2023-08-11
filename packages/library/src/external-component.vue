<template>
  <div>
    <template
      v-for="accordionItem in accordionItems"
      :key="accordionItem.id"
    >
      <slot :name="accordionItem.id" />
    </template>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  accordionItems: {
    type: Array,
    required: true,
  },
});
</script>
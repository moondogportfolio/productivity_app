<template>
  <div class="full-height q-pa-md grid">
    <project-item data-border="1" />
    <project-item data-border="2" />
    <project-item data-border="3" />
    <project-item :data-border="shape" />
    <project-item :data-border="shape" />
    <project-item :data-border="shape" />
    <project-item :data-border="shape" />
    <project-item :data-border="shape" />
  </div>
</template>

<script>
import projectItem from '../projectItem.vue';
export default {
  components: { projectItem },
  data() {
    return {
      shape: 1,
    };
  },
};
</script>

<style>
.project-box {
  width: 200px;
  height: 200px;
}

[data-border='1'] {
  border-top-left-radius: 50%;
}

[data-border='2'] {
  border-radius: 50%;
}

[data-border='3'] {
  border-radius: 25%;
}

[data-border='4'] {
  border-top-left-radius: 20%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}
</style>

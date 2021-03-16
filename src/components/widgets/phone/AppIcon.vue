<template>
  <li :id="icon.id" :style="iconStyle">
    <div class="username">{{ icon.username }}</div>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true,
    },
  },
  computed: {
    iconStyle() {
      return {
        '--iconUrl': `url(${this.icon.iconUrl})`,
      };
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

li {
  /* trssewef */
  width: 100%;
  position: relative;
  border-radius: 1.5rem;
}

li::before {
  content: '';
  display: inline-block;
  width: 1px;
  height: 0;
  padding-bottom: 100%;
}

li,
li::after {
  background-image: var(--iconUrl);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

li::after {
  display: block;
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  transform: scale(0.9);
  top: 15px;
  filter: blur(10px);
  z-index: -1;
}

li > div.username {
  width: 100%;
  color: #000;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  height: 1.8rem;
  line-height: 1.8rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0 15px;
}
</style>

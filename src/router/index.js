import Widget from '@/pages/Widget.vue';
import HelloWorld from '@/pages/HelloWorld.vue';

const widget = {
  name: 'widget',
  component: Widget,
};

const helloWorld = {
  name: 'helloWorld',
  component: HelloWorld,
};

export default {
  default: helloWorld,
  '/helloworld': helloWorld,
  '/widget': widget,
};

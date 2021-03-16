<template>
  <ul :style="ulStyle">
    <AppIcon v-for="icon in icons" :icon="icon" :key="icon.id" />
  </ul>
</template>

<script>
import AppIcon from '@/components/widgets/phone/AppIcon';

export default {
  components: {
    AppIcon,
  },
  props: {
    appCountPerRows: {
      type: Number,
      //       default: 4,
    },
  },
  data() {
    return {
      icons: {
        MrStanDu33: {
          id: 1,
          iconUrl:
            'https://pbs.twimg.com/media/EwGz6v3XAAAMwg-?format=jpg&name=large',
          username: 'BastiUI',
        },
        BastiUX: {
          id: 'test2',
          iconUrl:
            'https://image.spreadshirtmedia.net/image-server/v1/compositions/T812A1PA3811PT17X264Y87D179075035FS3602Cx000000/views/1,width=500,height=500,appearanceId=1,noPt=true/agrid-t-shirt-premium-homme.jpg',
          username: 'BastiUX',
        },
        Bastogne: {
          id: 'test3',
          iconUrl:
            'https://cdn.mcommerce.franprix.fr/product-images/3056440070896_A1L1_s03',
          username: 'Bastogne',
        },
        'Basté ça Bastagne': {
          id: 'test4',
          iconUrl: 'https://i.ytimg.com/vi/PsscGsO1V4o/maxresdefault.jpg',
          username: 'Basté ça Bastagne',
        },
        BastOS: {
          id: 'test5',
          iconUrl:
            'https://image.spreadshirtmedia.net/image-server/v1/compositions/T812A2PA3811PT17X248Y66D167669567FS935/views/1,width=500,height=500,appearanceId=2,noPt=true/10deder-simple-rainbw-t-shirt-premium-homme.jpg',
          username: 'BastOS',
        },
        BastiBoquet: {
          id: 'test6',
          iconUrl:
            'https://pbs.twimg.com/media/EwGzi3yWEAIWbup?format=jpg&name=large',
          username: 'BastiBoquet',
        },
      },
    };
  },
  mounted() {},
  computed: {
    ulStyle() {
      return {
        '--appCountPerRows': this.appCountPerRows,
      };
    },
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(var(--appCountPerRows), minmax(100px, 300px));
  grid-gap: 35px 20px;
  list-style: none;
}
</style>

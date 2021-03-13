<template>
  <div>widget</div>
</template>

<script>
export default {
  data() {
    return {
      chatSocket: null,
      accessToken: process.env.VUE_APP_ACCESS_TOKEN,
      chatUsername: process.env.VUE_APP_CHAT_USERNAME,
      chatChannel: process.env.VUE_APP_CHAT_CHANNEL,
    };
  },
  created() {},
  mounted() {
    this.initChatConnection();
  },
  methods: {
    initChatConnection() {
      this.chatSocket = new WebSocket('wss://irc-ws.chat.twitch.tv:443');

      this.chatSocket.onerror = this.onChatError;
      this.chatSocket.onclose = this.onChatClose;
      this.chatSocket.onopen = this.onChatOpen;
      this.chatSocket.onmessage = this.onChatMessage;
    },
    onChatError(error) {
      console.log(error);
    },
    onChatClose() {
      console.log('Connexion terminé.');
    },
    onChatOpen() {
      console.log('Connexion établie.');

      // log to network
      this.chatSocket.send(`PASS oauth:${this.accessToken}`);
      this.chatSocket.send(`NICK ${this.chatUsername}`);
      this.chatSocket.send('CAP REQ :twitch.tv/commands');

      // connect to channel
      this.chatSocket.send(`JOIN #${this.chatChannel}`);

      // send message
      this.chatSocket.send(
        `PRIVMSG #${this.chatChannel} :Chat listener now logged in !`,
      );
    },
    onChatMessage({ data }) {
      if (data === 'PING :tmi.twitch.tv') {
        return this.chatSocket.send('PONG :tmi.twitch.tv');
      }

      const actionTypeRegex = /([A-Z]+[^ ])/;
      const actionType = data.match(actionTypeRegex)[1];

      const userToDeleteRegex = /(?:[A-Z]+[^:].*:)(.*)/;
      const usernameRegex = /^:([^!]*)/;

      if (actionType === 'CLEARCHAT') {
        const user = data.match(userToDeleteRegex)[1];
        return this.removeUser(user);
      }

      if (actionType === 'PRIVMSG') {
        const user = data.match(usernameRegex)[1];
        return this.addUser(user, data);
      }
      return console.log(data);
    },
    addUser(username, message) {
      console.log(`Message from ${username}`);
      console.log(message);
    },
    removeUser(username) {
      console.log(`delete ${username}`);
    },
  },
};
</script>

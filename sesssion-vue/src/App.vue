<template>
  <main class="w-screen h-screen grid place-content-center">
    <input type="text" v-model="text" />
    <button
      class="text-lg py-2 px-5 bg-teal-500 text-white rounded shadow-lg"
      @click="send"
    >
      Test
    </button>
  </main>
</template>

<script>
import { io } from "socket.io-client";
export default {
  data: () => ({
    socket: {},
    context: {},
    text: "",
  }),
  created() {
    const socket = new io("ws://localhost:8080");
    this.socket = socket;

    socket.emit("connection");
  },
  methods: {
    send() {
      this.socket.emit("message", this.text);
    },
  },
};
</script>

<style></style>

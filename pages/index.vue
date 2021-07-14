<template>
  <div class="index">
    <div class="quote">
      <p>
        "something (even silly)"
        <br />
        <a
          href="https://github.com/speedrun-website/speedrun.website/pull/1#discussion_r669887760"
          target="_blank"
          >- legrandgrand 2021</a
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.index {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background: linear-gradient(270deg, #12c2e9, #c471ed, #f64f59);
  background-size: 600% 600%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.quote {
  background-color: #fff;
  padding: 2rem;
  border: solid #c4c4c4 1px;
  border-radius: 0.5rem;
}

.quote * {
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.5rem;
  margin: 0;
}

.quote a {
  float: right;
  text-decoration: none;
}
</style>

<template>
  <v-app>
    <div class="wrapper">
      <header class="header">
        <v-container>
          <v-row>
            <v-col>
              <img src="logo.png" contain class="logo" />
            </v-col>
          </v-row>
          <v-row class="menu"
            ><v-col>
              HELLO >> <nuxt-link to="/">HOME</nuxt-link> |
              <nuxt-link to="/work">WORK</nuxt-link> |
              <nuxt-link to="/profile">PROFILE</nuxt-link>
            </v-col>
          </v-row>
        </v-container>
      </header>
      <section class="contents">
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              <nuxt />
            </v-col>
            <v-col col="12" md="2">
              <div>
                <div class="title">Nemoto Masaharu({{ age }})</div>
                <div class="photo"></div>
                <div class="comment"></div>
                <div class="comment"></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <footer class="footer"></footer>
    </div>
  </v-app>
</template>

<script>
import dayjs from 'dayjs';

export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@1,500&display=swap',
      },
    ],
  },
  computed: {
    age: () => dayjs().diff(dayjs('1989-6-16'), 'year'),
  },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;

  .header {
    border-bottom: rgb(189, 189, 189) 1px solid;
    padding-bottom: 1rem;
    box-shadow: 2px 2px 4px black;

    .logo {
      margin-left: -8px;
      width: 100%;
      min-width: 300px;
      max-width: 480px;
    }
    .menu {
      margin-top: -64px;
      font-family: 'Barlow Condensed', sans-serif;
    }
  }

  .contents {
    flex-grow: 1;
    flex-shrink: 0;
    background: rgb(250, 250, 250);
  }
}
</style>

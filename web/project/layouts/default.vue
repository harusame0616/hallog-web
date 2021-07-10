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
          <nuxt />
        </v-container>
      </section>
      <footer class="footer"></footer>
    </div>
  </v-app>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@1,500&display=swap',
      },
    ],
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

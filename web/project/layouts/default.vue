<template>
  <v-app>
    <div class="wrapper">
      <header class="header">
        <v-container>
          <v-row>
            <v-col>
              <v-img
                src="logo.png"
                contain
                min-width="300"
                max-width="480"
                class="ml-n3"
              />
            </v-col>
          </v-row>
          <v-row style="margin-top: -64px" class="menu"
            ><v-col> HELLO >> HOME | WORK | PROFILE </v-col>
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
    margin-bottom: 1rem;
    .menu {
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

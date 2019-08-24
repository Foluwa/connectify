<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item @click>
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Google Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click>
          <v-list-item-action>
            <v-icon>contact_mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Search Groups</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item-content>
          <Search />
        </v-list-item-content>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Connectify</v-toolbar-title>
    </v-app-bar>

    <v-content style="
    background: rgba(256,256,256,256);">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">Hello World</v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Search from "./components/Search";

export default {
  name: "App",
  components: { Search },
  data: () => ({
    //
  })
};
</script>

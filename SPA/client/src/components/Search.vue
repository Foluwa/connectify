<template>
  <div>
    <v-app id="inspire">
      <v-form>
        <v-container>
          <v-row>
            <v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="e6"
                  :items="states"
                  :menu-props="{ maxHeight: '400' }"
                  label="Select"
                  multiple
                  hint="Pick your favorite states"
                  persistent-hint
                ></v-select>
              </v-col>
              <br />
              <v-text-field filled label="Search Groups" prepend-inner-icon="place"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-app>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>

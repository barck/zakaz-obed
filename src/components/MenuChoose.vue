<template>
  <div class="menu-add">
    <div class="week-menu">
        <v-card class="week-menu-item" v-for="dayMenu in daysMenu" :key="dayMenu.id">
          <v-card-title><h4>{{ dayMenu.day }}</h4></v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-content>Суп::</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ dayMenu.soup }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Салат 1:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ dayMenu.salad1 }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Салат 2:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ dayMenu.salad2 }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Основное блюдо 1:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ dayMenu.mainDish1 }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Основное блюдо 2:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ dayMenu.mainDish2 }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      <div class="menu-choose-form">
        <v-form ref="form">
          <v-text-field
              v-model="user"
              label="Ваше имя"
          ></v-text-field>
          <v-switch label="Суп" v-model="soup"></v-switch>
          <v-radio-group v-model="salad1" column>
            <v-radio label="Option 1" value="radio-1" ></v-radio>
            <v-radio label="Option 2" value="radio-2"></v-radio>
          </v-radio-group>
          <v-btn large color="warning">
            Отправить
          </v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MenuChoose',
  data() {
    return {
      days: [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
      ],
      daysMenu: [],
      day: '',
      user: '',
      soup: '',
      salad1: '',
      salad2: '',
      mainDish1: '',
      mainDish2: '',
    };
  },
  methods: {
    /* eslint-disable no-console */
    sendMenu() {
      axios.post('http://localhost:3000/menu', { day: this.day, soup: this.soup, salad: this.salad, mainDish1: this.mainDish1, mainDish2: this.mainDish2 })
        .then((response) => {
          console.log(response);
          this.getDaysMenu();
          this.$refs.form.reset();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDaysMenu() {
      axios.get('http://localhost:3000/menu')
        .then((response) => {
          this.daysMenu = response.data;
        });
    },
  },
  mounted() {
    this.getDaysMenu();
  },
};
</script>


new Vue({
  el: '#app',
  methods: {
    addName: function() {
      this.people.push({
        firstName: this.firstNameInputValue,
        lastName: this.lastNameInputValue,
        favorite: this.favoriteInputValue
      })
      this.firstNameInputValue = '';
      this.lastNameInputValue = '';
      this.favoriteInputValue = false;
    },
    sayName: function (p) {
      return `${p.firstName} ${p.lastName}`;
    }
  },
  data: {
    favoriteInputValue: false,
    firstNameInputValue: '',
    lastNameInputValue: '',
    people: [
      {
        firstName: 'Seth',
        lastName: 'Wright',
        favorite: true
      },
      {
        firstName: 'Carolina Grace',
        lastName: 'Kennedy',
        favorite: false
      },
      {
        firstName: 'Alma',
        lastName: 'Washington',
        favorite: true
      }
    ]
  }
});
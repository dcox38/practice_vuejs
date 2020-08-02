var app = new Vue({
  el: "#app",
  data: {
    message: "Yo yo yo, happy Sunday!!!",
    greeting: "Top of the morning!"
  },
  methods: {
    changeGreeting: function() {
      this.message = "Happy Monday!";
      this.greeting = "Mondays are the worst.";
    }
  }
});
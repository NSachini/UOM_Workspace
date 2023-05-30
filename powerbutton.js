new Vue({
    el: 'body',
    data: {
      lights: true
    },
    methods: {
      flipSwitch: function() {
        this.lights = !this.lights;
      }
    }
  });
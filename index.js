window.addEventListener('load', function () {
  var app2 = new Vue({
    el: '#app',
    data: {
      username: 'fake garry',
      bg: 'url(\'https://files.facepunch.com/forum/upload/1/290b95f6-dde2-4536-8bf9-ade0d42833d0/ForumBg.png\')',
      ava: 'https://files.facepunch.com/f/ua/1/2062afd9',
      w: '79',
      h: '79',
      gold: false,
    },
    methods: {
      updateBackground(event) {
        var reader  = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        callback = function () {
          this.$data.bg = 'url(\'' + reader.result + '\')';
        };
        reader.addEventListener("load", callback.bind(this), false);
      },
      updateAvatar(event) {
        var reader  = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        callback = function () {
          this.$data.ava = reader.result;
        };
        reader.addEventListener("load", callback.bind(this), false);
      }
    }
  })
})

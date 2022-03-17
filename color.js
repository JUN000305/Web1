var Body = {
    setBackGroundColor: function (color) {
      document.querySelector("body").style.backgroundColor = color;
    },
    setColor: function (color) {
      document.querySelector("body").style.color = color;
    },
  };
  function colorLinks(color) {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      if (links[i].href) {
        links[i].style.color = color;
      }
    }
  }
  function nightDayHandler(self) {
    if (self.value === "night") {
      Body.setBackGroundColor("black");
      Body.setColor("white");
      colorLinks("white");
      self.value = "day";
    } else {
      Body.setBackGroundColor("white");
      Body.setColor("black");
      colorLinks("black");
      self.value = "night";
    }
  }
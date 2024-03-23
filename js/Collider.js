AFRAME.registerComponent("coin", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        //id
        const id = `coin${i}`;
  
        //position variables
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 5 + 5;
        const posZ = Math.random() * 60 + -40;
  
        const position = {x: posX, y: posY, z: posZ};
  
        //call the function
        this.createCoins(id, position);
      }
    },
    createCoins: function (id, position) {
      //Get the terrain element
      const treasureEntity = document.querySelector("#treasureCoins");
  
      //creating the bird model entity
      var coinEl = document.createElement("a-entity");
  
      //Setting multiple attributes
      coinEl.setAttribute("id", id);
  
      coinEl.setAttribute("position", position);
      coinEl.setAttribute("material", "color", "#ff9100");
      
      
      coinEl.setAttribute("geometry", { primitive: "circle",radius: 1});
      coinEl.setAttribute("gltf-model", "./assets/models/coin/scene.gltf");
  
      //animated models
      coinEl.setAttribute("animation", {
        property: "rotation",
        to: "0 360 0",
        loop: "true",
        dur: 1000
      });
  
      //append the bird entity as the child of the terrain entity
      terrainEl.appendChild(coinEl);
    }
  });
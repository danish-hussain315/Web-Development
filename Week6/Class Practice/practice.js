const color_arr = ["#B6D094" , "#BE8A60" , "#6A2E35" , "#2E2836"];
    const button = document.getElementById("button");
    const container = document.getElementById("main");
    function fun(){
      const rand = parseInt(Math.random() * (4 - 0));
      const circle = document.createElement("div");
      circle.style = "width: 150px; height: 150px; background-color: "+color_arr[rand]+"; border-radius: 50%; margin: 10px; /* Adjust as needed */";
      container.appendChild(circle);
    }
function TheFirstSlider() {
    let boxSliderBrands = document.getElementById("flexSliderBrands");
    let row = 0;
  
   
    function rowLeft() {
      if (row === 300) {
        row = 0;
        boxSliderBrands.style.right = row + "%";
      } else {
        row = row + 100;
        boxSliderBrands.style.right = row + "%";
      }
    }
    rowLeft();
  
    let r;
  
    function play() {
      r = setInterval(rowLeft, 2000);
    }
    play();
  
    function stup() {
      clearInterval(r);
    }
  }
  TheFirstSlider();


  function toggleActive(event) {
    var links = document.querySelectorAll('.navbar a');
    links.forEach(function(link) {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
  }




  let boxes = [
    { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatesmodi et, nulla soluta non quaerat quis exercitationem sapiente! Quoquam nisi facere deleniti molestias dolor ratione sint unde inventoreodit." },
    { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatesmodi et, nulla soluta non quaerat quis exercitationem sapiente! Quoquam nisi facere deleniti molestias dolor ratione sint unde inventoreodit." },
    { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatesmodi et, nulla soluta non quaerat quis exercitationem sapiente! Quoquam nisi facere deleniti molestias dolor ratione sint unde inventoreodit." },
  ];

  document.getElementById("textBox1").innerHTML = boxes[0].text;
  document.getElementById("textBox2").innerHTML = boxes[1].text;
  document.getElementById("textBox3").innerHTML = boxes[2].text;

  function showFullText(boxId) {
    let boxElement = document.getElementById(boxId);
    boxElement.style.whiteSpace = "normal";
  }
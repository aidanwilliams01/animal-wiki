window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const animalInput = document.querySelector("input").value;
    if (animalInput.toLowerCase() === "turtle") {
      document.querySelector("img").src = "img/turtle.jpg";
      document.querySelector("img").alt = "An image of a turtle";
      document.querySelector("p").innerText = "Turtles are an order of reptiles known as Testudines, characterized by a special shell developed mainly from their ribs. Modern turtles are divided into two major groups, the Pleurodira and Cryptodira, which differ in the way the head retracts.";
    }
    else if (animalInput.toLowerCase() === "snake") {
      document.querySelector("img").src = "img/snake.avif";
      document.querySelector("img").alt = "An image of a snake";
      document.querySelector("p").innerText = "Snakes are elongated, limbless, carnivorous reptiles of the suborder Serpentes. Like all other squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales.";
    }
    else if (animalInput.toLowerCase() === "insect") {
      document.querySelector("img").src = "img/insect.jpg";
      document.querySelector("img").alt = "An image of insects";
      document.querySelector("p").innerText = "Insects are pancrustacean hexapod invertebrates of the class Insecta. They are the largest group within the arthropod phylum. Insects have a chitinous exoskeleton, a three-part body, three pairs of jointed legs, compound eyes and one pair of antennae.";
    }
    else {
      document.querySelector("img").src = "";
      document.querySelector("img").alt = "";
      document.querySelector("p").innerText = "Input error";
    }
    document.querySelector("div").setAttribute("class", "");
  }
}
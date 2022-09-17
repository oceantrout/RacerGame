let draw = false;

const generateRandomColour = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const changeColor = (e) => {
  //   $(e.target).addClass("pink");
  $(e.target).css("background-color", generateRandomColour());
};

const generateCanvas = (size = 1000) => {
  $(".canvas").empty(); // clear canvas container

  for (let i = 0; i < size; i++) {
    const $div = $("<div>").addClass("square");
    $(".canvas").append($div);
  }

  $(".square").on("mouseover", (e) => {
    if (draw) changeColor(e);
  });
};

$(() => {
  // allow drawing on canvas when clicked
  $(".canvas").on("mousedown", () => {
    draw = true;
  });

  // disable drawing when click is released
  $(".canvas").on("mouseup", () => {
    draw = false;
  });

  $("form").on("submit", (e) => {
    e.preventDefault();
    const size = $("#input-box").val();
    $(e.currentTarget).trigger("reset");
    generateCanvas(size);
  });

  generateCanvas();
});

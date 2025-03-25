import React from "react";


function Placeholders() {
  return (
    <>
      <div class="card">
  <img src="https://i.pinimg.com/736x/ff/65/30/ff6530bb1318cffdd653a69975147466.jpg" class="card-img-top" alt="..."/>

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" aria-hidden="true">
  <img src="https://i.pinimg.com/736x/34/fa/d9/34fad9f35f3ca47a961cf9d6de7c4f50.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>
    </>
  );
}

export default Placeholders;
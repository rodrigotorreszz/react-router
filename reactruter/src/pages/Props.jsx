function   Card({titulo, infomacion, estudios, anexo}) {
    return (
<>

<div class="card">
  <div class="card-body">
    <h5 class="card-title">{titulo}</h5>
    <p class="card-text">{infomacion}</p>
    <p class="card-text"><small class="text-body-secondary">{estudios}</small></p>
    <p class="card-text"><small class="text-body-secondary">{anexo}</small></p>
  </div>
  <img src="./public/xg.png" class="card-img-bottom" alt="..."/>
</div>

</>
    )
  }
  export default Card
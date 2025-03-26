function   Card({titulo, infomacion, estudios, anexo}) {
    return (
<>

<div className="card" style={{width:"50%"}}>
  <div className="card-body">
    <h5 className="card-title">{titulo}</h5>
    <p className="card-text">{infomacion}</p>
    <p className="card-text"><small className="text-body-secondary">{estudios}</small></p>
    <p className="card-text"><small className="text-body-secondary">{anexo}</small></p>
  </div>
  <img src="/gengar.jpg" className="card-img-bottom" alt="..."/>
</div>

</>
    )
  }
  export default Card
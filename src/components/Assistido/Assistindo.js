function Assistido( {visto} ) {
   
    if (visto) {
      return (
        <div>
          <button onClick={Assistindo}>Assistir novamente</button>
        </div>
      )
    }
    return (
      <div>
        <button onClick={Assistindo}>Assistir</button>
      </div>
    )
}
  function Assistindo() {
    window.alert('Assistindo')
  }

export default function Assistir(javisto){
    return(
        <Assistido visto={javisto}/>
    )
}
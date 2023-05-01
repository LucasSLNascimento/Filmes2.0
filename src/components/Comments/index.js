
const commentarios = [{
  "usuario": "Anônimo",
  "coment": "Filme interessante"
},
{
    "usuario": "Anônimo",
    "coment": "Curti muito"
},
{
    "usuario": "Anônimo",
    "coment": "Muito legal"
}]
        

export default function Comments({ filme }) {

    return (
        <div className="container text-center">
            <h3>Comentários sobre o filme {filme}</h3>
            {commentarios.map((comentario, i) => (
                <div>
                   <p>Usuário: {comentario.usuario}</p>
                    <p>Comentário: {comentario.coment}</p> 
                </div>
                
            ))}
        </div>
    )
}
import { useState } from "react";

export default function Main(){
    const[name, setNome] = useState ("");
    const [Tel, setTel] = useState ("");
    const [Email,setEmail] = useState ("");

    const [listaContatos,setListaContatos] = useState([]);
    
    const registar = (event) => {
        event.preventDefault();
        alert("Contato Adicionado");
        {listaContatos}
        setListaContatos([...listaContatos,{
            CriarContato:name,
            AdicionarTelefone:Tel,
            AdicionarEmail:Email
        }])
    }

    const remover = (id) => {
        const novaLista = listaContatos.filter(
            (contato, index)=>{
                if(index !== id){
                    return contato
                }else{
                    return null;
                }
            }
        );
        setListaContatos(novaLista)
    }
    console.table(listaContatos)

    return(
        <main>
            <form  className="form-container" action="" onSubmit={registar} >
                <label htmlFor="nome">Nome:</label>
            <input
            placeholder="Nome"
                type="text"
                name=""
                id=""
                onChange={(event)=> setNome(event.target.value)}
            />
            <input 
            placeholder="Telefone"
            type="tel"
            name=""
            id=""
            onChange={(event)=> setTel(event.target.value)}
            />

                            <label htmlFor="email"></label>
                            <input
                            placeholder="Email"
                type="email"
                name=""
                id=""
                onChange={(event)=> setEmail(event.target.value)}
            />

            {name}
            {Tel}
            {Email}
            <button className="cadastrar-contact-bnt">
                Cadastrar Contato
            </button>
            </form>
            {listaContatos.map((contato, index)=>
            <div key={index}>
                <p>{contato.nomeSalvo}</p>
                <p>{contato.teleoneSalvo}</p>
                <button className="remove-contact-btn" onClick={() => remover(index)}>Remover Contato</button>
            </div>
            )}
        </main>
   
    );
}
import { useState } from "react";

export default function Main(){
    const[name, setNome] = useState ("");
    const [Tel, setTel] = useState ("");
    const [listaContatos,setListaContatos] = useState([]);
    
    const registar = (event) => {
        event.preventDefault();
        alert("Contato Adicionado");
        {listaContatos}
        setListaContatos([...listaContatos,{
            CriarContato:name,
            AdicionarTelefone:Tel
        }])
    };

    console.table(listaContatos)

    return(
        <main>
            <form action="" onSubmit={registar} >
                <label htmlFor="nome">Nome:</label>
            <input
                type="text"
                name=""
                id=""
                onChange={(event)=> setNome(event.target.value)}
            />

            <input
            type="tel"
            name=""
            id=""
            onChange={(event)=> setTel(event.target.value)}
            />
            {name}
            {Tel}
            <button>
                Cadastrar Contato
            </button>
            </form>
        </main>
           
        
    );
}
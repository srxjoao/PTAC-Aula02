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
    };

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
            <button>
                Cadastrar Contato
            </button>
            </form>
        </main>
           
        
    );
}
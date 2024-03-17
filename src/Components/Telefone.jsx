import { useState } from "React";

export default function Telefone (){
    const [Tel, setTel] = useState ("");
    return(
        <main>
                  <input
            type="tel"
            name=""
            id=""
            onChange={(event)=> setTel(event.target.value)}
            />
            {Tel}
            </main>
    );
}
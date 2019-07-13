import { http } from './config'

export default {
    listar(){
        return http.get('produtos')
    },
    
    salvar: (produto) =>{
        //Tem que passar o produto que vem por parametro
        return http.post('produtos', produto)

    },

    atualizar: (produto) =>{
        //Tem que passar o produto que vem por parametro
        return http.put('produtos', produto)

    },

} 
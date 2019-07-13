
<template>

<div class="container">
  <h1>Cadastro de Produtos</h1>
  
  <form @submit.prevent="salvar">
    
  <div class="form-row">
    <div class="col">
      <input type="text"  class="form-control"  placeholder="Descrição" v-model="produto.descricao">
    </div>
    <div class="col">
      <input type="text"   class="form-control" placeholder="Referencia" v-model="produto.referencia">
    </div>
    <div class="col">
      <input type="number"  class="form-control" placeholder="Preco" v-model="produto.preco">
    </div>
    <div class="col">
      <input type="number"  class="form-control" placeholder="Estoque" v-model="produto.estoque">
    </div>
    <button type="submit" class="btn btn-success">Salvar</button>
    
  </div>
</form>

<br>
<br>
<br>

 <table class="table ">
    <thead class="thead-dark">
    <tr>
      <th scope="col">Codigo</th>
      <th scope="col">Descricao</th>
      <th scope="col">Refencia</th>
      <th scope="col">Preco</th>
      <th scope="col">Estoque</th>
      <th scope="col">Estoque</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="produto of produtos" :key="produto.id">
      <td>{{ produto._id }}</td>
      <td>{{ produto.descricao }}</td>
      <td>{{ produto.referencia }}</td>
      <td>{{ produto.preco }}</td>
      <td>{{ produto.estoque }}</td>
      <td>
        <button type="submit" @click="editar(produto)" class="btn btn-success">Editar</button>
        <button type="submit"  class="btn btn-danger">excluir</button>
      </td>
      
    </tr>
    
  </tbody>
</table>
</div> 
</template>

<script>

import Produto from './services/produtos'
import produtos from './services/produtos';


export default {
  data(){
    return {
      produto: {
        _id: '',
        descricao: '',
        referecia: '',
        preco: '',
        estoque: ''

      },
      produtos: []

    }
  },
  mounted(){
    this.listar()    

  },
  methods: {
    listar(){
      Produto.listar().then(resposta => {
       //Usado para testar no console do browser
       // console.log(resposta.data)
       this.produtos = resposta.data
     })

    },    
    salvar(){
       if(!this.produto._id){
          Produto.salvar(this.produto).then(resposta =>{
          this.produto = {}        
          alert('Salvo com Sucesso')
          //Depois de salvar ele limpará a tela
          this.listar()         
        })
       }else{
          Produto.atualizar(this.produto).then(resposta =>{
            this.produto = {}        
            alert('Atualizado com Sucesso')
            //Depois de salvar ele limpará a tela
            this.listar()
            
        }) 

       }
    },
    editar(produto){
      this.produto = produto

    }
  }
}

</script>

<style>

</style>

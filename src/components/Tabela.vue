<template>
  <div>
    <table class="table table-sm table-hover">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Valor</th>
          <th scope="col">Parcelas</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(conta) in contas" :key="conta.id">
          <td>{{ conta.nome }}</td>
          <td>{{ conta.valor }}</td>
          <td>{{ conta.qtdDeParcelas }}</td>
          <td>
            <button class="btn btn-warning btn-sm" @click="$emit('editar', conta)">Editar</button> |
            <button class="btn btn-danger btn-sm" @click="$emit('excluir', conta)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {

    computed:{
        ...mapState(["contas"])
    },

    methods: {
        ...mapActions(["salvarConta", "listarContas", 
    "excluirConta", "atualizarConta"]),
    },
}

</script>
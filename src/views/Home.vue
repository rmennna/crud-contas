<template>
  <div class="container">
    <h1>Cadastro de Contas</h1>
    <form @submit.prevent="salvar(conta)">
      <div class="form-row">
        <div class="form-group col-md-6 col-sm-12">
          <label class="col-form-label">Conta:</label>
          <input type="text" class="form-control" v-model="conta.nome" required>
        </div>
        <div class="form-group col-md-12 col-sm-12">
          <label class="col-form-label">R$:</label>
          <input type="number" class="form-control col-md-2" v-model="conta.valor" placeholder="Valor da Parcela..." required>
        </div>
        <div class="form-group col-md-6 col-sm-12">
          <label class="col-form-label">Qtd. de Parcelas:</label>
          <input type="number" class="form-control col-md-2" v-model="conta.qtdDeParcelas" required>
        </div>
      </div>
      <br />
      <button type="submit" class="btn btn-primary">Salvar</button>
    </form>
    <br />
    
      <Tabela @editar="editarConta" @excluir="excluirConta" :conta="conta" />
    
  </div>
</template>

<script>
import Tabela from '../components/Tabela'
import { mapState, mapActions } from "vuex";

export default {
  name: "app",
  
  components:{ Tabela },
  
  data() {
    return {
      conta: {
        nome: "",
        valor: "",
        qtdDeParcelas: ""
      }
    };
  },
  mounted() {
    this.listarContas();
  },

  computed: {
    ...mapState(["contas"])
  },
  methods: {
    ...mapActions(["salvarConta", "listarContas", 
    "excluirConta", "atualizarConta"]),
    
    salvar(conta){
      if(!conta.id){
        this.salvarConta(conta)
        this.limparDados()
      } else {
        this.atualizarConta(conta);
        this.limparDados();
                
      }
    },

    editarConta(conta){
      this.conta = conta      
    },

    limparDados(){
      this.conta = {}
    },

    excluir(conta){      
      this.excluirConta(conta)
      //this.limparDados()
    }
  }
};
</script>
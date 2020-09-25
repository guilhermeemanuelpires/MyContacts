<template>
  <div class="container">
    <div class="groupCard">
      <h4>MEUS CONTATOS</h4>
      <form>
        <div class="form-row InpusCabecalho">
          <div class="form-group col-md-6">
            <label for="nome">Nome</label>
            <input type="text" id="nome" v-model="contact.nome" />
          </div>
          <div class="form-group col-md-6">
            <label for="sobrenome">Sobrenome</label>
            <input type="text" id="sobrenome" v-model="contact.sobrenome" />
          </div>
        </div>
      </form>

      <ul class="list-group">
        <li
          v-for="(contact, id) in contact.contatos"
          :key="id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          {{ contact.contato }}
          <span @click="del(id)">
            <img src="../assets/close.png" />
          </span>
        </li>
      </ul>

      <div v-bind:class="{ InputIcon: !isFocus, InputIconFoc: isFocus }">
        <div class="input-group mb-3">
          <div class="custom-file">
            <input
              type="text"
              placeholder="Adicionar Contato (Telefone, email, twitter, facebook)"
              v-model="contato"
              @focus="setIsFocused()"
              @blur="setIsFocused()"
            />
            <span v-if="contato || isFocus" @click="add()">
              <img class="bntEnt" src="../assets/enter.png" />
            </span>
          </div>
        </div>
      </div>

      <div class="gorupButtons row">
        <div class="col-md-6">
          <div class="btn-salvar" @click="save()">Salvar</div>
        </div>
        <div class="col-6">
          <div class="btn-cancelar" @click="clear()">Cancelar</div>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
import Contact from "../services/models/contacts";

export default {
  name: "Home",
  data() {
    return {
      isFocus: false,
      contato: "",
      contact: {
        nome: "",
        sobrenome: "",
        contatos: []
      }
    };
  },
  methods: {
    clear() {
      this.contato = "";
      this.contact.nome = "";
      this.contact.sobrenome = "";
      this.contact.contatos = [];
    },
    save() {
      if (this.contact.nome && this.contact.sobrenome) {
        Contact.Create(this.contact).then(response => {
          console.log(response.data);
          this.clear();
        });
      }
    },
    del(id) {
      this.contact.contatos.splice(id, 1);
    },
    add() {
      if (this.contato) {
        this.contact.contatos.push({ contato: this.contato });
        this.contato = "";
      }
    },
    setIsFocused() {
      this.isFocus = !this.isFocus;
    }
  }
};
</script>

<style>
h4 {
  color: #1b3949;
  padding-bottom: 32px;
}

label {
  color: #8d8d8d;
  transition: 0.3s;
  margin: 0%;
}

.groupCard {
  padding: 5%;
  padding-left: 10%;
  padding-right: 10%;
}

.container {  
  margin: 5%;
  box-shadow: 0px 3px 6px #00000029;
}

.list-group img {
  cursor: pointer;
  width: 20px;
  height: 20px;
}

.InpusCabecalho input[type="text"] {
  border-radius: 8px;
  margin-top: 8px;
  width: 100%;
  height: 40px;
  padding: 15px;
  outline: none;
  transition: 0.3s;
}

.InpusCabecalho input[type="text"] :focus {
  border: 1px solid #95989a;
  box-shadow: 0 0 3px 0 #00000029;
}

.list-group {
  padding-bottom: 0px;
}

.InputIcon {
  border: 2px dashed #95989a;
}

.InputIconFoc {
  border: 2px solid #95989a;
}

.InputIcon input[type="text"] {
  width: 100%;
  margin-top: 15px;
  border: 0;
  padding: 8px;
  outline: none;
  box-sizing: border-box;
  padding-left: 70px;
  padding-right: 40px;
  background: url("../assets/plus.png") no-repeat;
  background-position: 15px 5px;
}

.InputIconFoc input[type="text"]:focus {
  width: 100%;
  margin-top: 15px;
  border: 0;
  padding: 8px;
  outline: none;
  box-sizing: border-box;
  padding-left: 70px;
  padding-right: 40px;
  background: url("../assets/plus.png") no-repeat;
  background-position: 15px 5px;
}

.bntEnt {
  width: 60%;
  padding-top: 15px;
  padding-right: 4px;
  cursor: pointer;
  transition: 0.3s;
}

.gorupButtons {
  margin-top: 55px;
}

.btn-salvar {
  border-style: none;
  color: #ffffff;
  background-color: #ffa700;
  border-radius: 35px;
  top: 615px;
  left: 398px;
  width: 188px;
  height: 40px;
  margin-left: 80;
  border: 0;
  cursor: pointer;
  text-align: center;
  padding-top: 8px;
  font: bold;
  transform-box: 0.3s;
  font-weight: bold;
}

.btn-salvar:hover {
  background-color: #f29849;
  transition: 0.3s;
}

.btn-salvar :active {
  opacity: 0.8;
  transition: 0.2;
}

.btn-cancelar {
  border-style: none;
  color: #8d8d8d;
  background-color: #ffffff;
  border-radius: 35px;
  top: 615px;
  left: 398px;
  width: 188px;
  height: 40px;
  margin-left: 80;
  border: 0;
  cursor: pointer;
  text-align: center;
  padding-top: 8px;
  margin-left: 150;
  font-weight: bold;
}

.btn-cancelar:hover {
  color: #ffffff;
  background-color: #8d8d8d;
  transition: 0.3s;
}

.btn-cancelar :active {
  opacity: 0.8;
  transition: 0.2;
}
</style>
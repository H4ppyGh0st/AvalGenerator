const { createApp } = Vue

createApp({
  data() {

    return {
      nombreCompleto: '',
      documento: '',
      tipoDocumento: '',
      ciudadExp: '',
      correo: ''
    }
  },

  methods: {

    CrearPdf() {

    },

    NombreNoNumerico() {

      const miRango = new RegExp('^[0-9]+$', 'i');

      if (miRango.test(this.nombreCompleto)) {
        alert("Por favor coloque un nombre adecuado")
      }

    },

    VerifiCampos() {

      let campos = [this.nombreCompleto, this.documento,
      this.ciudadExp, this.correo, this.tipoDocumento]

      let cantidadPalabras = this.nombreCompleto.split

      for (var unCampo = 0; unCampo <= campos.length; unCampo++) {

        if (this.ValidarInputNoVacio(campos[unCampo]) == false) {
          alert("Faltan Campos Por Llenar")
          break;

        }
      }




    },

    VerifiCorreo() {

      if (this.correo.includes("@") == false) {

        alert("Correo Incorrecto")

      }

    },

    prueba(){
      console.log(this.ValidarInputNoVacio(this.nombreCompleto));
    },

    ValidarInputNoVacio(inputValidar) {

      let cantidadPalabras = inputValidar.split(" ");
      let cantidadPalabras2 = [];

      for (var i = 0; i <= cantidadPalabras.length; i++) {

        if (cantidadPalabras[i] !== undefined && cantidadPalabras[i] !== "") {
        
          cantidadPalabras2.push(cantidadPalabras[i]);
        }


      }

      if (cantidadPalabras2.length == 0) {

        return false;

      } else {
        let nombre;
        
        for (var i = 0; i <= cantidadPalabras2.length; i++) {
          if (cantidadPalabras2[i] !== undefined) {
            console.log(cantidadPalabras2[i]);
            if (i == 0) {
              nombre = cantidadPalabras2[i];
            } else {
              nombre += " " + cantidadPalabras2[i];
            }
          }
        }

        if(nombre == inputValidar){
          return true;
        } else{
          return false;
        }
      }


    },


   


  






  }
}).mount('#app')


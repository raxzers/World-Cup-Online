import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { clientsModel } from 'src/app/MODELS/clientsModel';
import { paisModel } from 'src/app/MODELS/paisModel';
import { UserService } from 'src/app/SERVICES/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private formBuilder: FormBuilder, private toastr: ToastrService) { }
  form: FormGroup;
  arrayPaises: any[];
  nombrePaises: any[];
  hide = true;
  condiciones: any[];

  correoCondicion: boolean = false;
  fechaCondicion: boolean = false;
  paisCondicion: boolean = false;
  terminosCondicion: boolean = false;
  nombreCondicion: boolean = false;
  apellidoCondicion: boolean = false;
  usuarioCondicion: boolean = false;
  numlength: any;
  numlength2: any;
  numlength3: any;
  btnState: boolean = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  ngOnInit(): void {
    this.arrayPaises = [];
    this.nombrePaises = [];
    this.condiciones = [];
    this.form = this.formBuilder.group({
      fechaNacimiento: ['', [Validators.required]],
      Nombre: ['', [Validators.required]],
      Apellido1: ['', [Validators.required]],
      paisControl: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
      usuario: ['', [Validators.required]],

    });
    this.obtenerPais();
  }
  obtenerPais() {
    this.arrayPaises = [];
    this.userService.obtenerPaises1().then(data => {
      this.arrayPaises as paisModel[];
      this.arrayPaises = data as paisModel[];
      for (let pais of this.arrayPaises) {
        var nombrePais = pais.Nombre;
        this.nombrePaises.push(nombrePais);
      }
      console.log(this.nombrePaises);
    });
  }
  guardarCliente() {
    this.verificarLlenado();
    this.verificarTipoEquipo();
    this.verificarFechas();
    this.verificarCorreo();
    this.verificarTerminos();
    if (this.verificarCondiciones()) {
      const cliente: clientsModel = {
        Fecha_Nacimiento: this.form.get('fechaNacimiento').value,
        Nombre: this.form.get('Nombre').value,
        Apellido1: this.form.get('Apellido1').value,
        Pais: this.form.get('paisControl').value,
        Correo: this.form.get('correo').value,
        Password: this.form.get('password').value,
        Username: this.form.get('usuario').value,
      }
      this.userService.guardarUsuario(cliente).subscribe(data => {
        this.toastr.success('Usuario Registrado', 'Agregado Exitosamente');
        this.form.reset();
      })

      console.log(this.form);
      console.log(cliente);
    } else {
      this.toastr.error('Faltan datos o no cumplen con los requesitos necesarios', 'Favor Completar Datos')
    }
  }
  openModal() {
    var data = null;//call api
    this.userService.openModal("Title1", "Message Test", () => {
      //confirmed
      console.log('Yes');
    }, () => {
      //not confirmed
      console.log('No');
    });
  }
  verificarFechas() {
    if (this.form.get('fechaNacimiento').value == "") {
      this.fechaCondicion = true;
    } else {
      this.fechaCondicion = false;
    }
  }
  verificarTipoEquipo() {
    var nombres = (document.getElementById("paises")) as HTMLSelectElement;
    var nombreSeleccionado = nombres.selectedIndex;
    console.log(nombreSeleccionado)
    if (nombreSeleccionado == -1) {
      this.paisCondicion = true;
    } else {
      this.paisCondicion = false;
    }
  }
  verificarCorreo(){
    if(this.form.get('correo').invalid){
      this.correoCondicion=true;
    }else {
      this.correoCondicion = false;
    }
  }
  verificarTerminos(){
    var componente =  (document.getElementById("terminos")) as HTMLInputElement;
    if(componente.checked){
        this.terminosCondicion=false;
    }else{
      this.terminosCondicion=true;
    }
  }
  verificarLlenado() {
    console.log(this.form.get('Nombre').value);
    if (this.form.get('Nombre').value == undefined || this.form.get('Nombre').value == '') {
      //this.toastr.warning("El nombre debe ser entre 5 y 30 caracteres")
      this.nombreCondicion = true;
    }
    else {
      this.nombreCondicion = false;
    }
    if (this.form.get('Apellido1').value ==undefined || this.form.get('Apellido1').value == '') {
      // this.toastr.warning("El nombre debe ser entre 5 y 30 caracteres")
      this.apellidoCondicion = true;
    }
    else {
      this.apellidoCondicion = false;
    }
    if (this.form.get('usuario').value == undefined || this.form.get('usuario').value == '') {
      // this.toastr.warning("El nombre debe ser entre 5 y 30 caracteres")
      this.usuarioCondicion = true;
    }
    else {
      this.usuarioCondicion = false;
    }
  }
  verificarCondiciones() {
    this.condiciones = [
      this.correoCondicion,
      this.fechaCondicion,
      this.paisCondicion,
      this.terminosCondicion,
      this.nombreCondicion,
      this.apellidoCondicion,
      this.usuarioCondicion,
    ]
    console.log(this.condiciones)
    if (this.condiciones.includes(true)) {
      if (this.condiciones[0] == true) {
        this.toastr.warning("El correo debe tener el formato correspondiente")
      }
      if (this.condiciones[1] == true) {
        this.toastr.warning("Debe ser mayor de edad")
      }
      if (this.condiciones[2] == true) {
        this.toastr.warning("Favor seleccionar un pais")
      }
      if (this.condiciones[3] == true) {
        this.toastr.warning("Favor Aceptar Terminos y Condiciones")
      }
      if (this.condiciones[4] == true) {
        this.toastr.warning("Se necesita un nombre para continuar")
      } if (this.condiciones[5] == true) {
        this.toastr.warning("Se necesita un apellido para continuar")
      }
      if (this.condiciones[6] == true) {
        this.toastr.warning("Se necesita un usuario para continuar")
      }
      return false
    } else {
      return true
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { clientsModel } from 'src/app/MODELS/clientsModel';
import { paisModel } from 'src/app/MODELS/paisModel';
import { UserService } from 'src/app/SERVICES/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,private formBuilder: FormBuilder) { }
  form: FormGroup;
  arrayPaises: any[];
  nombrePaises:any[];

  ngOnInit(): void {
    this.arrayPaises=[];
    this.nombrePaises=[];
    this.form =this.formBuilder.group({
      fechaNacimiento: ['', [Validators.required]],
      Nombre:['', [Validators.required]],
      Apellido1:['', [Validators.required]],
      paisControl:['', [Validators.required]],
      correo:['', [Validators.required]],
      password:['', [Validators.required]],
      usuario:['', [Validators.required]],

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

    });
  }
  guardarCliente() {
    const cliente: clientsModel = {
      Fecha_Nacimiento: this.form.get('apellido1').value,
      Nombre: this.form.get('Nombre').value,
      Apellido1: this.form.get('Apellido1').value,
      Pais: this.form.get('numeroTelefono').value,
      Correo: this.form.get('Correo').value,
      Password: this.form.get('Password').value,
      Rol: this.form.get('Rol').value+"T00:00:00",
      Username: "Username"
    }
    //this.clientService.guardarCliente(cliente).subscribe(data => {
     /// this.toastr.success('Tarjeta Guardada', 'Agregada Exitosamente');
     /// this.form.reset();
    ///})

    console.log(this.form);
    console.log(cliente);
  }

}

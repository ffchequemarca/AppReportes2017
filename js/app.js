//Declaramos Variable Globales
var FechaActual = new Date();
//FechaActual.setDate(25);
//FechaActual.setMonth(1);
var DiaActual= FechaActual.getDate();
var MesActual= FechaActual.getMonth();


//Creamos las Clases

function infoAnual (Nombre, Mes, Dia, App)
{
    this.Nombre=Nombre;
    this.Mes=Mes;
    this.Dia=Dia;
    this.App=App;
    
}

function infoMensual (Nombre,Dia, App)
{
    this.Nombre=Nombre;
    this.Dia=Dia;
    this.App=App;
}

function infoSemestral (Nombre, Mes1, Dia1, Mes2, Dia2, App)
{
    this.Nombre=Nombre;
    this.Mes1=Mes1;
    this.Dia1=Dia1;
    this.Mes2=Mes2;
    this.Dia2=Dia2;
    this.App=App;
}

function infoTrimestral (Nombre, Mes1, Dia1, Mes2, Dia2, Mes3, Dia3, Mes4, Dia4, App)
{
    this.Nombre=Nombre;
    this.Mes1=Mes1;
    this.Dia1=Dia1;
    this.Mes2=Mes2;
    this.Dia2=Dia2;
    this.Mes3=Mes3;
    this.Dia3=Dia3;
    this.Mes4=Mes4;
    this.Dia4=Dia4;
    this.App=App;
}

//Creamos las Metodos

//Metodos de la clase InfoAnual

infoAnual.prototype.Lista = function ()
{
    var FechaReporte = new Date();
    FechaReporte.setDate(this.Dia);
    FechaReporte.setMonth(this.Mes);

    var Diferencia = (FechaReporte-FechaActual)/(1000*60*60*24);
    if(Diferencia < 15 && Diferencia >= 0)
    {
          var li = document.createElement("li");
          var inputValue = this.Nombre + " || Fecha: " + this.Dia + "/"  +(this.Mes+1) + " || " + this.App;
          var t = document.createTextNode(inputValue);
          li.appendChild(t);
          
          document.getElementById("myUL").appendChild(li);
          
          var span = document.createElement("SPAN");
          var txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          li.appendChild(span);

          for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              var div = this.parentElement;
              div.style.display = "none";
            }
          }
    }
}

infoAnual.prototype.Alerta = function ()
{
    if(DiaActual==this.Dia && MesActual==this.Mes)
    {
        alert("Para Hoy Tienes: Informe "+this.Nombre + " || Aplicativo:" + this.App);
    }
    
}



//Metodos de la Clase InfoMensual
infoMensual.prototype.Lista = function ()
{
    var FechaReporte = new Date();
    FechaReporte.setDate(this.Dia);
    
    for(i=0; i<11; i++)
    {
        FechaReporte.setMonth(i);
        var Diferencia = (FechaReporte-FechaActual)/(1000*60*60*24);
        
        if (Diferencia<15 && Diferencia>=0)
        {
            if(Diferencia < 15 && Diferencia >= 0)
            {
                  var li = document.createElement("li");
                  var inputValue = this.Nombre + " || Fecha: " + this.Dia + "/"  +(i+1)+ " || " + this.App;
                  var t = document.createTextNode(inputValue);
                  li.appendChild(t);
                  
                  document.getElementById("myUL").appendChild(li);
                  
                  var span = document.createElement("SPAN");
                  var txt = document.createTextNode("\u00D7");
                  span.className = "close";
                  span.appendChild(txt);
                  li.appendChild(span);

                  for (i = 0; i < close.length; i++) {
                    close[i].onclick = function() {
                      var div = this.parentElement;
                      div.style.display = "none";
                    }
                  }
            }
        }
        
    }
    
}

infoMensual.prototype.Alerta = function ()
{
    if(DiaActual==this.Dia)
    {
        alert("Para Hoy Tienes: Informe "+this.Nombre+ " || Aplicativo: " + this.App);
    }
    
}


//Metodos de la Clase InfoSemestral

infoSemestral.prototype.Lista = function ()
{
    var FechaReporte = new Date();
    var Dias = [this.Dia1, this.Dia2];
    var Meses = [this.Mes1, this.Mes2];
    
    for(i=0;i<Dias.length;i++)
    {
        FechaReporte.setDate(Dias[i]);
        FechaReporte.setMonth(Meses[i]);

        var Diferencia = (FechaReporte-FechaActual)/(1000*60*60*24);

        
        if(Diferencia<15 && Diferencia>=0)
        {
            var li = document.createElement("li");
            var inputValue = this.Nombre + " || Fecha: " + Dias[i] + "/"  +(Meses[i]+1)+ " || " + this.App;
            var t = document.createTextNode(inputValue);
            li.appendChild(t);
            
            document.getElementById("myUL").appendChild(li);
          
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                  var div = this.parentElement;
                  div.style.display = "none";
                }
              }
        }
               
    }

    
    
}

infoSemestral.prototype.Alerta = function ()
{
    var FechaReporte = new Date();
    var Dias = [this.Dia1, this.Dia2];
    var Meses = [this.Mes1, this.Mes2];
    
    for(i=0;i<Dias.length;i++)
    {
        FechaReporte.setDate(Dias[i]);
        FechaReporte.setMonth(Meses[i]);
        
        if(Dias[i]==DiaActual && Meses[i]==MesActual)
        {
            alert("Para Hoy Tienes: Informe "+this.Nombre+ " || Aplicativo: " + this.App);   
        }
    }
    
}

//Creamos las Metodos de infoTrimestral

infoTrimestral.prototype.Lista = function ()
{
    var FechaReporte = new Date();
    var Dias = [this.Dia1, this.Dia2, this.Dia3, this.Dia4];
    var Meses = [this.Mes1, this.Mes2, this.Mes3, this.Mes4];
    
    for(i=0;i<Dias.length;i++)
    {
        FechaReporte.setDate(Dias[i]);
        FechaReporte.setMonth(Meses[i]);

        var Diferencia = (FechaReporte-FechaActual)/(1000*60*60*24);

        
        if(Diferencia<15 && Diferencia>=0)
        {
            var li = document.createElement("li");
            var inputValue = this.Nombre + " || Fecha: " + Dias[i] + "/"  +(Meses[i]+1)+ " || " + this.App;
            var t = document.createTextNode(inputValue);
            li.appendChild(t);
            
            document.getElementById("myUL").appendChild(li);
          
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                  var div = this.parentElement;
                  div.style.display = "none";
                }
              }
        }
               
    }

    
    
}

infoTrimestral.prototype.Alerta = function ()
{
    var FechaReporte = new Date();
    var Dias = [this.Dia1, this.Dia2, this.Dia3, this.Dia4];
    var Meses = [this.Mes1, this.Mes2, this.Mes3, this.Mes4];
    
    for(i=0;i<Dias.length;i++)
    {
        FechaReporte.setDate(Dias[i]);
        FechaReporte.setMonth(Meses[i]);
        
        if(Dias[i]==DiaActual && Meses[i]==MesActual)
        {
            alert("Para Hoy Tienes: Informe "+this.Nombre+ " || Aplicativo: " + this.App);   
        }
    }
    
}




//Creamos los objetos

//Informes Anuales

var ra1 = new infoAnual("Categoria CGR Personal y Costos", 2, 31, "CHIP");
var ra2 = new infoAnual("Cuenta Anual", 2, 1, "SIA");
var ra3 = new infoAnual("Informe Anual de Fiducias", 2, 31, "SIA");
var ra4 = new infoAnual("Decreto 2193", 3, 25, "CHIP");
var ra5 = new infoAnual("Audiencia Pública de Rendición de Cuentas", 3, 25, "Plataforma Supersalud");



//Informes Mensuales

var rm1 = new infoMensual("Deuda Publica", 1, "SICOF");
var rm2 = new infoMensual("Contratación Visible", 5, "SIA Observatorio");
var rm3 = new infoMensual("Resolucion 2175", 10, "Plataforma SISPRO");
var rm4 = new infoMensual("Circular 014", 20, "Plataforma Supersalud");



//Informes Semestrales

var rs1 = new infoSemestral("Ejecuciones Presupuestales de Ingresos y Egresos",6,29,2,1, "SIA");
var rs2 = new infoSemestral("Avance y cumplimiento de los planes de mejoramiento",6,20,2,1, "SIA");
var rs3 = new infoSemestral("Información Contable y Financiera",6,29,2,1, "SIA");
var rs4 = new infoSemestral("Circular Unica",1,25,6,31,"Plataforma Supersalud");
var rs5 = new infoSemestral("Resolucion 256",0,31,6,31,"Plataforma SISPRO");
var rs6 = new infoSemestral("Evaluacion Convenio 414",3,30,7,15,"Secretaría de Salud Departamental del Tolima");



//Informes Trimestrales
var rt1 = new infoTrimestral("Categoría CGR Presupuestal", 3,30,6,30,9,30,1,20, "CHIP");
var rt2 = new infoTrimestral("Categoría CGN Contable", 3,30,6,30,9,30,1,20, "CHIP");
var rt3 = new infoTrimestral("Decreto 2193", 4,15,7,15,10,15,2,15, "SIHO");
var rt4 = new infoTrimestral("Circular 030", 3,30,6,31,9,31,0,31, "Plataforma SISPPRO");
var rt5 = new infoTrimestral("Precio de Medicamentos", 3,10,6,10,9,10,0,10, "Plataforma SISPPRO");
var rt6 = new infoTrimestral("Monitoreo y Seguimiento Plan de Gestión Integral del Riesgo (PGIR)", 3,15,6,15,9,15,0,15, "Secretaría de salud Departamental del Tolima - Supersalud");


//Otras Funciones

function ListaAnual()
{
    ra1.Lista();
    ra2.Lista();
    ra3.Lista();
    ra4.Lista();
    ra5.Lista();

}

function AlertaAnual()
{
    ra1.Alerta();
    ra2.Alerta();
    ra3.Alerta();
    ra4.Alerta();
    ra5.Alerta();
}


function ListaMensual()
{
    rm1.Lista();
    rm2.Lista();
    rm3.Lista();
    rm4.Lista();
}

function AlertaMensual()
{
    rm1.Alerta();
    rm2.Alerta();
    rm3.Alerta();
    rm4.Alerta();
}

function ListaSemestral()
{
    rs1.Lista();
    rs2.Lista();
    rs3.Lista();
    rs4.Lista();
    rs5.Lista();
    rs6.Lista();
}

function AlertaSemestral()
{
    rs1.Alerta();
    rs2.Alerta();
    rs3.Alerta();
    rs4.Alerta();
    rs5.Alerta();
    rs6.Alerta();
}

function ListaTrimestral()
{
    rt1.Lista();
    rt2.Lista();
    rt3.Lista();
    rt4.Lista();
    rt5.Lista();
    rt6.Lista();
}

function AlertaTrimestral()
{
    rt1.Alerta();
    rt2.Alerta();
    rt3.Alerta();
    rt4.Alerta();
    rt5.Alerta();
    rt6.Alerta();
}

function OnloadDesplegar() {
    
    ListaAnual();
    AlertaAnual();
    ListaMensual();
    AlertaMensual();
    ListaSemestral();
    AlertaSemestral();
    ListaTrimestral();
    AlertaTrimestral();
}




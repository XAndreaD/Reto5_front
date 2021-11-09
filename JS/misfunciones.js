function activaNuevo(){
    
    
    $("#nuevo").show(1000);
    //$("#listado").hide(500);
    $("#Admemail").focus();
    $("#Admid").focus();
    
    $("#Cnombre").focus();
    $("#IDcab").focus();

    $("#Catnombre").focus();
    $("#Idnombre").focus();

    $("#Cliemail").focus();
    $("#Cliid").focus();

    $("#Mmensaje").focus();
    $("#IdM").focus();
    
    $("#StartDate").focus();
    $("#idR").focus();
}


function traerInformacionCabañas(){
    $.ajax({
        url:"http://168.138.71.93:8081/api/Cabin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCabañas(respuesta);
        }
    });
}

function pintarRespuestaCabañas(respuesta){

    let myTable="<table>";

    myTable += "<tr>";
    myTable += "<td>" + 'Nombre' + "</td>" + "<td>" + 'Marca' + "</td>" + "<td>" + 'Habitaciones' + "</td>"+ "<td>" + 'Descripcion' + "</td>";
    myTable += "</tr>";

    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].rooms+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='borrarElementoCab("+respuesta[i].id+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
    activaNuevo();
}

function guardarInformacionCabañas(){
    let var3 = {
        name:$("#Cnombre").val(),
        brand:$("#Cbrand").val(),
        rooms:$("#Crooms").val(),
        description:$("#Cdescription").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://168.138.71.93:8081/api/Cabin/save",

        
        success:function(response) {
                console.log(response);
                $("#Cnombre").val("");
                $("#Cbrand").val("");
                $("#Crooms").val("");
                $("#Cdescription").val("");
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            activaNuevo();
            window.location.reload();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
        });

}


function editarInformacionCab(){
    let myData={
        id:$("#IDcb").val(),
        name:$("#Cnombre").val(),
        brand:$("#Cbrand").val(),
        rooms:$("#Crooms").val(),
        description:$("#Cdescription").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.71.93/api/Cabin/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado5").empty();
            $("#IDcb").val("");
            $("#Cnombre").val("");
            $("#Cbrand").val("");
            $("#Crooms").val("");
            $("#Cdescription").val("");
            traerInformacionCabañasU();
            activaNuevo();
            alert("Se ha Actualizado el Registro")
        }
    });
}

function traerInformacionCabañas2(){
    $.ajax({
        url:"http://168.138.71.93:8081/api/Cabin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCabañas2(respuesta);
        }
    });
}

function pintarRespuestaCabañas2(respuesta){

    let myTable="<table>";

    myTable += "<tr>";
    myTable += "<td>" + 'ID Cabaña' + "</td>" +"<td>" + 'Nombre' + "</td>" + "<td>" + 'Marca' + "</td>" + "<td>" + 'Habitaciones' + "</td>"+ "<td>" + 'Descripcion' + "</td>";
    myTable += "</tr>";

    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].id+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].rooms+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
    activaNuevo();
}


function borrarElementoCab(idElemento){

    $.ajax({
        
        url:'http://168.138.71.93:8081/api/Cabin/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformacionCabañas();
            activaNuevo();
            alert("Se ha Eliminado.")
        }
    });
}


/////////////////////////////////////////////////////////////
function traerInformacionCategorias(){
    $.ajax({
        url:"http://168.138.71.93:8081/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategorias(respuesta);
        }
    });
}

function pintarRespuestaCategorias(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'Nombre' + "</td>" + "<td>" + 'Descripcion' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='borrarElementoCat("+respuesta[i].id+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
    activaNuevo();
}

function guardarInformacionCategorias(){
    let var4 = {
        name:$("#Catnombre").val(),
        description:$("#Catdescripcion").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://168.138.71.93:8081/api/Category/save",

        success:function(response) {
            $("#Catnombre").val("");
            $("#Catdescripcion").val("");
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload();
            activaNuevo();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
        });
}


function editarInformacionCat(){
    let myData={
        id:$("#Idnombre").val(),
        name:$("#Catnombre").val(),
        description:$("#Catdescripcion").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.71.93:8081/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado5").empty();
            $("#Idnombre").val("");
            $("#Catnombre").val("");
            $("#Catdescripcion").val("");
            traerInformacionCategorias2();
            activaNuevo();
            alert("Se ha Actualizado el Registro")
        }
    });
}

function traerInformacionCategorias2(){
    $.ajax({
        url:"http://168.138.71.93:8081/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategorias2(respuesta);
        }
    });
}

function pintarRespuestaCategorias2(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID Categoria' + "</td>" +"<td>" + 'Nombre' + "</td>" + "<td>" + 'Descripcion' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].id+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
    activaNuevo();
}


function borrarElementoCat(idElemento){

    $.ajax({
        
        url:'http://168.138.71.93:8081/api/Category/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformacionCategorias();
            activaNuevo();
            alert("Se ha Eliminado.")
        }
    });
}



////////////////////////////////////////////////////////////
function traerInformacionClientes(){
    $.ajax({
        url:"http://168.138.71.93:8081/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'Correo' + "</td>" + "<td>" + 'Contraseña' + "</td>" + "<td>" + 'Nombre' + "</td>"+ "<td>" + 'Edad' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElementoCli("+respuesta[i].idClient+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
    activaNuevo();
}

function guardarInformacionClientes(){
    let var4 = {
        email:$("#Cliemail").val(),
        password:$("#Clipassword").val(),
        name:$("#Cliname").val(),
        age:$("#Cliage").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://168.138.71.93:8081/api/Client/save",

        success:function(response) {
            $("#Cliemail").val("");
            $("#Clipassword").val("");
            $("#Cliname").val("");
            $("#Cliage").val("");
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload();
            activaNuevo();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
        });
}


function editarInformacionCli(){
    let myData={
        idClient:$("#Cliid").val(),
        email:$("#Cliemail").val(),
        password:$("#Clipassword").val(),
        name:$("#Cliname").val(),
        age:$("#Cliage").val(),
        

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.71.93:8081/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            $("#Cliid").val("");
            $("#Cliemail").val("");
            $("#Clipassword").val("");
            $("#Cliname").val("");
            $("#Cliage").val("");
            traerInformacionClientes2();
            activaNuevo();
            alert("Se ha Actualizado el Registro")
        }
    });
}

function traerInformacionClientes2(){
    $.ajax({
        url:"http://168.138.71.93:8081/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes2(respuesta);
        }
    });
}

function pintarRespuestaClientes2(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID Cliente' + "</td>" +"<td>" + 'Correo' + "</td>" + "<td>" + 'Contraseña' + "</td>" + "<td>" + 'Nombre' + "</td>"+ "<td>" + 'Edad' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idClient+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
    activaNuevo();
}


function borrarElementoCli(idElemento){

    $.ajax({
        
        url:'http://168.138.71.93:8081/api/Client/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformacionClientes();
            activaNuevo();
            alert("Se ha Eliminado.")
        }
    });
}


/////////////////////////////////////////////////////////////
function traerInformacionMensajes(){
    $.ajax({
        url:"http://168.138.71.93:8081/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    });
}

function pintarRespuestaMensajes(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID' + "</td>" + "<td>" + 'Mensaje' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idMessage+"</td>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td> <button onclick='borrarElementoM("+respuesta[i].idMessage+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
    activaNuevo();
}

function guardarInformacionMensajes(){
    let var4 = {
        messageText:$("#Mmensaje").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://168.138.71.93:8081/api/Message/save",

        success:function(response) {
            $("#Mmensaje").val("");

                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload();
            activaNuevo();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
        });
}


function editarInformacionM(){
    let myData={
        idMessage:$("#IdM").val(),
        messageText:$("#Mmensaje").val(),
        

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.71.93:8081/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            $("#IdM").val("");
            $("#Mmensaje").val("");
            traerInformacionMensajes2();
            activaNuevo();
            alert("Se ha Actualizado el Registro")
        }
    });
}

function traerInformacionMensajes2(){
    $.ajax({
        url:"http://168.138.71.93:8081/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes2(respuesta);
        }
    });
}

function pintarRespuestaMensajes2(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID' + "</td>" + "<td>" + 'Mensaje' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idMessage+"</td>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
    activaNuevo();
}




function borrarElementoM(idElemento){

    $.ajax({
        
        url:'http://168.138.71.93:8081/api/Message/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformacionMensajes();
            activaNuevo();
            alert("Se ha Eliminado.")
        }
    });
}

///////////////////////////////////////////////////////////////
function traerInformacionReservaciones(){
    $.ajax({
        url:"http://168.138.71.93:8081/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservaciones(respuesta);
        }
    });
}

function pintarRespuestaReservaciones(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'Fecha Inicio' + "</td>" + "<td>" + 'Fecha Fin' + "</td>";
    myTable += "</tr>";


    for(i=0;i<respuesta.length;i++){
        var fecha = respuesta[i].startDate; 
        var fecha2 = respuesta[i].devolutionDate; 

        let fechIni = [];
        let fechFin = [];
        fechIni = fecha;
        fechFin = fecha2;
        let conver1 = [];
        let conver3= [];
        for (k = 0; k < 10; k++) {
            conver1.push(fechIni[k]); 
            conver3.push(fechFin[k]); 
        }
        var conver2 = conver1.toString(); 
        var conver4 = conver3.toString(); 
        for (k = 0; k < 9; k++) {
            conver2 = conver2.replace(",", ""); 
            conver4 = conver4.replace(",", ""); 
        }

        myTable+="<tr>";
        myTable+="<td>"+conver2+"</td>";
        myTable+="<td>"+conver4+"</td>";
        myTable+="<td> <button onclick='borrarElementoR("+respuesta[i].idReservation+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
    activaNuevo();
}

function guardarInformacionReservaciones(){
    let var4 = {
        startDate:$("#StartDate").val(),
        devolutionDate:$("#EndtDate").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://168.138.71.93:8081/api/Reservation/save",

        success:function(response) {
            $("#StartDate").val("");
            $("#EndtDate").val("");

            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload();
            activaNuevo();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
        });
}

function editarInformacionR(){
    let myData={
        idReservation:$("#idR").val(),
        startDate:$("#StartDate").val(),
        devolutionDate:$("#EndtDate").val(),
        status:$("#status").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.71.93:8081/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado6").empty();
            $("#idR").val("");
            $("#StartDate").val("");
            $("#EndtDate").val("");
            $("#status").val("");
            traerInformacionReservaciones2();
            activaNuevo();
            alert("Se ha Actualizado el Registro")
        }
    });
}


function traerInformacionReservaciones2(){
    $.ajax({
        url:"http://168.138.71.93:8081/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservaciones2(respuesta);
        }
    });
}

function pintarRespuestaReservaciones2(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID Reservacion' + "</td>"+"<td>" + 'Fecha Inicio' + "</td>" + "<td>" + 'Fecha Fin' + "</td>";
    myTable += "</tr>";


    for(i=0;i<respuesta.length;i++){
        var fecha = respuesta[i].startDate; 
        var fecha2 = respuesta[i].devolutionDate;

        let fechIni = [];
        let fechFin = [];
        fechIni = fecha;
        fechFin = fecha2;
        let conver1 = [];
        let conver3= [];
        for (k = 0; k < 10; k++) {
            conver1.push(fechIni[k]); 
            conver3.push(fechFin[k]); 
        }
        var conver2 = conver1.toString(); 
        var conver4 = conver3.toString(); 
        for (k = 0; k < 9; k++) {
            conver2 = conver2.replace(",", ""); 
            conver4 = conver4.replace(",", ""); 
        }

        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idReservation+"</td>";
        myTable+="<td>"+conver2+"</td>";
        myTable+="<td>"+conver4+"</td>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado6").html(myTable);
    activaNuevo();
}


function borrarElementoR(idElemento){

    $.ajax({
        
        url:'http://168.138.71.93:8081/api/Reservation/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionReservaciones();
            activaNuevo();
            alert("Se ha Eliminado.")
        }
    });
}

///////////////////////////////

function traerInformacionAdmin(){
    $.ajax({
        url:"http://168.138.71.93:8081/api/Admin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaAdmin(respuesta);
        }
    });
}

function pintarRespuestaAdmin(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'Correo' + "</td>" + "<td>" + 'Contraseña' + "</td>" + "<td>" + 'Nombre' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElementoAdm("+respuesta[i].idAdmin+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        
    }
    myTable+="</table>";
    $("#resultado10").html(myTable);
    activaNuevo();
}

function guardarInformacionAdmin(){
    let var4 = {
        email:$("#Admemail").val(),
        password:$("#Admpassword").val(),
        name:$("#Admname").val(),
        
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://168.138.71.93:8081/api/Admin/save",

        success:function(response) {
            $("#Admemail").val("");
            $("#Admpassword").val("");
            $("#Admname").val("");
            
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload();
            activaNuevo();
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
        });
}

function editarInformacionAdm(){
    let myData={
        idAdmin:$("#Admid").val(),
        email:$("#Admemail").val(),
        password:$("#Admpassword").val(),
        name:$("#Admname").val(),
        

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.71.93:8081/api/Admin/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado10").empty();
            $("#Admid").val("");
            $("#Admemail").val("");
            $("#Admpassword").val("");
            $("#Admname").val("");
            traerInformacionAdmin2();
            activaNuevo();
            alert("Se ha Actualizado el Registro")
        }
    });
}

function traerInformacionAdmin2(){
    $.ajax({
        url:"http://168.138.71.93:8081/api/Admin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaAdmin2(respuesta);
        }
    });
}

function pintarRespuestaAdmin2(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID Admin' + "</td>" + "<td>" + 'Correo' + "</td>" + "<td>" + 'Contraseña' + "</td>" + "<td>" + 'Nombre' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idAdmin+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        
    }
    myTable+="</table>";
    $("#resultado10").html(myTable);
    activaNuevo();
}


function borrarElementoAdm(idElemento){

    $.ajax({
        
        url:'http://168.138.71.93:8081/api/Admin/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado10").empty();
            traerInformacionAdmin();
            activaNuevo();
            alert("Se ha Eliminado.")
        }
    });
}
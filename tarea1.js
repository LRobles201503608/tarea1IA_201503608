var contador=[0,0,0,0,0,0,0,0];
var dirt=[true,true];
var left=true;
Cleaning();

function Cleaning(){
    var astate=1;
    if(left){
        if(dirt[0]){
            if(!dirt[1]){
                astate=3;
            }
            dirt[0]=false;
            document.getElementById(`log`).innerHTML+=`<br><p>Lugar: A | Accion: Limpiar</p>`
        }else{ 
            if(dirt[1]){
                astate=5;
            }
            else{ 
                astate=7;
            }
            document.getElementById(`log`).innerHTML+=`<br><p>Lugar: A | Accion: Mover Derecha</p>`
            left=!left;
        }
         
    }
    else{
        if(dirt[1]){
            astate=2;
            if(!dirt[0]){
                astate=6;
            }
            document.getElementById('log').innerHTML+='<br><p>Lugar: B | Accion: Limpiar</p>'
            dirt[1]=false;
        }else{ 
            if(dirt[0]){
                astate=4;
            } 
            else{
                astate=8;
            }
            document.getElementById('log').innerHTML+='<br><p>Lugar: B | Accion: Mover Izquierda</p>'
            left=!left;
        }
    }
    
    States(astate);
}
function States(astate){
   var aux=contador[astate-1]+=1;
    document.getElementById(`s${astate}`).innerHTML=aux
    Dirtying();
    if(!Success()){
        setTimeout(function(){
            Cleaning();
        },100);
    }else{
        alert("Simulación terminada")
    }
 
    
}
function Dirtying(){
    var randomdirt=Math.floor(Math.random() * 6); // genera un random para decidir que ensuciar
    if(randomdirt<2){
        dirt[0]=true;
        document.getElementById('log').innerHTML+='<br><p>Lugar: A | Accion: Ensuciando</p>'
    }
    if(randomdirt<4&& randomdirt<=2){
        dirt[1]=true; 
        document.getElementById('log').innerHTML+='<br><p>Lugar: B | Accion: Ensuciando</p>'
    }
}
function Success(){
    for (let x = 0; x < 8; x++) {
        const element = contador[x];
        if(element<2){
            return false;
        } 
    }
    return true;
}
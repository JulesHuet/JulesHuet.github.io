function affiche(){
    const nom=document.getElementById("nom");
    let user=document.getElementById("user");
    user.innerHTML=nom.value;
}

function selection(){
    const selecteur = document.getElementById('choix');
    const monChoix = selecteur [selecteur.selectedIndex];
    document.getElementById("choix").style.color = monChoix.value;
}

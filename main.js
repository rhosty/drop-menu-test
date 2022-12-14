let dropdown = document.getElementById('drop');
let menuClicked = true;
dropdown.addEventListener('click', function(){
    if(menuClicked){
    document.getElementById('dropdown').style.display = "block";
    menuClicked = false;
    } else{
        document.getElementById('dropdown').style.display = "none";
        menuClicked = true;
    }
});
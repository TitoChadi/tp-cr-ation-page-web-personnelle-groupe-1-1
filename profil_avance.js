function tito()
{
    if(document.getElementById('name').value == "")
    {
        alert("Veuillez entrer le nom.");
        return false;
    }

    else if ( document.getElementById('email').value == "") {
        alert("Veuillez entrer l'e-mail.");
        return false;
    }

    else if (!(document.getElementById('email').value.includes("@")) || !(document.getElementById('email').value.includes("."))) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return false;
    }
    else 
    {
        alert("Formulaire soumis avec succès.");
        return true;
    }
}
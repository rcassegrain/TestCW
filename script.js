// Constants from id
const btnDelete = document.getElementById("btn_delete");
const btnSelect = document.getElementById("btn_select");
const btnResult = document.getElementById("btn_result");
const txtCW = document.getElementById("txt_CW");
const lblResult = document.getElementById("lbl_result");
let txtContent = "";

// Events listners
btnDelete.addEventListener('click', onbtnDeleteClick);
function onbtnDeleteClick(test = true) {
    if (txtCW.value != "") {
        if (test) {
            var rep = confirm("Voulez-vous vraiment effacer le contenu ?");
        } else {
            rep = true;
        }
        if (rep) {
            txtCW.value = "";
            lblResult.innerText = "";
            lblResult.style.color = "#000000";
        }
    }
}

// Read CW file
btnSelect.addEventListener("change", handleFileSelection);
function handleFileSelection(event) {
    const file = event.target.files[0];
    onbtnDeleteClick(false);
    // Validate file existence and type
    if (!file) {
        alert("Pas de ficihier séléctionné, sélectionner un fichier.");
        return;
    }
    if (!file.type.startsWith("text")) {
        alert("Ce fichier n'est pas un fichier texte, veuillez sélectionner un fichier texte");
        return;
    }
    // Read the file
    const reader = new FileReader();
    reader.onload = () => {
        txtContent = reader.result;
        alert(txtContent);
        txtContent = txtContent.replaceAll(/[\r\n\s\t\f\v\bVVV=\b\b=+\b]/g, "");
        txtContent = txtContent.toUpperCase();
    };
    reader.onerror = () => {
        alert("Erreur de lecture du fichier, essayer à nouveau.");
    };
    reader.readAsText(file);
}

// Calculate the number of errors
btnResult.addEventListener('click', onbtnResultClick);
function onbtnResultClick() {
    let txtToCheck = txtCW.value;
    let nbErrors = 0;
    txtToCheck = txtToCheck.replaceAll(/[\r\n\s\t\f\v]/g, "");
    txtToCheck = txtToCheck.toUpperCase();
    let nbLetters = txtToCheck.length;
    let nbContent = txtContent.length;
    if ((txtToCheck == "") || (txtContent == "")) {
        alert("Pas de fichier texte sélectionné, fichier incompatible ou texte saisi vide.");
    } else {
        for (let i = 0; i <= nbContent; i++) {
            if (txtToCheck[i] != txtContent[i]) {
                nbErrors++;
            }
        }
        let message = "Nombre de fautes : " + nbErrors + " / " + nbContent;
        if (nbErrors == 0) {
            message = message + "\n Félicitations !!!"
        }
        if (nbLetters != nbContent) {
            message = message + "\n Nombre de caractères différents entre le fichier texte et le texte saisi."
        }
        lblResult.innerText = message;
        if (nbErrors == 0) {
            lblResult.style.color = "#008000";
        } else {
            lblResult.style.color = "#ff0000";
        }
    }
}

var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
var date = new Date();
var datedisplay = date.toLocaleDateString("fr-FR", options);
var hour = date.getUTCHours();
var minute = date.getUTCMinutes();
var second = date.getUTCSeconds();
var timeDisplay = function() {
    if(second<59)
        second++;
    else {
        minute++;
        second = 0;
    }
    if(minute>59) {
        hour++;
        minute = 0;
    }
    document.getElementById("horloge").textContent = datedisplay + " - " +  formatTime(hour) + ":" + formatTime(minute) + ":" + formatTime(second) + " UTC(Z)";
    setTimeout(timeDisplay, 1000);
}

function formatTime(timeconvert) {
    if(timeconvert.toString().length==2) {
        return timeconvert.toString();
    } else {
        return "0" + timeconvert.toString();
    }
}

setTimeout(timeDisplay, 1000);
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet" type="text/css"/>
    <script src="script.js" defer></script>
    <title>Test CW</title>
</head>
<body>
    <h1>Entrainement CW</h1>
    <br>
    <div>
        <h2>Sélectionner le fichier texte :</h2>
        <input id="btn_select" type="file" name="filename" accept="text/plain"/>
    </div>
    <div>
        <h2>Ecrire  :</h2>
        <input class="button" id="btn_delete" type="button" value="Effacer..." />
        <p><U>Note :</U> NE PAS écrire les balises de début et fin de texte "VVV=" et "=+".</p>
        <br>
        <textarea class="textbox" id="txt_CW" name="txt_CW" rows="20" cols="50" autocapitalize="on"></textarea>
    </div>
    <div>
        <h2>Résultat :</h2>
        <input class="button" id="btn_result" type="button" value="Afficher..." />
        <label class="label" id="lbl_result" for="btn_result"></label>
    </div>
</body>
</html>
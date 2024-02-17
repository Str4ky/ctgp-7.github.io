let message = document.getElementById('message');
let code = document.getElementById('code');

function check_en() {
    switch(code.value)
    {
        case '00000001':
            message.innerText = "Internal error, current CTGP-7 version is not in the changelog list";
            break;
        case '00000002':
            message.innerText = "3DS not connected to the internet";
            break;
        case '0000ZZ03':
            message.innerText = "CURL returned ZZ when trying to download update file list";
            break;
        case '00000004':
            message.innerText = "Internal error, not enough memory";
            break;
        case '0000ZZ05':
            message.innerText = "CURL returned ZZ when trying to download a file";
            break;
        case '00000006':
            message.innerText = "Failed to download the latest version information";
            break;
        case '00000009':
            message.innerText = "Failed to download the base URL. Most likely caused by an unstable internet connection";
            break;
        case 'XXXXXXXX':
            message.innerText = "AM error, couldn't install the new version of the CTGP-7 launcher CIA";
            break;
        default:
            message.innerText = "The error code you have entered is invalid";
    }
}

function check_fr() {
    switch(code.value)
    {
        case '00000001':
            message.innerText = "Erreur interne, le version courante de CTGP-7 n'est pas dans la liste de changelog";
            break;
        case '00000002':
            message.innerText = "La 3DS n'est pas connectée à internet";
            break;
        case '0000ZZ03':
            message.innerText = "CURL a retourné ZZ en essayant de télécharger la liste des fichiers de mise à jour";
            break;
        case '00000004':
            message.innerText = "Erreur interne, pas assez de mémoire";
            break;
        case '0000ZZ05':
            message.innerText = "CURL a retourné ZZ en essayant de télécharger un fichier";
            break;
        case '00000006':
            message.innerText = "Échec lors du téléchargement des informations de la dernière version";
            break;
        case '00000009':
            message.innerText = "Échec lors du téléchargement de l'URL de base. Très probablement causé par une connexion internet instable";
            break;
        case 'XXXXXXXX':
            message.innerText = "Erreur AM, n'a pas pu installer le CIA de la nouvelle version du launcher de CTGP-7";
            break;
        default:
            message.innerText = "Le code d'erreur entré est invalide";
    }
}
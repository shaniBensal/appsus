
// keyLocalStorageNotes ='NOTES'

function makeId(length=5)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

export default {
    makeId,
    saveToStorage,
    loadFromStorage
}
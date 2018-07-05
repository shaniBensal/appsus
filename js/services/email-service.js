
function query() {
    return Promise.resolve(emails);
}


function getEmailById(emailId) {

    var email = emails.find(currEmail => currEmail.id === emailId);
    return Promise.resolve(email);

}

export default {
    query,
    getEmailById

}



var emails = [

    {
        "id": "OXeMG8wNskc",
        "subject": "Lorem ipsum dolor",
        "content": "mi est eros convallis auctor arcu dapibus himenaeos",
        "isRead": false,
        "dateSent": "1530451826",
    },
    {
        "id": "JYOJa2NpSCq",
        "subject": 'disputando disputationi',
        "content": " regione dolores. Sit ut choro dolores. Dolores eleifend",
        "isRead": true,
        "dateSent": '1540409426',
    },
    {
        "id": "1y0Oqts35DQ",
        "subject": "Eum recteque",
        "content": "ase quidam epicurei vim ne, labores similique ei pri",
        "isRead": false,
        "dateSent": '1523365208'
    },

]


var gcounter = 0

function query() {
    return Promise.resolve(emails);
}


function getEmailById(emailId) {

    var email = emails.find(currEmail => currEmail.id === emailId);
    return Promise.resolve(email);

}

function getEmailIdxById(emailId) {
    var emailIdx = emails.findIndex(currEmail => currEmail.id === emailId)
}


function removeEmail(emailId) {
    console.log('deleting email')
    // return Promise.resolve();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var emailIdx = getEmailIdxById(emailId)
            emails.splice(emailIdx, 1);
            resolve()
        }, 2000);
    });
}


function setReadStatus(emailId) {
    return getEmailById(emailId)
        .then(email => {
            email.isRead = !email.isRead;
            console.log('bbbbbbbbb', email)
            return Promise.resolve(email);

        })
}

function countUnreadEmails() {
    var unreadEmails = emails.filter(email => {
        return email.isRead
    })


    console.log('unread', unreadEmails.length)
    return unreadEmails.length
}

export default {
    query,
    getEmailById,
    setReadStatus,
    removeEmail,
    countUnreadEmails
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

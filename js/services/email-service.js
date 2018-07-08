
import utils from '../services/utils.js'


var emails = utils.loadFromStorage('EMAILS') || createEmails();



function query() {
    if (!emails) {
        var emailsFromStorage = utils.loadFromStorage('EMAILS');
        if (emailsFromStorage) {
            emails = emailsFromStorage;
        }
    }
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
            utils.saveToStorage('EMAILS' , emails)
            resolve()
        }, 2000);

    });
}

function emptyEmail() {
    return {
        id: null,
        subject: null,
        content: null,
        isRead: false,
        dateSent: null
    }
}

function saveEmail(email) {
	if (email.id) {
		var emailIdx = emails.findIndex(curremail => curremail.id === email.id);

		emails.splice(emailIdx, 1, email)


	} else {
		email.id = utils.makeId();
		emails.push(email);
	}
	console.log('Sevice is saving the email', email);
	return Promise.resolve(email);
}

function addNewEmail(newEmail) {
    console.log(newEmail)
    newEmail.dateSent = Date.now()
    newEmail.isRead = false
    newEmail.id = utils.makeId()
    emails.unshift(newEmail)
    utils.saveToStorage('EMAILS', emails);
    return Promise.resolve(newEmail)
}


function setReadStatus(emailId) {
    return getEmailById(emailId)
        .then(email => {
            email.isRead = !email.isRead;
            utils.saveToStorage('EMAILS' , emails)
            return email;

        })
}

function countUnreadEmails() {
        var unreadEmails = emails.filter(email => {
         return !email.isRead
    })

    console.log(unreadEmails.length)
    return unreadEmails.length

}

function sortEmailsByTitle() {

    // sort by name
    emails.sort(function (emailA, emailB) {
        var subjectA = emailA.subject.toUpperCase(); // ignore upper and lowercase
        var subjectB = emailB.subject.toUpperCase(); // ignore upper and lowercase
        if (subjectA < subjectB) {
            return -1;
        }
        if (subjectA > subjectB) {
            return 1;
        }
    })
}

function sortEmailsByDate() {
    // sort by value
    emails.sort(function (emailA, emailB) {
        return emailA.dateSent - emailB.dateSent;
    });
}

export default {
    query,
    getEmailById,
    setReadStatus,
    removeEmail,
    countUnreadEmails,
    addNewEmail,
    sortEmailsByTitle,
    sortEmailsByDate,
    emptyEmail,
    saveEmail
}


function createEmails() {
    return [

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
}


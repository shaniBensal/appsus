
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
            "subject": "Delivery is on its way!",
            "content": " Verify your e-mail to finish signing up for Avocode,Thank you for choosing Avocod",
            "isRead": false,
            "dateSent": "1530451826",
        },
        {
            "id": "JYOJa2NpSCq",
            "subject": 'Please confirm your account password',
            "content": " The funds will be transferred when the merchant processes your payment. Any funds in your PayPal balance at that time will be used prior to any other payment source.Thank you for using PayPal. To see the full transaction details, log in to your PayPal account",	
            "isRead": true,
            "dateSent": '1540409426',
        },
        {
            "id": "1y0Oqts35DQ",
            "subject": "billing address confirmation",
            "content": "Dear Shiran, Thank you for shopping with PANDORA Jewelry,We received your order PND02688204 You will receive an additional confirmation email with your order details shortly.  Need Help?  Contact our PANDORA Jewelry Customer Care team and we will be happy to assist!", 
            "isRead": false,
            "dateSent": '1523365208'
        },

        {
            "id": "1y23q4a35D1",
            "subject": "greetings from beyonce",
            "content": "good luck with the sprint!",
            "isRead": false,
            "dateSent": '1523365208'
        },
    
    
    ]
}


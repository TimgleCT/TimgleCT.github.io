// eslint-disable-next-line no-unused-vars
const MailService = {
    mailPublicKey: 'FSMYUSomr1ZaXazuV',
    mailServiceId: 'service_ogf2ldb',
    mailTemplateId: 'template_srg7nuj',
    userName: '',
    userEmail: '',
    userSubject: '',
    userMessage: '',

    setMailInfo(userName, userEmail, userSubject, userMessage) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userSubject = userSubject;
        this.userMessage = userMessage;
        emailjs.init(this.mailPublicKey);
    },

    isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    },

    verifyForm() {
        if (this.userName === '' || this.userEmail === '' || this.userSubject === '' || this.userMessage === '') {
            return [false, '有欄位未填寫'];
        }
        if (!this.isValidEmail(this.userEmail)) {
            return [false, 'Email 格式錯誤'];
        }
        return [true, 'OK'];
    },

    async sendMail() {
        const [verifyResult, sysMsg] = this.verifyForm();
        if (!verifyResult) {
            return ['fail', sysMsg];
        }
        const mailTemplate = {
            userName: this.userName,
            userEmail: this.userEmail,
            userSubject: this.userSubject,
            userMessage: this.userMessage,
        };

        let mailResult;
        await emailjs.send(this.mailServiceId, this.mailTemplateId, mailTemplate)
            .then((response) => {
                if (response.text === 'OK') {
                    mailResult = ['success', '信件送出成功!'];
                } else {
                    mailResult = ['fail', '信件送出失敗!'];
                }
            }, (err) => {
                mailResult = ['fail', '信件送出失敗!'];
                console.error(err);
            });

        return mailResult;
    },
};

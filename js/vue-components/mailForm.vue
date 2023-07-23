<template>
    <div class="sendMail">
            <form  id="mailForm" class="ui form" accept-charset="utf-8">
            <div class = field>
                <label>姓名：</label>
                <input v-model="mailInfo.name" type="text" name="Name" placeholder="姓名">
            </div>
            <div class = field>
                <label>Email：</label>
                <input v-model="mailInfo.email" type="email" name="Email" placeholder="Email">
            </div>
            <div class = field>
                <label>主旨：</label>
                <input v-model="mailInfo.subject" type="text" name="Subject" placeholder="主旨">
            </div>
            <div class = field>
                <label>你想說什麼：</label>
                <textarea v-model="mailInfo.mailContent" name="content" cols="50"></textarea>
            </div>
            <div class="ui message" :class="sendMailStatus" :style="showMsg">
                <div>{{mailMsg}}</div>
            </div>
            <div class = field>
                <button @click="sendMailService()" class="fluid ui button sendMailBtn" type="button">送出</button>
            </div>
        </form>
    </div>
</template>

<script>
const { reactive, ref, computed } = Vue;
export default {
    name: 'mail-form',
    props: {},
    setup() {
        const mailStatus = ref(null);
        const mailMsg = ref('');
        const mailInfo = reactive({
            name: null,
            email: null,
            subject: null,
            mailContent: null,
        });

        const sendMailStatus = computed(() => {
            if (mailStatus.value) {
                return 'success';
            }
            return 'error';
        });

        const showMsg = computed(() => {
            if (mailStatus.value === null) {
                return { display: 'none' };
            }
            return { display: 'block' };
        });

        async function sendMailService() {
            MailService.setMailInfo(mailInfo.name, mailInfo.email, mailInfo.subject, mailInfo.mailContent);
            const [status, msg] = await MailService.sendMail();
            if (status === 'success') {
                mailStatus.value = true;
                mailMsg.value = msg;
            } else {
                mailStatus.value = false;
                mailMsg.value = msg;
            }
        }

        return {
            mailInfo, mailMsg, showMsg, sendMailStatus, sendMailService,
        };
    },
};
</script>

<style scoped>
.field{
    width: 100%;
    margin: 2rem 0 !important;
}
.field label{
    font-weight: 500 !important;
    margin-bottom: 10px !important;
}
.sendMail{
    margin: 2.5% auto;
    width: 95%;
    border: 3px solid rgba(177, 165, 165, 0.747);
    border-radius: 20px;
    padding: 0 2rem ;
}
.sendMailBtn{
    background-color: rgba(255, 122, 122, 0.856) !important;
    color: white !important;
    font-size: 1.4rem !important;
}
.sendMailBtn:hover{
    background-color: rgb(248, 161, 161) !important;
    color: white !important;
}
</style>

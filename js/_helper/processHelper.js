// eslint-disable-next-line no-unused-vars
const processHelper = {
    async delay(ms) {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, ms);
        });
    },
};

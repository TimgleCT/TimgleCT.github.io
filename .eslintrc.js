module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'airbnb-base',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'vue',
    ],
    rules: {
        'linebreak-style': ['off', 'windows'],
        indent: ['error', 4],
        'max-len': ['error', 200],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'func-names': ['error', 'never'],
        'import/extensions': ['error', 'never', { js: 'always' }],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-global-assign': ['error', { exceptions: ['vm'] }],
    },
    ignorePatterns: ['js/jquery-2.1.4.min.js', 'js/mail.js', 'js/style.js', 'js/lib/*'],
    globals: {
        Vue: true,
        VueLoader: true,
        arrayHelper: true,
        MailService: true,
        mathHelper: true,
        echarts: true,
        emailjs: true,
        $: true,
    },
};

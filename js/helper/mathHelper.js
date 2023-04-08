// eslint-disable-next-line no-unused-vars
const mathHelper = {
    simplifyRatio(arr) {
        // 計算最大公因數
        function gcd(a, b) {
            return b === 0 ? a : gcd(b, a % b);
        }
        const maxGcd = gcd(...arr);

        // 將每個元素除以最大公因數，得到簡化後的結果
        const result = arr.map((num) => num / maxGcd);

        return result;
    },
};

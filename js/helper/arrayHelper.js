// eslint-disable-next-line no-unused-vars
const arrayHelper = {
    chunkArray(arr, size) {
        const chunkedArray = [];
        let index = 0;

        while (index < arr.length) {
            chunkedArray.push(arr.slice(index, index + size));
            index += size;
        }

        return chunkedArray;
    },
};

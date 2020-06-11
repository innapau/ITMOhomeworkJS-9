;(function() {
    window.arrUtils = {
        average(arr) {
            let result = 0;
            for (let i = 0; i < arr.length; i++) {
                result += arr[i];
            }
            return Math.round(result / arr.length);
        },
        clone(arr) {
            let res = [];
            for (let i = 0; i < arr.length; i++) {
                let element = arr[i]
                res.push(element);
            }
            return res;
        },
        getMaxNum(arr) {
          return Math.max(...arr);
        },
        getMinNum(arr) {
          return Math.min(...arr);
        }
    };
}());

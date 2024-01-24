let counter = 0
const getData = () => {
    console.log("getting data",counter++);
}

const debounce = (fn, d) => {
    let timer;
    return function () {
        let context = this;
        args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            getData.apply(context, arguments)
        },d)
    }

}
const betterFunction = debounce(getData, 300)
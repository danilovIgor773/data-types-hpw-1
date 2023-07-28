const inc = (num) => {
    num["n"] = (num["n"] ?? 0) + 1;
    return num;
};

const obj = {n: 5};
inc(obj);
console.dir(obj)

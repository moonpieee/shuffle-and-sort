
let dataSet = [
    {
        number: 1,
        color: "#6F98A8"
    },
    {
        number: 2,
        color: "#2B8EAD"
    },
    {
        number: 3,
        color: "#2F454E"
    },
    {
        number: 4,
        color: "#2B8EAD"
    },
    {
        number: 5,
        color: "#2F454E"
    },
    {
        number: 6,
        color: "#BFBFBF"
    },
    {
        number: 7,
        color: "#BFBFBF"
    },
    {
        number: 8,
        color: "#6F98A8"
    },
    {
        number: 9,
        color: "#2F454E"
    }
]

class MAERSK {
    constructor() { }

    generateDOM(data) {
        return data.forEach((el) => {
            const li = document.createElement('li');
            li.className = "box";
            li.style.backgroundColor = el.color;
            li.style.borderLeft = "solid 8px " + el.color;
            li.innerHTML = el.number.toString();
            document.querySelector('ul.tiles').appendChild(li);
        });
    }

    arr_Shuffle([...data]) {
        for (let i = data.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]];
        }
        document.querySelector('ul.tiles').innerHTML = "";
        return this.generateDOM(data)
    }

    arr_Sort([...data]) {
        data.sort((a, b) => {
            return a.number - b.number;
        });
        document.querySelector('ul.tiles').innerHTML = "";
        return this.generateDOM(data)
    }
}

let myTask = new MAERSK();

document.addEventListener("DOMContentLoaded", myTask.generateDOM(dataSet));
document.getElementById('btn-sort').addEventListener("click", () => {
    myTask.arr_Sort(dataSet);
});
document.getElementById('btn-shuffle').addEventListener("click", () => {
    myTask.arr_Shuffle(dataSet)
});

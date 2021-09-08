let arr = [];

for (let i = 0; i < Infinity; i++) {
    var command = prompt('Введите команду');
    var arrays = command.split(' ');

    var index = arrays[0];
    var name = arrays[1];


    if (index == 'add') {
        arr.push(name);
        var res = arr.join(' ');
        console.log(res);
    } else if (index === 'delete' || index === 'del') {

        arr.splice(name, 1);
        console.log(arr);
    }
    if (index === 'stop') {
        break;
    }
    // switch (true) {
    //     case (index === 'add'):
    //         arr.push(name);
    //         console.log(arr);
    //         break;

    //     case (index === 'delete'):
    //         arr.splice(name, 1);
    //         console.log(arr);
    //         break;

    //     case (index === 'stop'):
    //         break;
    // }



}
console.log(arr);
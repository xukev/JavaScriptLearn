var globalVar = 'This is globalVar';

function globalFunc() {
    var localVar = 'This is local var';

    console.log(globalVar);
    console.log(localVar);

    globalVar = 'This is changed var';

    console.log(globalVar);

    function localFunc() {
        var innerLocalVar = 'Inner local var';

        console.log(globalVar);
        console.log(localVar);
        console.log(innerLocalVar);
    }

    localFunc();
}

globalFunc();
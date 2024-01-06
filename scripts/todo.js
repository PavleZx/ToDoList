let array = [];

        function prints(recenica){

            if (recenica == undefined){
        let str = '';
        for (let i = 0; i < array.length; i++){
 
            str += '<div class = "container">' + array[i] + '<button class = "gumb" onclick = "array.splice(' + i + ', 1); prints(); ">Remove</button>' + '</div>';
        }
        document.querySelector('.container2').innerHTML = str;
        } else if (recenica != ''){
            array[array.length] = recenica;
        let str = '';
        for (let i = 0; i < array.length; i++){
 
            str += '<div class = "container">' + array[i] + '<button class = "gumb" onclick = "array.splice(' + i + ', 1); prints(); ">Remove</button>' + '</div>';
        }
        document.querySelector('.container2').innerHTML = str;
        }
    }

    
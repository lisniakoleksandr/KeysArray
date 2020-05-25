//Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей

var a = { js:'test',
            jq:'hello',
            css: 'world'};

            var b= [Object.keys(a)];
            console.log(b);

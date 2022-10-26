obj = {
    firstName: 'Витя',
    lastName: 'Киселев',
    age: 45,
    children: null,
    dates:{
        birthday: '26.01.1977',
        wedding: '05.09.2000',
        graduationFromUniversity: '07.06.2003'
    }
}

function Print(o, name = ''){
    for(let key in o){
        if(typeof o[key] === "object" && o[key] !== null){
            if(key === null){
                Print(o[key, `${key}`])
            }
            else{
                Print(o[key], `${name}${key} -`);
            }
        }
        else{
            console.log(name, key," - ", o[key])
        }
    }
}

Print(obj)

function getdictionary (dic_type) {
    const fs = require('fs')

    switch(dic_type){
        case "Standard":
            var dictionary = fs.readFileSync('JSON/StdNameGenDic.json');
            break;
        default:
            console.log("Dictionary not found.")
    }
    
    dictionary = JSON.parse(dictionary)
    return dictionary
}

function getfirstletter(dictionary, dictionary_length){
    return Object.keys(dictionary)[Math.floor(Math.random() * dictionary_length)]
}

function main(){
    var dictionary = getdictionary("Standard");
    let dictionary_length = Object.keys(dictionary).length
    console.log(getfirstletter(dictionary, dictionary_length))
}

main()
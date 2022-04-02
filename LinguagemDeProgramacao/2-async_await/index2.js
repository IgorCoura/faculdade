async function hello(nome){
    return `Hello, ${nome}`
}

hello('ana').then(res => console.log(res))
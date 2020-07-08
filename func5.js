const forEveryBodyVar = "Everyone can see it.";
function Scope(){
    const secretVar = "Only who I want can see it.";
    return secretVar;
    console.log(secretVar);
}
console.log(forEveryBodyVar);
Scope();
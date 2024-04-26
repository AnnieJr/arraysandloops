//preparar constantes
//Declarar funcion para aceptar un array por parametro
//Loop por el array
//Tomar el valor abs de c/elemento
//sumar todos los valores absolutos

const res1 = [1, 5, 6, 3];
const res2 = [14, 3.5, 6];
const res3 = [8, 15, 100];

function sumResistance(arr){
    const arr2 = [];
    arr.forEach((e) => arr2.push(Math.abs(e)));
    let res = 0;
    arr2.forEach((e) => (res = res + e));
    console.log(`${res} ohms`);
}

function sumResistance(arr){
    let res = 0;
    for (let i = 0; i< arr.length; i++) {
        res +=Math.abs(arr[i])
    }
    return res;
}


sumResistance(res3); //aqui se le puede cambiar a res2 y res3
const try2 = sumResistance(res1);
console.log(`${try2}`);

//Ejercicio de find the name of the secret society

const member1 = ['Esperanza', 'Franco', 'Nia'];
const member2 = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const member3 = ['Harry', 'Ron', 'Hermione'];

function secretName(arr) {
    let res = []
    arr.forEach((e) => res.push(e.charAt(0)));
    return res.sort().join();
}

console.log(secretName(member1));
console.log(secretName(member2));

secretName(member1);
secretName(member2);
secretName(member3);

//ejercicio de numero a mitades
/* Given a number, return the number divided into its halves in an array.
 

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.*/
const n = 4;
const n2 = 10;

function numDiv(num) {
    let res = [];
    const half = num / 2;
    res.push(half);
    res.push(half);
    return res;
}

console.log(numDiv(n2));

//Ejercicio Online status
/*Display online status for a list of users.
 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
Obtener el conteo total
imprimir usuario users == 1
imprimir primeras 2 personas users == 2
imprimir primeras 2 personas + conteo users >=2 */

const users = ["mockIng99", "J0eyPunch", "glassedFer"];

function displayUsers(arr) {
    const count = users.length;
    const res;
    if(count === 1) {
        res = `${arr[0]} is online`;
    } else if (count === 2) {
        res = `${arr[0]}, ${arr[1]} are online`;
    } else {
        res = `${arr[0]}, ${arr[1]}, and ${count - 2} more are online`
    }
    return res;
}

//Array multiplos 
const multi2 = [2, 10];
const multi17 = [17, 6];

function multiTable(arr5) {
    let res5 = [];
    let tab = 0;
   /* for (let i = arr5.length - 1; i = 0; i--) {
        tab = arr5 * i;
        res5.push(tab);
        res5.push(tab);
    }
    return res5; */
    arr5.forEach((tab) => res5.push(arr5 * tab))
}
console.log(multiTable(multi2));
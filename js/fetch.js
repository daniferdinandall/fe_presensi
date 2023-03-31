import { get } from "https://bukulapak.github.io/api/process.js"; 
// function get(target_url,responseFunction){
//     var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//     };

//     fetch(target_url, requestOptions)
//     .then(response => response.text())
//     .then(result => responseFunction(JSON.parse(result)))
//     .catch(error => console.log('error', error));
// }

let urlAPI = "https://ws-dani.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}
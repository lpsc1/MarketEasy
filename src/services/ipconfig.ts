import axios from 'axios'
import emailjs from 'emailjs-com'

export async function getIp() {
    console.log("ENTROU NO getIP")
    const IPDATALOCALSTORAGE = localStorage.getItem("IP_DATA_CLIENT");
    if(IPDATALOCALSTORAGE) {
        console.log("ENTROU NO IF getIP", IPDATALOCALSTORAGE)
        return;
    }
    const ip = await axios.get("https://api.ipify.org")
    console.log(ip.data)
    const key = 'f42c6e9e';
    const { data } = await axios.get(`https://api.hgbrasil.com/geoip?format=json-cors&key=${key}&address=${ip.data}&fields=only_results,city,region,country_name,continent&precision=false`);
    console.log("PEGOU O IP", data)
    localStorage.setItem("IP_DATA_CLIENT", JSON.stringify(data));
    emailjs.send('market_easy', 'template_ao8ucsp', {
        cidade: data.city, 
        continente: data.continent, 
        pais: data.country_name, 
        estado: data.region,
    },
    'PXAdz4lZoUYO0euzX')
    return;
}
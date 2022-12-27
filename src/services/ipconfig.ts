import axios from 'axios'
import emailjs from 'emailjs-com'


type dataProps = {
    city: string,
    continent: string,
    country_name: string,
    region: string
}

export async function sendNotification(API_URL: string) {
    const ALREADY_SEND_NOTIFICATION = alreadySendNotification();
    if (ALREADY_SEND_NOTIFICATION) {
        return;
    }
    const IP_DATA = await getIpData(API_URL);
    sendEmail(IP_DATA);
    return;
}

function alreadySendNotification(): boolean {
    const IP_DATA_SESSION_STORAGE = sessionStorage.getItem("IP_DATA_CLIENT");
    if (IP_DATA_SESSION_STORAGE != null) {
        return true;
    }
    return false
}

async function getIpData(API_URL: string): Promise<dataProps> {
    const { data } = await axios.get(`${API_URL}`);
    sessionStorage.setItem("IP_DATA_CLIENT", JSON.stringify(data));
    return data;
}

function sendEmail(IP_DATA: dataProps) {
    emailjs.send('market_easy', 'template_ao8ucsp', {
        cidade: IP_DATA.city,
        continente: IP_DATA.continent,
        pais: IP_DATA.country_name,
        estado: IP_DATA.region,
    },
        'PXAdz4lZoUYO0euzX')
}
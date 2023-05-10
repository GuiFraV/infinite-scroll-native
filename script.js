// Unsplash API
const count = 10;
const apiKey = 'VqMmIzos7u5XU5W2ja4hhsAT3taIxK_DoMbnkTIpb3E';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplah API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }catch(error){
        //Catch Error
    }
}
// On load
getPhotos();
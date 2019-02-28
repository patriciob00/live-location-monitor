import * as API from './api';

export const getLocationsOptions = async keyChar => { 
  const query = {
    query: `query{
        findLocation(key: "${keyChar}"){
            city
            province
            zipCode
            available    
        }
    }`
  }
  try {
    return API.Post(process.env.REACT_APP_GQL_API, query)  
  } catch (error) {
    console.log('error', error);
  }
}

export const getLatLongFromNominatim = str => {
  const fullAdress = `https://nominatim.openstreetmap.org/search?q=${encodeURI(str)}&format=json`;
  try {
    return API.Get(fullAdress);
  } catch (error) {
    console.log('error');
  }
}
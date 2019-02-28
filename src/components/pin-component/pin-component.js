import L from 'leaflet';


const AvailableMarker = L.icon({
  iconUrl: require('../../assets/img/available.png'),
  iconSize:     [36, 36], // size of the icon
  shadowSize:   [36, 36], // size of the shadow
  iconAnchor:   [16, 32], // point of the icon which will correspond to marker's location
  shadowAnchor: [16, 32],  // the same for the shadow
  popupAnchor:  [0, -18]// point from which the popup should open relative to the iconAnchor    
})

const NotAvailableMarker = L.icon({
  iconUrl: require('../../assets/img/not-available.png'),
  iconSize:     [36, 36], // size of the icon
  shadowSize:   [36, 36], // size of the shadow
  iconAnchor:   [16, 32], // point of the icon which will correspond to marker's location
  shadowAnchor: [16, 32],  // the same for the shadow
  popupAnchor:  [0, -18]// point from which the popup should open relative to the iconAnchor    
  // iconSize:     [16, 16], // size of the icon
  // shadowSize:   [16, 16], // size of the shadow
  // iconAnchor:   [8, 16], // point of the icon which will correspond to marker's location
  // shadowAnchor: [8, 16],  // the same for the shadow
  // popupAnchor:  [0, -18]// point from which the popup should open relative to the iconAnchor    
})
export { AvailableMarker, NotAvailableMarker };
<template>
  <div>
    <l-map
      :zoom="zoom"
      :center="center"
      :options="options"
      @ready="mapReady"
    >
      <l-tile-layer :url="url" />
      <sidebar/>
      <l-control v-if="showInfo" position="topright">
        <info/>
      </l-control>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LControl } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import "leaflet-sidebar-v2"
import "leaflet-sidebar-v2/css/leaflet-sidebar.css"
import "leaflet-extra-markers"
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css"
import "leaflet.marker.highlight";
import "leaflet.marker.highlight/dist/leaflet.marker.highlight.css";

// Map Layers
import Sidebar from './map/sidebar/Index';
import Info from './map/info/Index';

// Get datas
import rfTagsData from '../data/rfTags.data';
import trucksData from '../data/trucks.data';
import ultData from '../data/ult.data';
import recycleData from '../data/recycle.data';

// Icons
import TruckIcon from '../assets/images/icon/afatek-icon-05.png';
import WinchIcon from '../assets/images/icon/afatek-icon-04.png';

import ContainerEmptyIcon from '../assets/images/icon/afatek-icon-06.png';
import ContainerLittleIcon from '../assets/images/icon/afatek-icon-07.png';
import ContainerMediumIcon from '../assets/images/icon/afatek-icon-08.png';
import ContainerFullIcon from '../assets/images/icon/afatek-icon-09.png';


export default {
  components: {
    LMap,
    LTileLayer,
    LControl,
    Sidebar,
    Info
  },
  data() {
    return {
      url: 'https://api.mapbox.com/styles/v1/devafatek/ckfc8pw7394sr19mwqsj0vcqr/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2YWZhdGVrIiwiYSI6ImNrOHd5and3czAxZXczbXF6ODJuM3I2OTcifQ.mjAJVjob0WYyRMmoOESq2w',
      zoom: 13,
      center: [37.036604, 27.424406],
      options: {
        zoomControl: false,
        minZoom: 13,
        maxZoom: 18
      },
      rfTags: rfTagsData.tags,
      trucks: trucksData,
      ults: ultData,
      recycles: recycleData,
      markers: {
        trucks: {
          truck: [],
          winch: []
        },
        rfTags: {
          collected: [],
          notCollected: []
        },
        ults: {
          empty: [],
          little: [],
          medium: [],
          full: []
        },
        recycles: []
      },
      markerGroups: {
        trucks: {
          truck: [],
          winch: []
        },
        rfTags: {
          collected: [],
          notCollected: []
        },
        ults: {
          empty: [],
          little: [],
          medium: [],
          full: []
        },
        recycles: []
      },
    }
  },

  computed: {
    showInfo: function(){
      return this.$store.state.dashboard.info.current.length;
    }
  },

  watch: {
    '$store.state.dashboard.sidebar.object': function(newVal, oldVal){
      let map = this.$store.state.dashboard.map;
      let self = this;
      let markerGroups = this.$store.state.dashboard.markerGroups;
      newVal.on('opening', function(e){
        let activeTab = newVal._tabitems.find(item => item.classList.contains('active')).dataset.tab;
        self.$store.commit('dashboard/setCurrentTab', activeTab);
        switch(activeTab){
          case 'trucks':
            map.removeLayer(markerGroups.rfTags.collected);
            map.removeLayer(markerGroups.rfTags.notCollected);
            map.removeLayer(markerGroups.ults.empty);
            map.removeLayer(markerGroups.ults.little);
            map.removeLayer(markerGroups.ults.medium);
            map.removeLayer(markerGroups.ults.full);
            map.removeLayer(markerGroups.recycles);
            break;
          case 'dumpsters':
            map.removeLayer(markerGroups.trucks.truck);
            map.removeLayer(markerGroups.trucks.winch);
            map.removeLayer(markerGroups.ults.empty);
            map.removeLayer(markerGroups.ults.little);
            map.removeLayer(markerGroups.ults.medium);
            map.removeLayer(markerGroups.ults.full);
            map.removeLayer(markerGroups.recycles);
            break;
          case 'containers':
            map.removeLayer(markerGroups.trucks.truck);
            map.removeLayer(markerGroups.trucks.winch);
            map.removeLayer(markerGroups.rfTags.collected);
            map.removeLayer(markerGroups.rfTags.notCollected);
            map.removeLayer(markerGroups.recycles);
            break;
          case 'recycles':
            map.removeLayer(markerGroups.trucks.truck);
            map.removeLayer(markerGroups.trucks.winch);
            map.removeLayer(markerGroups.rfTags.collected);
            map.removeLayer(markerGroups.rfTags.notCollected);
            map.removeLayer(markerGroups.ults.empty);
            map.removeLayer(markerGroups.ults.little);
            map.removeLayer(markerGroups.ults.medium);
            map.removeLayer(markerGroups.ults.full);
            break;
        } 
      })
      newVal.on('closing', function(e){
        map.addLayer(markerGroups.trucks.truck);
        map.addLayer(markerGroups.trucks.winch);
        map.addLayer(markerGroups.rfTags.collected);
        map.addLayer(markerGroups.rfTags.notCollected);
        map.addLayer(markerGroups.ults.empty);
        map.addLayer(markerGroups.ults.little);
        map.addLayer(markerGroups.ults.medium);
        map.addLayer(markerGroups.ults.full);
        map.addLayer(markerGroups.recycles);
        self.$store.commit('dashboard/setCurrentTab', '');
      })
    },

    '$store.state.dashboard.sidebar.currentTab': function(newVal, oldVal){
      let map = this.$store.state.dashboard.map;
      let markerGroups = this.$store.state.dashboard.markerGroups;
      switch(newVal){
        case 'trucks':
          this.$store.commit('dashboard/setInfoCurrent', '');
          map.addLayer(markerGroups.trucks.truck);
          map.addLayer(markerGroups.trucks.winch);
          map.removeLayer(markerGroups.rfTags.collected);
          map.removeLayer(markerGroups.rfTags.notCollected);
          map.removeLayer(markerGroups.ults.empty);
          map.removeLayer(markerGroups.ults.little);
          map.removeLayer(markerGroups.ults.medium);
          map.removeLayer(markerGroups.ults.full);
          map.removeLayer(markerGroups.recycles);
          break;
        case 'dumpsters':
          this.$store.commit('dashboard/setInfoCurrent', 'Dumpsters');
          map.removeLayer(markerGroups.trucks.truck);
          map.removeLayer(markerGroups.trucks.winch);
          map.addLayer(markerGroups.rfTags.collected);
          map.addLayer(markerGroups.rfTags.notCollected);
          map.removeLayer(markerGroups.ults.empty);
          map.removeLayer(markerGroups.ults.little);
          map.removeLayer(markerGroups.ults.medium);
          map.removeLayer(markerGroups.ults.full);
          map.removeLayer(markerGroups.recycles);
          break;
        case 'containers':
          this.$store.commit('dashboard/setInfoCurrent', 'Containers');
          map.removeLayer(markerGroups.trucks.truck);
          map.removeLayer(markerGroups.trucks.winch);
          map.removeLayer(markerGroups.rfTags.collected);
          map.removeLayer(markerGroups.rfTags.notCollected);
          map.addLayer(markerGroups.ults.empty);
          map.addLayer(markerGroups.ults.little);
          map.addLayer(markerGroups.ults.medium);
          map.addLayer(markerGroups.ults.full);
          map.removeLayer(markerGroups.recycles);
          break;
        case 'recycles':
          this.$store.commit('dashboard/setInfoCurrent', 'Recycles');
          map.removeLayer(markerGroups.trucks.truck);
          map.removeLayer(markerGroups.trucks.winch);
          map.removeLayer(markerGroups.rfTags.collected);
          map.removeLayer(markerGroups.rfTags.notCollected);
          map.removeLayer(markerGroups.ults.empty);
          map.removeLayer(markerGroups.ults.little);
          map.removeLayer(markerGroups.ults.medium);
          map.removeLayer(markerGroups.ults.full);
          map.addLayer(markerGroups.recycles);
          break;
        default:
          //this.$store.commit('dashboard/setInfoCurrent', '');
          map.addLayer(markerGroups.trucks.truck);
          map.addLayer(markerGroups.trucks.winch);
          map.addLayer(markerGroups.rfTags.collected);
          map.addLayer(markerGroups.rfTags.notCollected);
          map.addLayer(markerGroups.ults.empty);
          map.addLayer(markerGroups.ults.little);
          map.addLayer(markerGroups.ults.medium);
          map.addLayer(markerGroups.ults.full);
          map.addLayer(markerGroups.recycles);
          break;
      }
    },

  },

  methods: {
    mapReady(map){
      // Add sidebar to vuex state
      this.$store.commit('dashboard/setMap', map)

      //map.on('click', function(e){
      //  console.log('latitude: ', e.latlng.lat)
      //  console.log('longitude: ', e.latlng.lng)
      //})

      // Add markers to map
      this.attachMarkers(map);

    },

    attachMarkers(map){
      let self = this;

      // Init trucks
      this.trucks.forEach(data => {
        const popupOptions = {
            'maxWidth': '500',
            'width' : '250',
            'height' : '300',
            'className': 'mapPopup truckPopup'
        };
        var markerIcon = L.ExtraMarkers.icon({
            //icon: 'fa-truck',
            innerHTML: `<img src="${data.type == 'truck' ? TruckIcon : WinchIcon}"/>`,
            markerColor: data.type == 'truck' ? 'orange' : 'orange-dark',
            shape: 'square',
            prefix: 'fa'
        });
        var marker = L.marker([data.latitude, data.longitude], {icon: markerIcon});
        var popupContent = `
        <div class="card">
          <div class="card-body">
            <table>
              <tr>
                <td class="text-bold">TİP</td>
                <td>${data.type == 'winch' ? 'Vinç' : 'Kamyon'}</td>
              </tr>
              <tr>
                <td class="text-bold">PLAKA NO</td>
                <td>${data.plate_no}</td>
              </tr>
              <tr>
                <td class="text-bold">ŞOFÖR</td>
                <td>${data.driver_name}</td>
              </tr>
            </table>
          </div>
        </div>
        `
        marker.bindPopup(popupContent, popupOptions).on('click', function(e) {
          map.setView(e.target.getLatLng(),5);
          self.$store.commit('dashboard/setInfoCurrent', 'TruckDetails');
          self.$store.commit('dashboard/setInfoData', data);
        }).on('popupclose', function(e){
          if (self.$store.state.dashboard.sidebar.object.getContainer().classList.contains('collapsed')){
            self.$store.commit('dashboard/setInfoCurrent', '');
          }
          else {
            if (self.$store.state.dashboard.sidebar.currentTab == 'trucks'){
              self.$store.commit('dashboard/setInfoCurrent', '');
            }
          }
        })
        this.$store.commit('dashboard/addMarker', {type: 'truck', icon: 'TruckIcon', searchableFields: ['plate_no'], data, marker});
        this.markers.trucks[data.type].push(marker);
        //this.trucksMarkers.push(marker);
      })
      
      // Init rfTags - Dumpsters
      this.rfTags.forEach(data => {
        const popupOptions = {
            'maxWidth': '500',
            'width' : '250',
            'height' : '300',
            'className': 'mapPopup dumpsterPopup'
        };
        var markerIcon = L.ExtraMarkers.icon({
            icon: 'fa-dumpster',
            markerColor: data.status == 'collected' ? 'green-dark' : 'red-dark',
            shape: 'circle',
            prefix: 'fa'
        });
        var marker = L.marker([data.latitude, data.longitude], {icon: markerIcon});
        var popupContent = `
        <div class="card videoCard">
            <video class="tagVideo" controls autoplay>
                <source src="${data.video_url}" type="video/mp4" autoplay loop>
                secure connection could not be established
            </video>
            <div class="card-body">
              <table>
                <tr>
                  <td class="text-bold">DURUM</td>
                  <td>
                    <span class="badge badge-light-${data.status == 'collected' ? 'success' : 'danger'}" style="float:left">
                      ${data.status == 'collected' ? 'Toplandı' : 'Toplanmadı'}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="text-bold">SON TOPLANMA TARİHİ</td>
                  <td>${this.$moment(data.last_event).format('DD.MM.YYYY hh:mm:ss')}</td>
                </tr>
                <tr>
                  <td class="text-bold">SON OKUNMA TARİHİ</td>
                  <td>${this.$moment(data.last_event).format('DD.MM.YYYY hh:mm:ss')}</td>
                </tr>
              </table>
            </div>
        </div>
        `
        this.$store.commit('dashboard/addMarker', {type: 'rfTag', icon: 'Trash2Icon', searchableFields: ['container_no', 'rftag_title'], data, marker});
        marker.bindPopup(popupContent, popupOptions).on('click', function(e) {
          map.setView(e.target.getLatLng(),5);
          self.$store.commit('dashboard/setInfoCurrent', 'DumpsterDetails');
          self.$store.commit('dashboard/setInfoData', data);
        }).on('popupclose', function(e){
          if (self.$store.state.dashboard.sidebar.object.getContainer().classList.contains('collapsed')){
            self.$store.commit('dashboard/setInfoCurrent', '');
          }
          else {
            if (self.$store.state.dashboard.sidebar.currentTab == 'dumpsters'){
              self.$store.commit('dashboard/setInfoCurrent', '');
            }
          }
        });
        this.markers.rfTags[data.status].push(marker);
      });
      
      // Init ults - Containers
      this.ults.forEach(data => {
        const popupOptions = {
            'maxWidth': '500',
            'width' : '250',
            'height' : '300',
            'className': 'mapPopup containerPopup'
        };
        var markerColor, markerHTML;
        if (data.filled_rate < 25){
          markerColor = 'green-light';
          markerIcon = ContainerEmptyIcon;
        }
        else if ((data.filled_rate >= 25) && (data.filled_rate < 50)){
          markerColor = 'green-dark';
          markerIcon = ContainerLittleIcon;
        }
        else if ((data.filled_rate >= 50) && (data.filled_rate < 75)){
          markerColor = 'yellow';
          markerIcon = ContainerMediumIcon;
        }
        else if ((data.filled_rate >= 75) && (data.filled_rate <= 100)){
          markerColor = 'red';
          markerIcon = ContainerFullIcon;
        }
        var markerIcon = L.ExtraMarkers.icon({
            //icon: 'fa-archive',
            innerHTML: `<img src="${markerIcon}"/>`,
            markerColor,
            shape: 'star',
            prefix: 'fa'
        });
        var marker = L.marker([data.latitude, data.longitude], {icon: markerIcon});
        var popupContent = `
        <div class="card">
          <div class="card-body">
            <table>
              <tr>
                <td class="text-bold">Konteyner ID</td>
                <td>${data.ult_title}</td>
              </tr>
              <tr>
                <td class="text-bold">Doluluk Oranı</td>
                <td>
                  <span class="badge badge-light-${this.computeVariant(data.filled_rate)}">${data.filled_rate}%</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
        `
        marker.bindPopup(popupContent, popupOptions).on('click', function(e) {
          map.setView(e.target.getLatLng(),5);
          self.$store.commit('dashboard/setInfoCurrent', 'ContainerDetails');
          self.$store.commit('dashboard/setInfoData', data);
        }).on('popupclose', function(e){
          if (self.$store.state.dashboard.sidebar.object.getContainer().classList.contains('collapsed')){
            self.$store.commit('dashboard/setInfoCurrent', '');
          }
          else {
            if (self.$store.state.dashboard.sidebar.currentTab == 'containers'){
              self.$store.commit('dashboard/setInfoCurrent', '');
            }
          }
        });
        this.$store.commit('dashboard/addMarker', {type: 'ult', icon: 'ArchiveIcon', searchableFields: ['ult_title'], data, marker});
        if (data.filled_rate < 25){
          this.markers.ults.empty.push(marker);
        }
        else if ((data.filled_rate >= 25) && (data.filled_rate < 50)){
          this.markers.ults.little.push(marker);
        }
        else if ((data.filled_rate >= 50) && (data.filled_rate < 75)){
          this.markers.ults.medium.push(marker);
        }
        else if ((data.filled_rate >= 75) && (data.filled_rate <= 100)){
          this.markers.ults.full.push(marker);
        }
      })
      
      // Init recycles
      this.recycles.forEach(data => {
        const popupOptions = {
            'maxWidth': '500',
            'width' : '250',
            'height' : '300',
            'className': 'mapPopup recyclePopup'
        };
        var markerIcon = L.ExtraMarkers.icon({
            icon: 'fa-recycle',
            markerColor: 'cyan',
            shape: 'penta',
            prefix: 'fa'
        });
        var marker = L.marker([data.latitude, data.longitude], {icon: markerIcon});
        var popupContent = `
        <div class="card">
          <div class="card-body">
            <table>
              <tr>
                <td class="text-bold">Konteyner ID</td>
                <td>${data.recycle_title}</td>
              </tr>
            </table>
          </div>
        </div>
        `
        marker.bindPopup(popupContent, popupOptions).on('click', function(e) {
          map.setView(e.target.getLatLng(),5);
          self.$store.commit('dashboard/setInfoCurrent', 'RecycleDetails');
          self.$store.commit('dashboard/setInfoData', data);
        }).on('popupclose', function(e){
          if (self.$store.state.dashboard.sidebar.object.getContainer().classList.contains('collapsed')){
            self.$store.commit('dashboard/setInfoCurrent', '');
          }
          else {
            if (self.$store.state.dashboard.sidebar.currentTab == 'recycles'){
              self.$store.commit('dashboard/setInfoCurrent', '');
            }
          }
        });
        this.$store.commit('dashboard/addMarker', {type: 'recycle', icon: 'RefreshCwIcon', searchableFields: ['recycle_id'], data, marker});
        this.markers.recycles.push(marker);
      })
      

      this.markerGroups.trucks.truck = L.layerGroup(this.markers.trucks.truck).addTo(map);
      this.markerGroups.trucks.winch = L.layerGroup(this.markers.trucks.winch).addTo(map);

      this.markerGroups.rfTags.collected = L.layerGroup(this.markers.rfTags.collected).addTo(map);
      this.markerGroups.rfTags.notCollected = L.layerGroup(this.markers.rfTags.notCollected).addTo(map);

      this.markerGroups.ults.empty = L.layerGroup(this.markers.ults.empty).addTo(map);
      this.markerGroups.ults.little = L.layerGroup(this.markers.ults.little).addTo(map);
      this.markerGroups.ults.medium = L.layerGroup(this.markers.ults.medium).addTo(map);
      this.markerGroups.ults.full = L.layerGroup(this.markers.ults.full).addTo(map);

      this.markerGroups.recycles = L.layerGroup(this.markers.recycles).addTo(map);


      this.$store.commit('dashboard/setMarkerGroups', this.markerGroups);
      
    },

    computeVariant(percent){
        if (percent < 25) return 'success';
        else if ((percent >= 25) && (percent < 50)) return 'info';
        else if ((percent >= 50) && (percent < 75)) return 'warning';
        else if ((percent >= 75) && (percent <= 100)) return 'danger';
    },
  }
}
</script>

<style lang="scss">
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css);
.vue2leaflet-map{
  &.leaflet-container{
    font-family: inherit;
    height: 100vh;
    width: 100vw;
  }
}

.mapPopup {
  min-width: 250px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.mapPopup .card {
  margin-bottom: 0;
}
.mapPopup .card table {
  width: 100%;
}
.mapPopup .text-bold {
  font-weight: bold;
}

.dumpsterPopup .leaflet-popup-content-wrapper {
  width: 350px;
  padding: 0;
}

.mapPopup .leaflet-popup-content {
  margin: 0;
}

.mapPopup video.tagVideo {
    width: 100%;
    border-radius: 5px 5px 0 0;
    margin-bottom: 5px;
}

.mapPopup .videoCard strong {
    font-size: .9rem;
}

.mapPopup .videoCard hr{
    width: 25%;
    height: 3px;
    margin: 0 auto;
}

.mapPopup .videoCard .hour {
    font-size: 2rem;
    font-weight: bold;
}
.leaflet-marker-icon img {
  width: 30px;
  height: 30px;
  margin-left: 3px;
  margin-top: 2px;
}
</style>
<template>
  <div class="trucksContent">
    <b-row class="match-height">
        <b-col md="6" xl="6" class="cardCol">
            <b-card 
            :bg-variant="filteredType == 'truck' ? 'info' : ''" 
            :text-variant="filteredType == 'truck' ? 'white' : ''" 
            @click="filteredType == 'truck' ? (filteredType = '') : (filteredType = 'truck')">
                <b-avatar class="mb-1" variant="light-warning" size="45">
                    <img :src="filteredType == 'truck' ? truckIcon.white : truckIcon.default" alt="">
                </b-avatar>
                <b-card-title :class="{'text-white': filteredType == 'truck'}">{{ getCount('truck') }}</b-card-title>
                <b-card-text>Kamyon</b-card-text>
            </b-card>
        </b-col>
        <b-col md="6" xl="6" class="cardCol">
            <b-card 
            :bg-variant="filteredType == 'winch' ? 'danger' : ''" 
            :text-variant="filteredType == 'winch' ? 'white' : ''" 
            @click="filteredType == 'winch' ? (filteredType = '') : (filteredType = 'winch')">
                <b-avatar class="mb-1" variant="light-primary" size="45">
                    <img :src="filteredType == 'winch' ? winchIcon.white : winchIcon.default" alt="">
                </b-avatar>
                <b-card-title :class="{'text-white': filteredType == 'winch'}">{{ getCount('winch') }}</b-card-title>
                <b-card-text>Vinç</b-card-text>
            </b-card>
        </b-col>
    </b-row>
    <b-row>
      <b-col md="12" xl="12" class="filterCol">
        <b-form-group label-for="filterInput">
          <b-form-input id="filterInput" placeholder="Plaka girin" v-model="filterQuery"/>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="trucksList">
      <b-col md="12" xl="12" class="trucksCol">
        <b-list-group class="truckList">
              <vue-perfect-scrollbar
                v-if="trucks.length"
                class="search-list search-list-main scroll-area overflow-hidden allList show"
                tagname="ul"
              >
                <transition-group name="fade" tag="div">
                    <b-list-group-item class="d-flex cursor-pointer" v-for="(truck, id) in trucks" :key="id" @click="getDetails(truck)">
                        <span class="mr-1">
                            <feather-icon
                            icon="TruckIcon"
                            size="16"
                            />
                        </span>
                        <span v-if="filterQuery" v-html="$options.filters.highlight(truck.data.PlateNo, filterQuery)"></span>
                        <span v-else>{{ truck.data.PlateNo }}</span>
                        <b-badge class="truckBadge" variant="light-info">
                            <feather-icon
                            icon="ArrowRightIcon"
                            size="16"
                            />
                        </b-badge>
                    </b-list-group-item>
                </transition-group>
            </vue-perfect-scrollbar>
            <transition v-else name="fade">
                <b-list-group-item class="d-flex">
                    <span class="mr-1">
                        <feather-icon
                        icon="AlertOctagonIcon"
                        size="16"
                        />
                    </span>
                    <span>Sonuç bulunamadı!</span>
                </b-list-group-item>
            </transition>
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol, BCard, BAvatar, BBadge, BCardText, BCardTitle, BListGroup, BListGroupItem, BFormGroup, BFormInput } from 'bootstrap-vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

// Icons
import TruckIcon from '../../../../assets/images/icon/afatek-icon-14.png';
import WinchIcon from '../../../../assets/images/icon/afatek-icon-13.png';
import TruckIconWhite from '../../../../assets/images/icon/afatek-icon-05.png';
import WinchIconWhite from '../../../../assets/images/icon/afatek-icon-04.png';

export default {
  components: {
      BRow,
      BCol,
      BCard,
      BAvatar,
      BBadge,
      BCardText,
      BCardTitle,
      BListGroup,
      BListGroupItem,
      BFormGroup, 
      BFormInput,
      VuePerfectScrollbar
  },

  data(){
    return {
      truckIcon: {
        default: TruckIcon,
        white: TruckIconWhite
      },
      winchIcon: {
        default: WinchIcon,
        white: WinchIconWhite
      },
      filteredType: '', // truck, winch
      filterQuery: '',
    }
  },

  computed: {
    trucks: function(){
      let all = this.$store.getters['dashboard/getSpecificMarkers']('rfid');
      let markers = this.$store.getters['dashboard/getRfidMarkers'];
      //let markers = this.$store.state.dashboard.markers.filter(marker => marker.type == 'truck');
      if (this.filteredType.length){
        if (this.filterQuery) {
          return Object.values(markers.truck).filter(device => {
            return device.data.PlateNo.toLowerCase().includes(this.filterQuery.toLowerCase());
          });
          //return filtered.filter(marker => marker.data.DeviceDetail.PlateNo.toLowerCase().includes(this.filterQuery.toLowerCase()));
        }
        return this.filteredType == 'truck' ? Object.values(markers.truck) : [];
      }
      else {
        if (this.filterQuery) {
          return Object.values(markers.truck).filter(device => {
            return device.data.PlateNo.toLowerCase().includes(this.filterQuery.toLowerCase());
          });
        }
      }
      return Object.values(all);
    }
  },

  watch: {
    'filteredType': function(newVal, oldVal){
      let map = this.$store.state.dashboard.map;
      let markerGroup = this.$store.getters['dashboard/getRfidMarkerGroup'];
      switch(newVal){
        case 'truck':
          if (markerGroup.truck) map.addLayer(markerGroup.truck);
          if (markerGroup.winch) map.removeLayer(markerGroup.winch);
          break;
        case 'winch':
          if (markerGroup.truck) map.removeLayer(markerGroup.truck);
          if (markerGroup.winch) map.addLayer(markerGroup.winch);
          break;
        default:
          if (this.$store.state.dashboard.sidebar.currentTab == 'trucks'){
            if (markerGroup.truck) map.addLayer(markerGroup.truck);
            if (markerGroup.winch) map.addLayer(markerGroup.winch);
          }
          break;
      }
    },

    '$store.state.dashboard.sidebar.currentTab': function(newVal, oldVal){
      this.filteredType = '';            
    }
  },

  methods: {
    getDetails(truck){
      truck.marker.fireEvent('click');
    },

    getCount(type){
        //let markers = this.$store.state.dashboard.markers.filter(marker => marker.type == 'truck');
        let markers = this.$store.getters['dashboard/getRfidMarkers'];
        if (type == 'truck'){
          return markers.truck ? Object.keys(markers.truck).length : 0
        }
        else {
          return markers.winch ? Object.keys(markers.winch).length : 0
        }
    }
  }
}
</script>

<style scoped>
.trucksContent {
    padding: 20px 0;
}
.cardCol, .trucksCol, .filterCol {
    padding: 0 5px;
}
.cardCol .card-body {
    text-align: center;
    cursor: pointer;
    padding: .5rem;
}
.cardCol .card-title {
    margin-bottom: .3rem;
}
.truckBadge {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
}
.bg-danger, .bg-success {
  transition: all ease .2s;
}
.b-avatar-custom img {
  width: 40px;
  height: 40px;
}
.allList {
  max-height: calc(100vh - 310px);
  overflow: auto;
  padding: 0;
  margin:0;
}
</style>
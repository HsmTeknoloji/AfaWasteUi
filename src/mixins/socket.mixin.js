import Enums from '@/config/system.enums';
import store from '@/store';

export default {
    data(){
        let deviceTypes = {}
        deviceTypes[Enums.DATATYPE_RECY_MAIN_DEVICE] = 'DeviceMain';
        deviceTypes[Enums.DATATYPE_RECY_BASE_DEVICE] = 'DeviceBase';
        deviceTypes[Enums.DATATYPE_RECY_THERM_DEVICE] = 'DeviceTherm';
        deviceTypes[Enums.DATATYPE_RECY_VERSION_DEVICE] = 'DeviceVersion';
        deviceTypes[Enums.DATATYPE_RECY_ALARM_DEVICE] = 'DeviceAlarm';
        deviceTypes[Enums.DATATYPE_RECY_STATU_DEVICE] = 'DeviceStatu';
        deviceTypes[Enums.DATATYPE_RECY_DETAIL_DEVICE] = 'DeviceDetail';
        deviceTypes[Enums.DATATYPE_ULT_MAIN_DEVICE] = 'DeviceMain';
        deviceTypes[Enums.DATATYPE_ULT_BASE_DEVICE] = 'DeviceBase';
        deviceTypes[Enums.DATATYPE_ULT_BATTERY_DEVICE] = 'DeviceBattery';
        deviceTypes[Enums.DATATYPE_ULT_ALARM_DEVICE] = 'DeviceAlarm';
        deviceTypes[Enums.DATATYPE_ULT_THERM_DEVICE] = 'DeviceTherm';
        deviceTypes[Enums.DATATYPE_ULT_VERSION_DEVICE] = 'DeviceVersion';
        deviceTypes[Enums.DATATYPE_ULT_SENS_DEVICE] = 'DeviceSens';
        deviceTypes[Enums.DATATYPE_RFID_MAIN_DEVICE] = 'DeviceMain';
        deviceTypes[Enums.DATATYPE_RFID_ALARM_DEVICE] = 'DeviceAlarm';
        deviceTypes[Enums.DATATYPE_RFID_THERM_DEVICE] = 'DeviceTherm';
        deviceTypes[Enums.DATATYPE_RFID_VERSION_DEVICE] = 'DeviceVersion';
        deviceTypes[Enums.DATATYPE_RFID_STATU_DEVICE] = 'DeviceStatu';
        deviceTypes[Enums.DATATYPE_RFID_BASE_DEVICE] = 'DeviceBase';
        deviceTypes[Enums.DATATYPE_RFID_DETAIL_DEVICE] = 'DeviceDetail';

        return {
            deviceTypes
        }
    },

    methods: {
        changeLocation(){

        },

        changeData(deviceType, value){
            var type = '';
            switch(deviceType.split('_')[0]){
                case 'RFID':
                    type = 'truck';
                    break;
                case 'ULT':
                    type = 'ult';
                    break;
                case 'RECY':
                    type = 'recycle';
                    break;
            }
            let filtered = store.state.dashboard.markers.filter(marker => marker.type == type && marker.data.DeviceId == value.DeviceId);
            if (filtered.length){
                let d = filtered[0].data;
                d[this.deviceTypes[deviceType]] = value;
            }

        },

        // panel
        //DATATYPE_CUSTOMER           : "CUSTOMER",
        //DATATYPE_USER               : "USER",
        //DATATYPE_CUSTOMERCONFIG     : "CUSTOMERCONFIG",
        //DATATYPE_ADMINCONFIG        : "ADMINCONFIG",
        //DATATYPE_LOCALCONFIG        : "LOCALCONFIG",

        /*
        DATATYPE_RECY_MAIN_DEVICE   : "RECY_MAIN_DEVICE",
        DATATYPE_RECY_BASE_DEVICE   : "RECY_BASE_DEVICE",
        DATATYPE_RECY_THERM_DEVICE  : "RECY_THERM_DEVICE",
        DATATYPE_RECY_VERSION_DEVICE: "RECY_VERSION_DEVICE",
        DATATYPE_RECY_ALARM_DEVICE  : "RECY_ALARM_DEVICE",
        DATATYPE_RECY_STATU_DEVICE  : "RECY_STATU_DEVICE",
        DATATYPE_RECY_DETAIL_DEVICE : "RECY_DETAIL_DEVICE",
        DATATYPE_ULT_MAIN_DEVICE    : "ULT_MAIN_DEVICE",
        DATATYPE_ULT_BASE_DEVICE    : "ULT_BASE_DEVICE",
        DATATYPE_ULT_BATTERY_DEVICE : "ULT_BATTERY_DEVICE",
        DATATYPE_ULT_ALARM_DEVICE   : "ULT_ALARM_DEVICE",
        DATATYPE_ULT_THERM_DEVICE   : "ULT_THERM_DEVICE",
        DATATYPE_ULT_VERSION_DEVICE : "ULT_VERSION_DEVICE",
        DATATYPE_ULT_SENS_DEVICE    : "ULT_SENS_DEVICE",
        DATATYPE_RFID_MAIN_DEVICE   : "RFID_MAIN_DEVICE",
        DATATYPE_RFID_ALARM_DEVICE  : "RFID_ALARM_DEVICE",
        DATATYPE_RFID_THERM_DEVICE  : "RFID_THERM_DEVICE",
        DATATYPE_RFID_VERSION_DEVICE: "RFID_VERSION_DEVICE",
        DATATYPE_RFID_STATU_DEVICE  : "RFID_STATU_DEVICE",
        DATATYPE_RFID_BASE_DEVICE   : "RFID_BASE_DEVICE",
        DATATYPE_RFID_DETAIL_DEVICE : "RFID_DETAIL_DEVICE",

        DATATYPE_TAG_MAIN           : "TAG_MAIN",
        DATATYPE_TAG_BASE           : "TAG_BASE",
        DATATYPE_TAG_READER         : "TAG_READER",


        DATATYPE_RECY_GPS_DEVICE    : "RECY_GPS_DEVICE",
        DATATYPE_ULT_GPS_DEVICE     : "ULT_GPS_DEVICE",
        DATATYPE_ULT_STATU_DEVICE   : "ULT_STATU_DEVICE",
        DATATYPE_RFID_GPS_DEVICE    : "RFID_GPS_DEVICE",
        DATATYPE_TAG_STATU          : "TAG_STATU",
        DATATYPE_TAG_GPS            : "TAG_GPS",
        */
    }
}
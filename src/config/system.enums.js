export default {
        // ResultType
        RESULT_FAIL: "FAIL",
        RESULT_OK  : "OK",
        RESULT_NOT : "NOT",

        // Status Type
        STATU_ACTIVE : "ACTIVE",
        STATU_PASSIVE: "PASSIVE",

        // Request body details
        HTTP_HEADER    : "HEADER",
        HTTP_DATA      : "DATA",
        HTTP_CHECKTYPE : "CHECKTYPE",
        HTTP_TOKEN     : "TOKEN",
        HTTP_USERROLE  : "USERROLE",
        HTTP_CUSTOMERID: "CUSTOMERID",
        HTTP_DATATYPE  : "DATATYPE",
        HTTP_READERTYPE: "READERTYPE",

        
        LOGGER_CONTAINER: "CONTAINER",
        LOGGER_LOGTYPE  : "LOGTYPE",
        LOGGER_FUNC     : "FUNC",
        LOGGER_LOG      : "LOG",
        LOGGER_DEBUG    : "DEBUG",
        LOGGER_ERROR    : "ERROR",
        LOGGER_INFO     : "INFO",
        LOGGER_REPORT   : "REPORT",

        READERTYPE_NONE      : "NONE",
        READERTYPE_STATUS    : "STATUS",
        READERTYPE_CAM       : "CAM",
        READERTYPE_GPS       : "GPS",
        READERTYPE_THERM     : "THERM",
        READERTYPE_BASE      : "BASE",
        READERTYPE_TYPE      : "TYPE",
        READERTYPE_SENS      : "SENS",
        READERTYPE_ULT       : "ULT",
        READERTYPE_RF        : "RF",
        READERTYPE_CAMTRIGGER: "CAMTRIGGER",
        READERTYPE_ALARM     : "ALARM",
        READERTYPE_DETAIL    : "DETAIL",
        READERTYPE_VERSION   : "VERSION",
        READERTYPE_UPDATE    : "UPDATE",

        CHECKTYPE_NONE  : "NONE",
        CHECKTYPE_APP   : "APP",
        CHECKTYPE_CONN  : "CONN",
        CHECKTYPE_DEVICE: "DEVICE",

        RFID_APPNAME_NONE    : "None",
        RFID_APPNAME_GPS     : "GpsApp",
        RFID_APPNAME_CHECKER : "CheckerApp",
        RFID_APPNAME_READER  : "ReaderApp",
        RFID_APPNAME_TRANSFER: "TransferApp",
        RFID_APPNAME_CAM     : "CamApp",
        RFID_APPNAME_THERM   : "ThermApp",
        RFID_APPNAME_SYSTEM  : "SystemApp",

        RFID_APPTYPE_NONE    : "NONE",
        RFID_APPTYPE_GPS     : "GPS",
        RFID_APPTYPE_CHECKER : "STATUS",
        RFID_APPTYPE_READER  : "RF",
        RFID_APPTYPE_TRANSFER: "TRANSFER",
        RFID_APPTYPE_CAM     : "CAM",
        RFID_APPTYPE_THERM   : "THERM",
        RFID_APPTYPE_SYSTEM  : "SYSTEM",


        CONTAINER_FULLNESS_STATU_NONE : "NONE",
        CONTAINER_FULLNESS_STATU_EMPTY: "EMPTY",
        CONTAINER_FULLNESS_STATU_LITTLE : "LITTLE",
        CONTAINER_FULLNESS_STATU_MEDIUM : "MEDIUM",
        CONTAINER_FULLNESS_STATU_FULL : "FULL",
        CONTAINER_FULLNESS_STATU_ERROR: "ERROR",

        TAG_STATU_NONE : "NONE",
        TAG_STATU_ERROR: "ERROR",

        RFID_READER_OKBIT   : "5379",
        RFID_READER_STARTBIT: "4354",
        RFID_READER_CHECKBIT: "45",
        RFID_TAG_PATTERN    : "AFA09012018AFA",

        APPTYPE_NONE    : "NONE",
        APPTYPE_ULT     : "ULT",
        APPTYPE_RFID    : "RFID",
        APPTYPE_RECY    : "RECY",
        APPTYPE_ADMIN   : "ADMIN",
        APPTYPE_AUTH    : "AUTH",
        APPTYPE_AFATEK  : "AFATEK",
        APPTYPE_ARVENTO : "ARVENTO",
        APPTYPE_LISTENER: "LISTENER",
        APPTYPE_UPDATE  : "UPDATE",
        APPTYPE_REPORT  : "REPORT",
        APPTYPE_OPTIMIZE: "OPTIMIZE",

        DATATYPE_NONE               : "NONE",
        DATATYPE_CUSTOMER           : "CUSTOMER",
        DATATYPE_USER               : "USER",
        DATATYPE_CUSTOMERCONFIG     : "CUSTOMERCONFIG",
        DATATYPE_ADMINCONFIG        : "ADMINCONFIG",
        DATATYPE_LOCALCONFIG        : "LOCALCONFIG",
        DATATYPE_RECY_MAIN_DEVICE   : "RECY_MAIN_DEVICE",
        DATATYPE_RECY_BASE_DEVICE   : "RECY_BASE_DEVICE",
        DATATYPE_RECY_GPS_DEVICE    : "RECY_GPS_DEVICE",
        DATATYPE_RECY_THERM_DEVICE  : "RECY_THERM_DEVICE",
        DATATYPE_RECY_VERSION_DEVICE: "RECY_VERSION_DEVICE",
        DATATYPE_RECY_ALARM_DEVICE  : "RECY_ALARM_DEVICE",
        DATATYPE_RECY_STATU_DEVICE  : "RECY_STATU_DEVICE",
        DATATYPE_RECY_DETAIL_DEVICE : "RECY_DETAIL_DEVICE",
        DATATYPE_ULT_MAIN_DEVICE    : "ULT_MAIN_DEVICE",
        DATATYPE_ULT_BASE_DEVICE    : "ULT_BASE_DEVICE",
        DATATYPE_ULT_BATTERY_DEVICE : "ULT_BATTERY_DEVICE",
        DATATYPE_ULT_GPS_DEVICE     : "ULT_GPS_DEVICE",
        DATATYPE_ULT_ALARM_DEVICE   : "ULT_ALARM_DEVICE",
        DATATYPE_ULT_THERM_DEVICE   : "ULT_THERM_DEVICE",
        DATATYPE_ULT_VERSION_DEVICE : "ULT_VERSION_DEVICE",
        DATATYPE_ULT_STATU_DEVICE   : "ULT_STATU_DEVICE",
        DATATYPE_ULT_SENS_DEVICE    : "ULT_SENS_DEVICE",
        DATATYPE_RFID_MAIN_DEVICE   : "RFID_MAIN_DEVICE",
        DATATYPE_RFID_GPS_DEVICE    : "RFID_GPS_DEVICE",
        DATATYPE_RFID_ALARM_DEVICE  : "RFID_ALARM_DEVICE",
        DATATYPE_RFID_THERM_DEVICE  : "RFID_THERM_DEVICE",
        DATATYPE_RFID_VERSION_DEVICE: "RFID_VERSION_DEVICE",
        DATATYPE_RFID_STATU_DEVICE  : "RFID_STATU_DEVICE",
        DATATYPE_RFID_BASE_DEVICE   : "RFID_BASE_DEVICE",
        DATATYPE_RFID_DETAIL_DEVICE : "RFID_DETAIL_DEVICE",
        DATATYPE_TAG_MAIN           : "TAG_MAIN",
        DATATYPE_TAG_BASE           : "TAG_BASE",
        DATATYPE_TAG_STATU          : "TAG_STATU",
        DATATYPE_TAG_GPS            : "TAG_GPS",
        DATATYPE_TAG_READER         : "TAG_READER",

        ALARMTYPE_NONE: "NONE",
        ALARMTYPE_ATMP: "THERM",
        ALARMTYPE_AGPS: "GPS",

        ALARMSTATU_NONE : "NONE",
        ALARMSTATU_ALARM: "ALARM",

        THERMSTATU_NONE  : "NONE",
        THERMSTATU_NORMAL: "NORMAL",
        THERMSTATU_HIGH  : "HIGH",

        BATTERYSTATU_NONE  : "NONE",
        BATTERYSTATU_NORMAL: "NORMAL",
        BATTERYSTATU_LOW   : "LOW",

        USER_ROLE_GUEST : "GUEST",
        USER_ROLE_ADMIN : "ADMIN",
        USER_ROLE_REPORT: "REPORT",

        CONTAINERTYPE_NONE: "NONE",

        TRUCKTYPE_NONE: "NONE",

        DEVICETYPE_NONE: "NONE",
        DEVICETYPE_RFID: "RFID",
        DEVICETYPE_ULT : "ULT",
        DEVICETYPE_RECY: "RECY",

        RFID_DEVICE_TYPE_NONE: "NONE",

        ULT_DEVICE_TYPE_NONE: "NONE",

        RECY_DEVICE_TYPE_NONE: "NONE",

        RESULT_ERROR_HTTP_PARSE                      : "HTTP_PARSE",
        RESULT_ERROR_HTTP_POST                       : "HTTP_POST",
        RESULT_ERROR_USER_INVALIDTOKEN               : "USER_INVALIDTOKEN",
        RESULT_ERROR_USER_ENDTOKEN                   : "USER_ENDTOKEN",
        RESULT_ERROR_USER_INVALIDUSER                : "USER_INVALIDUSER",
        RESULT_ERROR_USER_INVALIDUSERROLE            : "USER_INVALIDUSERROLE",
        RESULT_ERROR_USER_INVALIDPASSWORD            : "USER_INVALIDPASSWORD",
        RESULT_ERROR_USER_USERNAMEEXIST              : "USER_USERNAMEEXIST",
        RESULT_ERROR_USER_USEREMAILEXIST             : "USER_USEREMAILEXIST",
        RESULT_ERROR_USER_PASSWORDEMPTY              : "USER_PASSWORDEMPTY",
        RESULT_ERROR_READERTYPE                      : "READERTYPE",
        RESULT_ERROR_DEVICETYPE                      : "DEVICETYPE",
        RESULT_ERROR_DATATYPE                        : "DATATYPE",
        RESULT_ERROR_CUSTOMER_NOTFOUND               : "CUSTOMER_NOTFOUND",
        RESULT_ERROR_USER_NOTFOUND                   : "USER_NOTFOUND",
        RESULT_ERROR_DEVICE_NOTFOUND                 : "DEVICE_NOTFOUND",
        RESULT_ERROR_DB_SAVE                         : "DB_SAVE",
        RESULT_ERROR_REDIS_SAVE                      : "REDIS_SAVE",
        RESULT_ERROR_DB_GET                          : "DB_GET",
        RESULT_ERROR_REDIS_GET                       : "REDIS_GET",
        RESULT_ERROR_CUSTOMER_INVALID                : "CUSTOMER_INVALID",
        RESULT_ERROR_CUSTOMER_CUSTOMERCONFIG_NOTFOUND: "CUSTOMER_CUSTOMERCONFIG_NOTFOUND",
        RESULT_ERROR_CUSTOMER_ADMINCONFIG_NOTFOUND   : "CUSTOMER_ADMINCONFIG_NOTFOUND",
        RESULT_ERROR_CUSTOMER_LOCALCONFIG_NOTFOUND   : "CUSTOMER_LOCALCONFIG_NOTFOUND",
        RESULT_ERROR_CUSTOMER_TAGS_NOTFOUND          : "CUSTOMER_TAGS_NOTFOUND",
        RESULT_ERROR_CUSTOMERS_NOTFOUND              : "CUSTOMERS_NOTFOUND",
        RESULT_ERROR_DEVICES_NOTFOUND                : "DEVICES_NOTFOUND",
        RESULT_ERROR_CUSTOMERS_DEVICES_NOTFOUND      : "CUSTOMERS_DEVICES_NOTFOUND",
        RESULT_ERROR_TAG_NOTFOUND                    : "TAG_NOTFOUND",
        RESULT_ERROR_TAG_CUSTOMER_NOTFOUND           : "TAG_CUSTOMER_NOTFOUND",
        RESULT_ERROR_APP_STARTED                     : "APP_STARTED",

        REDIS_CUSTOMER_CHANNEL                       : "ch-customer-",
}
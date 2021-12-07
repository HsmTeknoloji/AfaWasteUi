module.exports = {
    apiUrl: 'http://afatek.aws.afatek.com.tr',
    socketUrl: 'ws://afatek.aws.afatek.com.tr/websocket/socket',
    s3Url: 'https://afatek-waste-videos-s3.s3.eu-central-1.amazonaws.com/WAIT_CAM/',
    geocodingApi: `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.VUE_APP_GEOCODING_API}`,
    webApiUrl: '/webapi',
    authApiUrl: '/authapi',
    adminApiUrl: '/adminapi',
    reportApiUrl: '/reportapi',
    afatekApiUrl: '/afatekapi',
    optimizeApiUrl: '/optimizeapi',
}
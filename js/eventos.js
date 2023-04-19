navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
}, e => {
    console.log(e);
});
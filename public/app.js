const callback = () => {
  const map = new google.maps.plugins.shim.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
};

google.maps.plugins.shim.initialize({
  callback,
  apiKey: "",
  version: "weekly"
});

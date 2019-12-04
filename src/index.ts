import { Loader } from "@googlemaps/loader";

let isInitialized = false;

function check() {
  if (!isInitialized) {
    throw new Error(
      "google.maps.plugins.shim.initialize must be called before use."
    );
  }
}

export class MVCObject {
  addListener(eventName, handler) {
    check();
    return google.maps.MVCObject.prototype.addListener.bind(this)(
      eventName,
      handler
    );
  }
  bindTo(key, target, targetKey, noNotify) {
    check();
    return google.maps.MVCObject.prototype.bindTo.bind(this)(
      key,
      target,
      targetKey,
      noNotify
    );
  }
  get(key) {
    check();
    return google.maps.MVCObject.prototype.get.bind(this)(key);
  }
  notify(key) {
    check();
    return google.maps.MVCObject.prototype.notify.bind(this)(key);
  }
  set(key, value) {
    check();
    return google.maps.MVCObject.prototype.set.bind(this)(key, value);
  }
  setValues(values) {
    check();
    return google.maps.MVCObject.prototype.setValues.bind(this)(values);
  }
  unbind(key) {
    check();
    return google.maps.MVCObject.prototype.unbind.bind(this)(key);
  }
  unbindAll() {
    check();
    return google.maps.MVCObject.prototype.unbindAll.bind(this)();
  }
  /**
   * Abstract method
   * @param key
   */
  changed(key) {
    check();
    return google.maps.MVCObject.prototype.changed.bind(this)(key);
  }
}

export class Map extends MVCObject {
  constructor(div, options) {
    super();
    google.maps.Map.prototype.constructor.bind(this)(div, options);
  }

  fitBounds(bounds, padding) {
    return google.maps.Map.prototype.fitBounds.bind(this)(bounds, padding);
  }

  getBounds() {
    return google.maps.Map.prototype.getBounds.bind(this)();
  }

  getCenter() {
    return google.maps.Map.prototype.getCenter.bind(this)();
  }

  getClickableIcons() {}

  getDiv() {
    return google.maps.Map.prototype.getDiv.bind(this)();
  }

  getHeading() {
    return google.maps.Map.prototype.getHeading.bind(this)();
  }

  getMapTypeId() {
    return google.maps.Map.prototype.getMapTypeId.bind(this)();
  }

  getProjection() {
    return google.maps.Map.prototype.getProjection.bind(this)();
  }

  getStreetView() {
    return google.maps.Map.prototype.getStreetView.bind(this)();
  }

  getTilt() {
    return google.maps.Map.prototype.getTilt.bind(this)();
  }

  getZoom() {
    return google.maps.Map.prototype.getZoom.bind(this)();
  }

  panBy(x, y) {
    return google.maps.Map.prototype.panBy.bind(this)(x, y);
  }

  panTo(latLng) {
    return google.maps.Map.prototype.panTo.bind(this)(latLng);
  }

  panToBounds(latLngBounds, padding) {
    return google.maps.Map.prototype.panToBounds.bind(this)(
      latLngBounds,
      padding
    );
  }

  setCenter(latlng) {
    return google.maps.Map.prototype.setCenter.bind(this)(latlng);
  }

  setClickableIcons(value) {
    return google.maps.Map.prototype.setClickableIcons.bind(this)(value);
  }

  setHeading(heading) {
    return google.maps.Map.prototype.setHeading.bind(this)(heading);
  }

  setMapTypeId(mapTypeId) {
    return google.maps.Map.prototype.setMapTypeId.bind(this)(mapTypeId);
  }

  setOptions(options) {
    return google.maps.Map.prototype.setOptions.bind(this)(options);
  }

  setStreetView(panorama) {
    return google.maps.Map.prototype.setStreetView.bind(this)(panorama);
  }

  setTilt(tilt) {
    return google.maps.Map.prototype.setTilt.bind(this)(tilt);
  }

  setZoom(zoom) {
    return google.maps.Map.prototype.setZoom.bind(this)(zoom);
  }
  streetView_changed() {}
}

interface InitializeOptions {
  callback?: () => any;
  apiKey?: string;
  version?: string;
}

export function extends_(d, b) {
  function __() {
    this.constructor = d;
  }
  d.prototype =
    b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
}

export const initialize = ({
  callback,
  apiKey,
  version
}: InitializeOptions) => {
  const loader = new Loader({ apiKey, version });

  loader.loadCallback(() => {
    isInitialized = true;

    // Extend all prototype from google.maps.*
    extends_(MVCObject, google.maps.MVCObject);
    extends_(Map, google.maps.Map);

    callback();
  });
};

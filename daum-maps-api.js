///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/zerocho:daum-maps-api/daum-map-api.js                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
DaumMaps = {
  load: _.once(function (key, options) {
    if (!key && Meteor.settings && Meteor.settings.public && Meteor.settings.public.daum && Meteor.settings.public.daum.key) {
      key = Meteor.settings.public.daum.key;
    } else {
      if (console !== undefined) {
        return console.log("daum-maps - tried to load but key not supplied");
      }
    }
    console.log('daumKey', key);
    var script = document.createElement('script');
    var self = this;
    script.type = 'text/javascript';
    script.src = '//apis.daum.net/maps/maps3.js?autoload=false&apikey=' + key;
    script.addEventListener('load', function () {
      daum.maps.load(function() {
        self._init();
        console.log('init');
      });
    }, false);
    document.getElementsByTagName('head')[0].appendChild(script);
    return key;
  }),
  _loaded: new ReactiveVar(false),
  loaded: function () {
    return this._loaded.get();
  },
  _init: function () {
    this._loaded.set(true);
  }
};
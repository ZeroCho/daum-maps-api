Package.describe({
  name: 'zerocho:daum-maps-api',
  version: '0.0.1',
  summary: 'Daum Maps API packaged for Meteor',
  git: 'https://github.com/zerocho/daum-maps-api',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use(['underscore', 'reactive-var']);
  api.addFiles('daum-maps-api.js', 'client');
  api.export('DaumMaps', 'client')
});
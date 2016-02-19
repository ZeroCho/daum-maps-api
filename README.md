# Daum Maps API async packaged for Meteor
Daum Maps API입니다. 비동기식으로 로딩합니다.

## How to install / 설치 방법
```
meteor add zerocho:daum-maps-api
```
## Using Meteor.settings
```json
{
  "public": {
    "daum": {
      "key": "<YOUR API KEY>"
    }
  }
}
```
## Document / 설명서
Daum Maps API를 기존 설명서대로 Meteor에서 실행하면
Failed to execute 'write' on 'Document': It isn't possible to write into a document from an asynchronously-loaded external script unless it is explicitly opened
문제가 발생하는데 이것을 해결했습니다.
```js
if (Meteor.isClient) {
  Meteor.startup(function() {
    DaumMaps.load('<YOUR API KEY>');
    // can leave out key if it's in settings / Meteor.settings에 키가 있으면 키를 넣을 필요가 없습니다.
  });
}
```
## Official API Document / 공식 API 설명서
[Daum Maps API DOC](http://apis.map.daum.net/web/guide/)

## TODO
Fix DaumMaps.load function to accept options for the services and clusters library

## License
MIT라이센스
자유롭게 수정, 배포 가능합니다.
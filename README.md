# Nintendo Museum Reservation Notifier

[![build](https://github.com/zhxie/nintendo-museum-reservation-notifier/actions/workflows/build.yaml/badge.svg)](https://github.com/zhxie/nintendo-museum-reservation-notifier/actions/workflows/build.yaml)

Nintendo Museum Reservation Notifier is a tool designed to help users book Nintendo Museum.

_Nintendo Museum Reservation Notifier does not directly book Nintendo Museum for you."_

## Usage

1. Install [Bark](https://bark.day.app/) on your phone.
2. Install the app.
3. Fill in every input in the app.
4. Start and wait for the push notification.

## Build

```sh
yarn
yarn package
```

## FAQ

### App is damaged and you should move it to trash on macOS

```sh
xattr -cr /Applications/nintendo-museum-reservation-notifier.app
```

## License

Nintendo Museum Reservation Notifier is licensed under [the MIT License](/LICENSE).

This app is not related to Nintendo.

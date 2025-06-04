<h1 align="center">
  <br>
  <a href="https://github.com/imsamad/signalify"><img src="./ciphora-client/build/icon.png" alt="signalify" width="180" style= "margin-bottom: 1rem"></a>
  <br>
  signalify
  <br>
  <br>
</h1>

<h4 align="center">A decentralized end-to-end encrypted messaging app.</h4>

A peer-to-peer end-to-end encrypted messaging app. Implements the secure [signal
protocol](https://signal.org/docs/specifications/doubleratchet/) for the
end-to-end encryption of messages and
[PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) for identity
verification and authentication. This approach not only protects against
[man-in-the-middle
attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) but removes the
need for in-person verification like with other E2E encryption apps (WhatsApp,
Signal,...) where identity keypairs are generated on a per-device basis and each
has to be verified manually in-person.

<br>
<p align="center">
  <a href="https://github.com/imsamad/signalify/releases/latest">
    <img src="./ciphora-client/.github/messenger.png" width="846">
  </a>
</p>
<p align="center">
  <a href="https://github.com/imsamad/signalify/releases/latest">
    <img src="./ciphora-client/.github/messenger_dark.png" width="846">
  </a>
</p>

## Features

- [x] End-to-end encrypted messaging
- [x] Peer-to-peer messaging
- [x] Sending images
- [x] Sending files
- [x] Dark Mode
- [ ] Offline messaging
- [ ] Local encryption

You are welcome to open pull requests to help implement the features still to
do!

## Install

## Dev

### Setup

Clone the repos

```
$ git clone https://github.com/imsamad/signalify.git
```

Install deps for both repos

```
$ cd server && yarn && cd ../server && yarn
```

### Run

For faster dev, run the bundler (webpack)

```
$ yarn run bundler
```

In a new tty, run the app

```
$ gulp
```

To test the app locally with another app, just run a second instance in a new
tty

```
$ gulp
```

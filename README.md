<h1 align="center">@compactjs/clipboard</h1>
<h3 align="center">Copy to clipboard.</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/@compactjs/clipboard" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@compactjs/clipboard.svg">
  </a>
  <a href="https://github.com/CompactJS/clipboard/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/CompactJS/clipboard" />
  </a>
</p>
<p align="center">
  ·
  <a href="https://github.com/CompactJS/clipboard#readme">Homepage</a>
  ·
  <a href="https://compactjs.github.io/clipboard">View Demo</a>
  ·
  <a href="https://github.com/CompactJS/clipboard/issues">Report Bug / Request Feature</a>
  ·
</p>

## Table of Contents

- [Installation](#Install)
- [Usage](#usage)
- [Test](#run-tests)
- [Contact](#contact)
- [Contributing](#Contributing)
- [License](#license)

## Install

### NPM:

```sh
npm install @compactjs/clipboard
```

### CDN:

```html
<script src="https://unpkg.com/@compactjs/clipboard/dist/index.umd.js"></script>
```

## Usage

### As module:

```javascript
import { clipboard } from '@compactjs/clipboard';
```

API:

```typescript
/**
 * Copy text to clipboard.
 * @param input Either text to copy or HTMLElement to copy from
 */
function clipboard(
  input: string | HTMLTextAreaElement | HTMLInputElement
): void;
```

**Note:** A copy to clipboard need to be triggered by user action, like a button press!

### Example:

```javascript
document
  .getElementById('copy-string')
  .addEventListener('click', () =>
    clipboard('This text is going to be copied.')
  );
```

Have a look at the [example](https://github.com/CompactJS/clipboard/blob/master/example/index.html).

Or checkout the [demo](https://compactjs.github.io/clipboard).

## Run tests

```sh
npm run test
```

## Contact

👤 **Timo Bechtel**

- Website: https://timobechtel.com
- Twitter: [@TimoBechtel](https://twitter.com/TimoBechtel)
- GitHub: [@TimoBechtel](https://github.com/TimoBechtel)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />

1. Check [issues](https://github.com/CompactJS/clipboard/issues)
1. Fork the Project
1. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
1. Test your changes `npm run test`
1. Commit your Changes (`git commit -m 'feat: add amazingFeature'`)
1. Push to the Branch (`git push origin feat/AmazingFeature`)
1. Open a Pull Request

### Commit messages

This project uses semantic-release for automated release versions. So commits in this project follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines. I recommend using [commitizen](https://github.com/commitizen/cz-cli) for automated commit messages.

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Distributed under the [MIT](https://github.com/CompactJS/clipboard/blob/master/LICENSE) License.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

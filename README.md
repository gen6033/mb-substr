# mb-substr

> multibyte substr


## Install

```
$ npm install mb-substr
```


## Usage

```js
const mbsubstr = require('mb-substr');

mbsubstr('あいうえお', 2 ,2);
//=> 'い'

mbsubstr('あいうえお', 2);
//=> 'いうえお'

mbsubstr('あいうえお', 1, 2);
//=> ''

mbsubstr('あいうえお', 1, 3);
//=> 'い'

mbsubstr('aあいうえお', 1, 2);
//=> 'あ'
```


## API

### mbsubstr(input, [start, [len]])

#### input: `string`

#### start: `number`

##### len: `number`


## License

MIT

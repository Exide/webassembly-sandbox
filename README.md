# WebAssembly Sandbox

1. Code is written in `main.c`.

2. Then it is compiled into `main.wasm`, with the `add` function exported. Notice it has an underscore in the call to `emcc` 🤷🏻‍♂️.
   ```
   emcc -v main.c -o main.wasm -sSTANDALONE_WASM -sEXPORTED_FUNCTIONS=_add
   ```
   _You can run Emscripten from Docker also..._
   ```
   docker run --rm -v $(pwd):/src emscripten/emsdk emcc -v main.c -o main.wasm -sSTANDALONE_WASM -sEXPORTED_FUNCTIONS=_add
   ```

3. The `main.js` wrapper loads the binary `main.wasm` file and makes available the exported function(s).

4. Finally, you call `import { add } from './main.js'` to get access to the C code within Javascript. See `index.html` for a working example.

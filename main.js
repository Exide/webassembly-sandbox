const binary = await fetch('main.wasm');
const imports = {};
const wasm = await WebAssembly.instantiateStreaming(binary, imports);

export const add = wasm.instance.exports.add;

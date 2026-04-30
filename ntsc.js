let inputCanvas = document.getElementById('inputCanvas');
let outputCanvas = document.getElementById('outputCanvas');
let inputCtx = inputCanvas.getContext('2d');
let outputCtx = outputCanvas.getContext('2d');
let selectedImage = null;

document.getElementById('inputImage').addEventListener('change', function(e) {
  let reader = new FileReader();
  reader.onload = function(event) {
    let img = new Image();
    img.onload = function() {
      inputCanvas.width = img.width;
      inputCanvas.height = img.height;
      inputCtx.drawImage(img, 0, 0);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});

document.getElementById('processBtn').addEventListener('click', function() {
  let imgData = inputCtx.getImageData(0, 0, inputCanvas.width, inputCanvas.height);
  // In a real setup, call Module.NTSCFilter(imgData) provided by the WASM module...
  // For demo, we'll just copy the input to output:
  outputCanvas.width = inputCanvas.width;
  outputCanvas.height = inputCanvas.height;

  // Placeholder: Replace this block with actual C++ WebAssembly processing
  // For now, just copy input to output
  outputCtx.putImageData(imgData, 0, 0);
  // END Placeholder
});
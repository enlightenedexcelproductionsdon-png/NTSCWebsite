#include <emscripten/bind.h>
#include <vector>

// Example: Identity filter (replace with your actual NTSC filter)
std::vector<uint8_t> ntsc_filter(const std::vector<uint8_t>& input, int width, int height) {
    // INPUT: [R,G,B,A, ...] array for a WxH image
    std::vector<uint8_t> output = input; // For demo purposes, real NTSC effect logic goes here!
    // TODO: implement NTSC effect in-place
    return output;
}

EMSCRIPTEN_BINDINGS(ntsc_module) {
    emscripten::function("NTSCFilter", &ntsc_filter);
}
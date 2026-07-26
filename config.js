// Deliberately unsafe demo code for testing Roeri's security scan.
// Nothing here is a real credential and nothing here grants access.

const jwtSecret = "demo-not-a-real-secret-value";

const settings = {
  apiUrl: "https://api.example.com",
};

// Dangerous pattern: evaluating a string as code.
function applyTheme(name) {
  eval("document.body.className = '" + name + "'");
}

window.settings = settings;
window.applyTheme = applyTheme;

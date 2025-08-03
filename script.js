document.getElementById("onboardingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const businessType = document.getElementById("businessType").value;
  const checkboxes = document.querySelectorAll(".checkbox-group input:checked");
  const selectedFeatures = Array.from(checkboxes).map(cb => cb.value);

  const preview = `
    <strong>Business Type:</strong> ${businessType}<br/>
    <strong>Features:</strong> ${selectedFeatures.join(", ")}
  `;

  document.getElementById("previewBox").innerHTML = preview;
});

function trackShipment() {
    let id = document.getElementById("trackId").value;
    let result = document.getElementById("trackResult");
  
    if (id === "") {
      result.innerHTML = "Please enter a Tracking ID.";
      return;
    }
  
    result.innerHTML = "Tracking Status for " + id + ": In Transit (Sample Data)";
  }
  
  function calculateCharge() {
    let weight = document.getElementById("weight").value;
    let distance = document.getElementById("distance").value;
    let output = document.getElementById("charges");
  
    if (weight === "" || distance === "") {
      output.innerHTML = "Fill both fields.";
      return;
    }
  
    let cost = (weight * 5) + (distance * 2);
    output.innerHTML = "Estimated Charges: ₹" + cost;
  }
  
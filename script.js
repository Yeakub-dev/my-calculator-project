function appendValue(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function backspace() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    const display = document.getElementById("display");
    try {
      const result = eval(display.value);
      addToHistory(display.value + " = " + result);
      display.value = result;
    } catch {
      display.value = "Error";
    }
  }
  
  function addToHistory(entry) {
    const historyList = document.getElementById("historyList");
    const li = document.createElement("li");
    li.textContent = entry;
    historyList.prepend(li);
  }
  
  function toggleTheme() {
    document.body.classList.toggle("dark");
  }
  
  document.addEventListener("keydown", function (e) {
    const key = e.key;
    const allowedKeys = "0123456789/*-+.()";
    if (allowedKeys.includes(key)) {
      appendValue(key);
    } else if (key === "Enter") {
      calculate();
    } else if (key === "Backspace") {
      backspace();
    } else if (key === "Escape") {
      clearDisplay();
    }
  });
  
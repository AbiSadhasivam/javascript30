let inputs = document.querySelectorAll(".controls");

function handleUpdate() {
  const suffix = this.name == "spacing" ? "px" : "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

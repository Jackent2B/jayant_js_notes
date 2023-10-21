document.getElementById("generatePDF").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const bloodGroup = document.getElementById("bloodGroup").value;
  const image = document.getElementById("image").files[0];

  if (!name || !bloodGroup || !image) {
    alert("Please fill in all the fields and select an image.");
    return;
  }

  const pdf = new jsPDF();

  const img = new Image();
  img.src = URL.createObjectURL(image);

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    const imageData = canvas.toDataURL("image/jpeg");

    pdf.text(20, 20, "Name: " + name);
    pdf.text(20, 30, "Blood Group: " + bloodGroup);
    pdf.addImage(imageData, "JPEG", 15, 40, 180, 160);
    pdf.save("user_data.pdf");
  };
});

// Page navigation logic
function navigateTo(sectionId) {
  document.querySelectorAll('main, section').forEach(s => s.classList.add('hidden'));
  document.getElementById(sectionId + 'Page').classList.remove('hidden');
}

function goHome() {
  document.querySelectorAll('main, section').forEach(s => s.classList.add('hidden'));
  document.getElementById('homePage').classList.remove('hidden');
}

// Text to PDF
async function createTextPdf() {
  const { jsPDF } = window.jspdf;
  const text = document.getElementById("pdfText").value;
  const doc = new jsPDF();
  doc.text(text || "No content entered.", 10, 20);
  doc.save("text_to_pdf.pdf");
}

// Image to PDF
async function createImagePdf() {
  const { jsPDF } = window.jspdf;
  const input = document.getElementById("imageInput");
  const doc = new jsPDF();
  const files = input.files;

  if (files.length === 0) {
    alert("Please select image(s).");
    return;
  }

  for (let i = 0; i < files.length; i++) {
    const img = await toBase64(files[i]);
    doc.addImage(img, 'JPEG', 10, 10, 180, 160);
    if (i < files.length - 1) doc.addPage();
  }

  doc.save("image_to_pdf.pdf");
}

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// Merge PDFs or Images - Placeholder
function mergeFiles() {
  alert("Merge functionality coming soon! Will support merging images and PDFs.");
}

// Edit PDF - Placeholder
function editPdf() {
  const { jsPDF } = window.jspdf;
  const text = document.getElementById("editText").value;
  const doc = new jsPDF();
  doc.text(text || "No edits made.", 10, 20);
  doc.save("edited_pdf.pdf");
}

// My Files - Placeholder
// A real version would use IndexedDB/localStorage
function loadMyFiles() {
  const list = document.getElementById("fileList");
  list.innerHTML = "<li>No saved files yet. Feature coming soon!</li>";
}

// Receipt PDF Generator
function createReceiptPdf() {
  const { jsPDF } = window.jspdf;
  const text = document.getElementById("receiptDetails").value;
  const doc = new jsPDF();
  doc.text(text || "No receipt entered.", 10, 20);
  doc.save("receipt.pdf");
}// Page navigation logic
function navigateTo(sectionId) {
  document.querySelectorAll('main, section').forEach(s => s.classList.add('hidden'));
  document.getElementById(sectionId + 'Page').classList.remove('hidden');
}

function goHome() {
  document.querySelectorAll('main, section').forEach(s => s.classList.add('hidden'));
  document.getElementById('homePage').classList.remove('hidden');
}

// Text to PDF
async function createTextPdf() {
  const { jsPDF } = window.jspdf;
  const text = document.getElementById("pdfText").value;
  const doc = new jsPDF();
  doc.text(text || "No content entered.", 10, 20);
  doc.save("text_to_pdf.pdf");
}

// Image to PDF
async function createImagePdf() {
  const { jsPDF } = window.jspdf;
  const input = document.getElementById("imageInput");
  const doc = new jsPDF();
  const files = input.files;

  if (files.length === 0) {
    alert("Please select image(s).");
    return;
  }

  for (let i = 0; i < files.length; i++) {
    const img = await toBase64(files[i]);
    doc.addImage(img, 'JPEG', 10, 10, 180, 160);
    if (i < files.length - 1) doc.addPage();
  }

  doc.save("image_to_pdf.pdf");
}

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// Merge PDFs or Images - Placeholder
function mergeFiles() {
  alert("Merge functionality coming soon! Will support merging images and PDFs.");
}

// Edit PDF - Placeholder
function editPdf() {
  const { jsPDF } = window.jspdf;
  const text = document.getElementById("editText").value;
  const doc = new jsPDF();
  doc.text(text || "No edits made.", 10, 20);
  doc.save("edited_pdf.pdf");
}

// My Files - Placeholder
// A real version would use IndexedDB/localStorage
function loadMyFiles() {
  const list = document.getElementById("fileList");
  list.innerHTML = "<li>No saved files yet. Feature coming soon!</li>";
}

// Receipt PDF Generator
function createReceiptPdf() {
  const { jsPDF } = window.jspdf;
  const text = document.getElementById("receiptDetails").value;
  const doc = new jsPDF();
  doc.text(text || "No receipt entered.", 10, 20);
  doc.save("receipt.pdf");
}

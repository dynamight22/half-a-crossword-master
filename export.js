
document.getElementById('exportButton').addEventListener('click', function() {
  // Tạo một đối tượng jsPDF
  console.log('Nút Export đã được bấm.');

  var doc = new jsPDF();
  // Thêm nội dung HTML hoặc trang web cần xuất ra tệp PDF vào tệp PDF
  // Ví dụ:
  doc.fromHTML(document.body, 15, 15);

  // Lưu tệp PDF với tên do người dùng nhập
  doc.save(fileName + '.pdf');
});



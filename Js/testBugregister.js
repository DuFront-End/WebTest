document.getElementById("sign-up").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const ho = document.getElementById("ho").value;
    const ten = document.getElementById("ten").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("pass").value;
    const errorMessage = document.getElementById("errorMessage");

    if (!email && !password && !ho && !ten && !phone) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Vui lòng nhập đầy đủ thông tin.";
        alert("Vui lòng nhập đầy đủ thông tin");
    } else if (!email) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Vui lòng nhập email.";
        alert("Vui lòng nhập email.");
    } else if (!password) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Vui lòng nhập mật khẩu.";
        alert("Vui lòng nhập mật khẩu.");
    } else if (!ho) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Vui lòng nhập Họ của bạn.";
        alert("Vui lòng không để trống thông tin.");
    } else if (!ten) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Vui lòng nhập Tên của bạn.";
        alert("Vui lòng không để trống thông tin.");
    } else if (!phone) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Vui lòng nhập SĐT của bạn.";
        alert("Vui lòng không để trống thông tin.");
    } else {
        errorMessage.style.display = "none"; 
        alert("Đăng ký thành công!"); 
        window.location.href = 'login.html';
    }
});
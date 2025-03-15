document.getElementById("loginForm").addEventListener("submit", function(event) {
            
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
   
    if (!email && !password) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Vui lòng nhập đầy đủ email và mật khẩu.";
        alert("Vui lòng nhập đầy đủ email và mật khẩu.");
    } else if (!email) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Vui lòng nhập email.";
        alert("Vui lòng nhập email.");
    } else if (!password) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Vui lòng nhập mật khẩu.";
        alert("Vui lòng nhập mật khẩu.");
    } else {
        errorMessage.style.display = "none"; 
        alert("Đăng nhập thành công!"); 
        window.location.href = 'index.html';
    }
});
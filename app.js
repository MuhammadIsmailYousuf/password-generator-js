function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}

function updatePassword() {
    document.getElementById('password').value = generatePassword();
}

document.getElementById('generateBtn').addEventListener('click', updatePassword);

// Generate a new password every 20 seconds
setInterval(updatePassword, 20000);

// Generate an initial password
updatePassword();

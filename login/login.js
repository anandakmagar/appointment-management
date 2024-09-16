
document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://a7f10b477b1ee4578bb3d5ccbb65798c-39982317.us-east-2.elb.amazonaws.com/security/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);
            window.location.href = 'home.html';
        } else {
            console.error('Failed to log in:', response.status, response.statusText);
            alert('Failed to log in. Please check your credentials.');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred while logging in.');
    }
});

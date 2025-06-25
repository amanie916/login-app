document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // prevents the form from refreshing the page when submitted

  // grabbing the input values typed by the user
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    // making a POST request to the backend login route (which is running on port 3000)
    // since we're using Live Server on a different port, we need to specify the full URL
    const res = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }) // sending email and password as JSON
    });

    const data = await res.json(); // parsing the response as JSON so we can read it

    if (res.ok) {
      // if login is successful, display the token from the backend
      document.getElementById('result').innerText = 'Login success! Token: ' + data.token;
    } else {
      // if the login failed (like wrong password or user not found), show the message from the backend
      document.getElementById('result').innerText = 'Login failed: ' + data.msg;
    }
  } catch (err) {
    // this runs if the request itself fails (like the backend isn't running or there's a network issue)
    console.error('Could not connect to server:', err);
    document.getElementById('result').innerText = 'Error connecting to server.';
  }
});

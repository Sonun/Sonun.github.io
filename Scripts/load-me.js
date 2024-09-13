
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Login - Windows</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f2f2f2;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .login-container {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      width: 300px;
    }
    .login-header {
      text-align: center;
    }
    .login-header img {
      width: 100px;
    }
    .login-form {
      margin-top: 20px;
    }
    .login-form input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .login-form-button {
      width: 100%;
      padding: 10px;
      background-color: #0078d4;
      border: none;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <div class="login-container">
    <div class="login-header">
      <h2>Anmeldung</h2>
    </div>
    <form class="login-form">
      <input type="text" placeholder="Benutzername" required autofocus>
      <input type="password" placeholder="Passwort" required>
      <button type="submit" class="login-form-button">Anmelden</button>
    </form>
	<div class="warning-message">
	  <h2>Das hätte nicht klappen sollen</h2>
	  <p>Aus irgendeinem Grund kann ich sehr einfach JavaScript Scripts in das KI-Portal einbinden. Ich denke es ist klar, warum das ein Sicherheitsrisiko ist. Eine Mail zu einem malicious Chat sieht nicht gefährlich aus, könnte aber große Gefahr mit sich tragen.</p>
	</div>
  </div>
</body>
</html>

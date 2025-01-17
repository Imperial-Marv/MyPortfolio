"use client";

import React, { useState } from 'react';
import '../styles/passwordcheck.css';

export default function PasswordSecurityPage() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");

  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      setSuggestion("Consider adding more characters, including numbers, symbols, and uppercase letters.");
      return "Weak";
    } else if (password.length < 10) {
      setSuggestion("Try adding a mix of symbols, numbers, and both uppercase and lowercase letters to strengthen your password.");
      return "Moderate";
    } else {
      setSuggestion("Your password looks strong. Consider using a password manager to store it securely.");
      return "Strong";
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(checkPasswordStrength(value));
  };

  const generateSafePassword = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/";
    let newPassword = "";
    for (let i = 0; i < 12; i++) {
      newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setGeneratedPassword(newPassword);
    setPassword(newPassword);
    setStrength(checkPasswordStrength(newPassword));
  };

  return (
    <div className="password-check-page">
      <header className="password-check-header">
        <h1>Password Security Checker</h1>
      </header>

      <main className="password-check-main">
        <section className="password-check-section">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            className="password-input"
          />
          <p>
            Password Strength: <span className="password-strength">{strength}</span>
          </p>
          {suggestion && (
            <p className="password-suggestion">{suggestion}</p>
          )}
          <button onClick={generateSafePassword} className="generate-password-button">
            Generate Safe Password
          </button>
          {generatedPassword && (
            <p className="generated-password">Suggested Password: {generatedPassword}</p>
          )}
        </section>

        <section className="cybersecurity-news-section">
          <h2>Cybersecurity News</h2>
          <iframe
            src="https://cybersecuritynews.com"
            title="Cybersecurity News"
            className="cybersecurity-news-iframe"
            style={{ border: "none" }}
          ></iframe>
        </section>
      </main>
    </div>
  );
}

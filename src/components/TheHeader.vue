<template>
    <header class="header">
      <h1 class="logo">My App</h1>
      <div class="dark-mode-toggle">
        <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />
      </div>
      <nav class="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  </template>
  
  <script setup>
  function toggleDarkMode() {
    document.documentElement.classList.toggle("my-app-dark");
  }
  </script>
  
  <style>
  .dark-mode-toggle {
    padding-right: 120rem;
  }
  .header {
    background-color: #333;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav a {
    color: white;
    margin-left: 1rem;
    text-decoration: none;
  }
  
  .nav a:hover {
    text-decoration: underline;
  }
  </style>
  
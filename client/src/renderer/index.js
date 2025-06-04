import { ipcRenderer } from 'electron';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { NotificationProvider } from './lib/notifications';

// Show dark mode if it is already enabled in the operating system
let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Sets the UI theme appropriately
function setTheme() {
  if (isDarkMode) {
    // Use dark theme
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
  } else {
    // Use light theme
    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-light');
  }
}

// Switches the UI theme between light and dark
function switchTheme() {
  isDarkMode = !isDarkMode;
  setTheme();
}

// Add a shortcut to switch themes
window.onkeyup = function (e) {
  // ctrl + t
  if (e.ctrlKey && e.key === 't') {
    switchTheme();
  }
};

// Listen for system dark mode changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    isDarkMode = e.matches;
    setTheme();
  });

// Set theme accordingly
setTheme();

// Render the entire UI
const root = createRoot(document.getElementById('app'));
root.render(
  <NotificationProvider>
    <App />
  </NotificationProvider>
);

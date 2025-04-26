export interface NotificationOptions {
  title?: string;
  message?: string;
  buttonText?: string;
  redirectUrl?: string;
  autoRedirectDelay?: number;
}

export function showNotificationRegister(options: NotificationOptions = {}) {
  const {
    title = "Registration Successful",
    message = "Your account has been created successfully. You will be redirected to the login page.",
    buttonText = "OK",
    redirectUrl = "/login",
    autoRedirectDelay = 5000,
  } = options;

  const overlay = document.createElement("div");
  overlay.className =
    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";

  const popup = document.createElement("div");
  popup.className = "bg-white rounded-xl shadow-xl p-6 max-w-sm w-full mx-4";

  const content = document.createElement("div");
  content.className = "text-center";

  const icon = document.createElement("div");
  icon.className =
    "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4";
  icon.innerHTML = `
      <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    `;

  const titleElement = document.createElement("h3");
  titleElement.className = "text-lg font-medium text-gray-900 mb-2";
  titleElement.textContent = title;

  const messageElement = document.createElement("p");
  messageElement.className = "text-sm text-gray-500 mb-4";
  messageElement.textContent = message;

  const button = document.createElement("button");
  button.className =
    "w-full py-2 px-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all";
  button.textContent = buttonText;

  content.appendChild(icon);
  content.appendChild(titleElement);
  content.appendChild(messageElement);
  content.appendChild(button);
  popup.appendChild(content);
  overlay.appendChild(popup);

  popup.classList.add(
    "transform",
    "transition-all",
    "duration-300",
    "scale-95",
    "opacity-0"
  );
  setTimeout(() => {
    popup.classList.remove("scale-95", "opacity-0");
    popup.classList.add("scale-100", "opacity-100");
  }, 10);

  document.body.appendChild(overlay);

  let redirectTimer: number | null = null;

  if (redirectUrl && autoRedirectDelay > 0) {
    redirectTimer = window.setTimeout(() => {
      window.location.href = redirectUrl;
    }, autoRedirectDelay);
  }

  button.addEventListener("click", () => {
    if (redirectTimer !== null) {
      clearTimeout(redirectTimer);
    }
    close();
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  });

  function close() {
    if (document.body.contains(overlay)) {
      popup.classList.remove("scale-100", "opacity-100");
      popup.classList.add("scale-95", "opacity-0");

      setTimeout(() => {
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        }
      }, 300);
    }
  }

  return {
    close,
  };
}

export function showNotificationLogin(options: NotificationOptions = {}) {
  const {
    title = "Login Successful",
    message = "You have successfully logged in. You will be redirected to the main page.",
    buttonText = "OK",
    redirectUrl = "/home",
    autoRedirectDelay = 5000,
  } = options;

  const overlay = document.createElement("div");
  overlay.className =
    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";

  const popup = document.createElement("div");
  popup.className = "bg-white rounded-xl shadow-xl p-6 max-w-sm w-full mx-4";

  const content = document.createElement("div");
  content.className = "text-center";

  const icon = document.createElement("div");
  icon.className =
    "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4";
  icon.innerHTML = `
      <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    `;

  const titleElement = document.createElement("h3");
  titleElement.className = "text-lg font-medium text-gray-900 mb-2";
  titleElement.textContent = title;

  const messageElement = document.createElement("p");
  messageElement.className = "text-sm text-gray-500 mb-4";
  messageElement.textContent = message;

  const button = document.createElement("button");
  button.className =
    "w-full py-2 px-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all";
  button.textContent = buttonText;

  content.appendChild(icon);
  content.appendChild(titleElement);
  content.appendChild(messageElement);
  content.appendChild(button);
  popup.appendChild(content);
  overlay.appendChild(popup);

  popup.classList.add(
    "transform",
    "transition-all",
    "duration-300",
    "scale-95",
    "opacity-0"
  );
  setTimeout(() => {
    popup.classList.remove("scale-95", "opacity-0");
    popup.classList.add("scale-100", "opacity-100");
  }, 10);

  document.body.appendChild(overlay);

  let redirectTimer: number | null = null;

  if (redirectUrl && autoRedirectDelay > 0) {
    redirectTimer = window.setTimeout(() => {
      window.location.href = redirectUrl;
    }, autoRedirectDelay);
  }

  button.addEventListener("click", () => {
    if (redirectTimer !== null) {
      clearTimeout(redirectTimer);
    }
    close();
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  });

  function close() {
    if (document.body.contains(overlay)) {
      popup.classList.remove("scale-100", "opacity-100");
      popup.classList.add("scale-95", "opacity-0");

      setTimeout(() => {
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        }
      }, 300);
    }
  }

  return {
    close,
  };
}
(function () {

  const style = document.createElement("style");

  style.innerHTML = `
    /* Smooth UI improvements */
    button:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }

    table tr:hover {
        background: #eef3ff;
    }

    .nav-btn:hover {
        background: #374151;
    }

    .top-nav {
        position: fixed;
        top: 15px;
        right: 15px;
        z-index: 999;
    }
  `;

  document.head.appendChild(style);

})();

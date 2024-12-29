function toggleContacts() {
    const contacts = document.querySelector(".sidebar-info_more");
    const btn = document.querySelector(".info_more-btn");
    const icon = btn.querySelector("ion-icon");
  
    // Alternar a visibilidade da aba de contatos
    contacts.classList.toggle("open");
  
    // Alterar o ícone dependendo do estado da aba
    if (contacts.classList.contains("open")) {
      icon.setAttribute("name", "chevron-up");
      icon.classList.add("chevron-up");
    } else {
      icon.setAttribute("name", "chevron-down");
      icon.classList.remove("chevron-up");
    }
  }
  
  // Abrir a aba automaticamente no celular
  document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 768) { // Exemplo de breakpoint para celular
      const contacts = document.querySelector(".sidebar-info_more");
      contacts.classList.add("open"); // Aba aberta por padrão no celular
      const icon = document.querySelector(".info_more-btn ion-icon");
      icon.setAttribute("name", "chevron-up");
      icon.classList.add("chevron-up");
    }
  });
  
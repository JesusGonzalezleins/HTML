export function createFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div class="footer-container">
            <div class="left-section">
                <p>&copy; ${new Date().getFullYear()} Todos los derechos reservados a Jesus Pablo Gonzalez Vega.</p>
            </div>
        </div>
    `;
    return footer;
}


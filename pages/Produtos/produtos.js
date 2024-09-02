const modal = document.getElementById('modal');
const form = document.getElementById('addProductForm');
const productTableBody = document.getElementById('productTableBody');
let currentEditingRow = null;

function openModal() {
    modal.showModal();
}

function closeModal() {
    modal.close();
    form.reset(); // Limpa os campos do formulário
    currentEditingRow = null; // Reseta a linha atual de edição
}

function handleSubmit(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obter os valores dos campos do formulário
    const productName = document.getElementById('productName').value;
    const productCode = document.getElementById('productCode').value;
    const productPrice = document.getElementById('productPrice').value;

    if (currentEditingRow) {
        // Atualizar a linha existente
        currentEditingRow.cells[1].textContent = productName;
        currentEditingRow.cells[2].textContent = productCode;
        currentEditingRow.cells[3].textContent = parseFloat(productPrice).toFixed(2);
        currentEditingRow = null;
    } else {
        // Adicionar uma nova linha à tabela
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td style="width: 140px;>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" onchange="statusProduct(this)">
                    <label class="form-check-label" style="margin-left: 17px">Inativo</label>
                </div>
            </td>
            <td style="text-align: center !important">${productName}</td>
            <td style="text-align: center !important">${productCode}</td>
            <td style="text-align: center !important">${parseFloat(productPrice).toFixed(2)}</td>
            <td style="text-align: center !important">
                <div class="btn-group">
                    <button class="btn btn-warning btn-sm" onclick="editProduct(this)">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteProduct(this)">Excluir</button>
                </div>
            </td>
        `;
        productTableBody.appendChild(newRow);
    }

    // Limpar os campos do formulário e fechar o modal
    closeModal();
}

function statusProduct(input) {
    const label = input.nextElementSibling; // Pega o label que está ao lado do checkbox
    if (input.checked) {
        label.textContent = "Ativo";  // Atualiza o texto do label para "Ativo"
    } else {
        label.textContent = "Inativo";  // Atualiza o texto do label para "Inativo"
    }
}

function editProduct(button) {
    const row = button.closest('tr');
    document.getElementById('productName').value = row.cells[1].textContent;
    document.getElementById('productCode').value = row.cells[2].textContent;
    document.getElementById('productPrice').value = row.cells[3].textContent;
    currentEditingRow = row;
    openModal();
}

function deleteProduct(button) {
    if (confirm('Tem certeza de que deseja excluir este produto?')) {
        const row = button.closest('tr');
        row.remove();
    }
}

// Adicionar o listener de evento ao formulário
form.addEventListener('submit', handleSubmit);
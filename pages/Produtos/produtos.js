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
                currentEditingRow.cells[0].textContent = productName;
                currentEditingRow.cells[1].textContent = productCode;
                currentEditingRow.cells[2].textContent = parseFloat(productPrice).toFixed(2);
                currentEditingRow = null;
            } else {
                // Adicionar uma nova linha à tabela
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${productName}</td>
                    <td>${productCode}</td>
                    <td>${parseFloat(productPrice).toFixed(2)}</td>
                    <td>
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

        function editProduct(button) {
            const row = button.closest('tr');
            document.getElementById('productName').value = row.cells[0].textContent;
            document.getElementById('productCode').value = row.cells[1].textContent;
            document.getElementById('productPrice').value = row.cells[2].textContent;
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
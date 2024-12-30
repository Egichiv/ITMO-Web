document.getElementById('tableForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const includeAuthor = document.getElementById('authorColumn').checked;
    const includeYear = document.getElementById('yearColumn').checked;
    const includeRating = document.getElementById('ratingColumn').checked;
    const rowsCount = parseInt(document.getElementById('rows').value, 10);

    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    const quoteHeader = document.createElement('th');
    quoteHeader.textContent = 'Цитата';
    headerRow.appendChild(quoteHeader);

    if (includeAuthor) {
        const authorHeader = document.createElement('th');
        authorHeader.textContent = 'Автор';
        headerRow.appendChild(authorHeader);
    }
    if (includeYear) {
        const yearHeader = document.createElement('th');
        yearHeader.textContent = 'Год';
        headerRow.appendChild(yearHeader);
    }
    if (includeRating) {
        const ratingHeader = document.createElement('th');
        ratingHeader.textContent = 'Оценка';
        headerRow.appendChild(ratingHeader);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    for (let i = 0; i < rowsCount; i++) {
        const row = document.createElement('tr');
        const quoteCell = document.createElement('td');
        quoteCell.textContent = `Цитата ${i + 1}`;
        row.appendChild(quoteCell);

        if (includeAuthor) {
            const authorCell = document.createElement('td');
            authorCell.textContent = `Автор ${i + 1}`;
            row.appendChild(authorCell);
        }
        if (includeYear) {
            const yearCell = document.createElement('td');
            yearCell.textContent = `1984`;
            row.appendChild(yearCell);
        }
        if (includeRating) {
            const ratingCell = document.createElement('td');
            ratingCell.textContent = `/10`;
            row.appendChild(ratingCell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    tableContainer.appendChild(table);

    const tableConfig = {
        includeAuthor,
        includeYear,
        includeRating,
        rowsCount
    };
    localStorage.setItem('tableConfig', JSON.stringify(tableConfig));
});

document.addEventListener('DOMContentLoaded', function() {
    const savedConfig = JSON.parse(localStorage.getItem('tableConfig'));
    if (savedConfig) {
        document.getElementById('authorColumn').checked = savedConfig.includeAuthor;
        document.getElementById('yearColumn').checked = savedConfig.includeYear;
        document.getElementById('ratingColumn').checked = savedConfig.includeRating;
        document.getElementById('rows').value = savedConfig.rowsCount;
    }
});
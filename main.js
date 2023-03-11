
let invoiceList = []

function getInvoices() {
    fetch('https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/products/')
        .then(res => res.json())
        .then((data) => {
            invoiceList = data.products
        })
        .finally(() => {
            console.log(invoiceList);
            render()
        })
}

let table = document.querySelector('.tbody')

function render() {
    table.innerHTML = ''
    invoiceList.forEach(invoice => {
        table.innerHTML += `<tr>
    <td>${invoice?._id}</td>
    <td>${invoice?.category?.name}</td>
    <td>${invoice?.stock}</td>
    <td>${invoice?.price}</td>
    <td>${invoice?.sold}</td>
    <td><button id="delete" onclick="deleteRow('${invoice._id}')">DELETE</button></td>
    </tr>`
    })
}


getInvoices()
//console.log(invoiceList);


let key = 'abc'
// serach festch

const searchInput = document.querySelector('.qaime_input').addEventListener('keyup', (e) => {
    searchInvoice(e.target.value)
})

function searchInvoice(keys) {
    let i = invoiceList.filter(invoice => invoice.category.name.includes(keys))
    table.innerHTML = ''
    i.forEach(invoice => {
        table.innerHTML += `<tr>
    <td>${invoice?._id}</td>
    <td>${invoice?.category?.name}</td>
    <td>${invoice?.stock}</td>
    <td>${invoice?.price}</td>
    <td>${invoice?.sold}</td>
    <td><button id="delete" onclick="deleteRow('${invoice._id}')">DELETE</button></td>
    </tr>`
    })
}

// sort



function sortByInvoice() {
    invoiceList = invoiceList.sort((a, b) => a._id < b._id)
    console.log(invoiceList);
}

//delete invoice

// function deleteInvoice(id) {

//     console.log(id);
//     //invoiceList = invoiceList.filter(invoice => invoice._id !== id)

//     render()
//     console.log(invoiceList);
// }

// function deleteRow(el) {
//     var tbl = el.parentNode.parentNode.parentNode;
//     var row = el.parentNode.parentNode.rowIndex;

//     tbl.deleteRow(row)
// }

function deleteRow(id) {
    invoiceList = invoiceList.filter(invoice => invoice._id !== id)
    render()
}
let apiLink = "./professionalCertifications.json";

fetch(apiLink).then((result) => {
    return result.json()
})
.then((response) => {
    for(let i = 0; i < response.length; i++) {
        let table = document.querySelector("table");
        let content = `
            <tr>
                <th>Name</th>
                <td>${response[i].name}</td>
            </tr>
            <tr>
                <th>Post-Nominal</th>
                <td>${response[i].post_nominal}</td>
            </tr>
            <tr class="border-bottom">
                <th>Agency</th>
                <td>${response[i].agency}</td>
            </tr>
        `;
        table.innerHTML += content;
    }
    console.log(response.length); //668
})
.catch((error) => {
    alert(error)
})
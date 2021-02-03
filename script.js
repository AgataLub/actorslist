window.addEventListener("load", fetchActors);

function fetchActors() {
    console.log("fetchActors");
    fetch("actors.json")
    .then(function (response) {
        console.log(response)
        return response.json();
    })

    .then(function (data) {
        console.log("data")
        dataReceived(data);
    })
}

function dataReceived(actor) {
    actor.forEach(printActor);
    console.log("data received");
}

function printActor(myActor) {
    console.log("myActor")

    var template = document.querySelector("#template");
    var myCopy = template.cloneNode(true);

    let modal = 0;

    myCopy.querySelector(".fullname").textContent = myActor.fullname;
    myCopy.querySelector(".movie").textContent = myActor.movie;
    myCopy.querySelector(".open").addEventListener("click", toggleModal);

    function toggleModal() {

        if (modal === 0) {
            myCopy.querySelector(".more").classList.remove("displaynone");
            modal = 1;
        } else {
            myCopy.querySelector(".more").classList.add("displaynone");
            modal = 0;
        }
    } 

    const parentElem = document.querySelector(".print_here")
    parentElem.appendChild(myCopy);
}
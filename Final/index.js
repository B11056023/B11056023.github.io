$(document).ready(function() {

    $("#collapse").on("click", function() {

        $("#sidebar").toggleClass("active");
        $(".fa-align-left").toggleClass("fa-chevron-circle-right");
    })
})

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function() {
        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}
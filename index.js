$("#review-form").submit(e => {
    e.preventDefault();
    $.post("localhost:8082", {
        text: $("#review").val()
    })
        .done(() => {
            alert("message posted to kafka for processing by spark");
        })
        .fail(function () {
            alert("something went wrong. Please try again later");
        });
});

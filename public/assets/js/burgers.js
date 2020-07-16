/* From 13.11 */
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    // $('.delquote').on('click', function (event) {
    //     var id = $(this).data('id');

    //     // Send the DELETE request.
    //     $.ajax('/api/quotes/' + id, {
    //         type: 'DELETE',
    //     }).then(function () {
    //         console.log('deleted id ', id);
    //         // Reload the page to get the updated list
    //         location.reload();
    //     });
    // });

    $('.create-form').on('submit', function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $('#bur').val().trim(),
        };

        // Send the POST request.
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger,
        }).then(function () {
            console.log('created new burger');
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $('.devourBurger').on('click', function (event) {
        // Make sure to preventDefault on a submit event.
       // event.preventDefault();
       console.log("Inside devoured click");

        var updatedDevour = {
            devour: true /* check here */
        };

        var id = $(this).data('id');

        // Send the POST request.
        $.ajax('/api/burgers/' + id, { /* check here */
            type: 'PUT',
            data: updatedDevour,
        }).then(function () {
            console.log('burger devoured');
            location.reload();
            // Reload the page to get the updated list
           // ('/');
        });
    });
});

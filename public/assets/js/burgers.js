/* From 13.11 */
$(function () {
    $('.create-form').on('submit', function (event) {
        event.preventDefault(); /* Make sure to preventDefault on a submit event */

        var newBurger = {
            burger_name: $('#bur').val().trim(),
        };

        // Send the POST request.
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger,
        }).then(function () {
            console.log('created new burger');
            location.reload(); /* Reload the page to get the updated list */
        });
    });

    $('.devourBurger').on('click', function (event) {
       /* event.preventDefault(); Make sure to preventDefault on a submit event */
       console.log("Inside devoured click");

        var updatedDevour = {
            devour: true
        };

        var id = $(this).data('id');

        // Send the POST request.
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: updatedDevour,
        }).then(function () {
            console.log('burger devoured');
            location.reload(); /* Reload the page to get the updated list */ 
        });
    });
});

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
            author: $('#auth').val().trim(),
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

    $('.update-form').on('submit', function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var updatedQuote = {
            author: $('#auth').val().trim(),
        };

        var id = $(this).data('id');

        // Send the POST request.
        $.ajax('/api/quotes/' + id, {
            type: 'PUT',
            data: updatedQuote,
        }).then(function () {
            console.log('updated quote');
            // Reload the page to get the updated list
            ('/');
        });
    });
});

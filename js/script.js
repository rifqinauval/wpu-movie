$('#search-button').on('click', function(){
    $.ajax({
        url:'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : '7129ca2a',
            's' : $('#search-input').val()
        },
        success: function(result){
            if(result.Response == "True"){
                let movies = result.Search;
                console.log(movies);

                $.each(movies, function(i, data){
                    $('#movie-list').append(`
                    <div class="col-md-4">
                    <div class="card mb-3">
                        <img src=`+ data.Poster +` class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">`+ data.Title +`</h5>
                        <h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
                        <a href="#" class="card-link">See Detail</a>
                    </div>
                  </div>
                  </div>
                    `);
                });
            }else{
                $('#movie-list').html(`
                <div class="col">
                    <h1 class="text-center">`+ result.Error +`</h1>
                </div>    
                `);
            }
        }
    });
});
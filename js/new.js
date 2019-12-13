$(document).ready(function(){
    database.collection('new-project').get().then((data)=>{
        var result ="";
        data.forEach(item=>{
            result+=`
                <div class="card shadow-lg mt-4">
                    <div class="card-header">
                        <img src="${item.data().profile}" class="rounded-circle" width="50">
                        ${item.data().name}
                        <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal">view</button>
                    </div>
                    <div class="card-body">
                        <img src="${item.data().post}" class="img-fluid">
                    </div>
                    <div class="card-footer">
                    <button type="button" class="btn btn-danger float-right" onclick="deletePicture('${item.id}')">delete</button>
                    </div>
                </div>

                <div class="modal" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <img src="${item.data().profile}" class="rounded-circle" width="50">
                                ${item.data().name}
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <img src="${item.data().post}" class="img-fluid">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            `;
        });
        $('#result').append(result);
    });
    $('button').on('click',function(){
        var name =$('#name').val();
        var profile =$('#profile').val();
        var post =$('post').val();
        var dec =$('#de').val();
    });
    database.collection('new-project').add({
        name:name,
        profile:profile,
        post:post,
        dec:de,
    });
});
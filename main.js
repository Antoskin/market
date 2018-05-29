$(`document`).ready( () => {

    // if input value is not empty - dont move down lable
    $(`.input-item`).keyup( function() {
        var inpuVal = $(this).val()
        var siblingLabel = $(this).parent(`.input-wrapp`).find(`label`)
        console.log( inpuVal.length )
        {  !inpuVal ? 
            siblingLabel.removeClass(`holdPos`) : 
            siblingLabel.addClass(`holdPos`) }

        allowButton()
    })


    // function allowButton() {
    //     if( $(`.input-name`).val().length >= 5 && $(`.input-password`).val().length >= 5 ) {
    //        $(`.send-btn`).removeAttr(`disabled`).addClass(`allow`)
    //     } else 
    //         $(`.send-btn`).attr(`disabled`,`disabled`).removeClass(`allow`)
    // }

} )
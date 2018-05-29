$(`document`).ready( () => {

    // if input value is not empty - dont move to down lable
    $(`.input-item`).keyup( function() {
        var inpuVal = $(this).val()
        var siblingLabel = $(this).parent(`.input-wrapp`).find(`label`)
        console.log( inpuVal.length )
        {  !inpuVal ? 
            siblingLabel.removeClass(`holdPos`) : 
            siblingLabel.addClass(`holdPos`) }

        allowButton() 
        inputColorValidGreen()
    })


    function allowButton() {
        if( $(`.input-name`).val().length >= 5 && $(`.input-password`).val().length >= 5 ) {
           $(`.send-btn`).removeAttr(`disabled`).addClass(`allow`)
        } else 
            $(`.send-btn`).attr(`disabled`,`disabled`).removeClass(`allow`)
    }


    function inputColorValidGreen() {
        let nameLen = $(`.input-name`)
            passLen = $(`.input-password`)
        
        // green shadow for name input
        if(nameLen.val().length >= 5) 
            nameLen.addClass(`input-valid`)
         else 
            nameLen.removeClass(`input-valid`)

        // green shadow for password input
        if(passLen.val().length >= 5) 
            passLen.addClass(`input-valid`)
        else 
            passLen.removeClass(`input-valid`)
    }

})
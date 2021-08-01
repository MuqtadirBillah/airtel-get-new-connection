

$(document).ready(function(){


    // Navbar items hover

    // Mobile item
    function mobileItem(){
        $(".mobile-item").mouseenter(function(){
            $(".mobile-d").css("display", "block");
            $(".navDown-DD-m").css("display", "block");
            $(".mobile-item").css("background-color", "#e30010");
        });
        $(".mobile-item").mouseleave(function(){
            $(".mobile-d").css("display", "none");
            $(".navDown-DD-m").css("display", "none");
            $(".mobile-item").css("background-color", "rgba(0,0,0,0)");
        });
        $(".navDown-DD-m").mouseenter(function(){
            $(".mobile-d").css("display", "block");
            $(".navDown-DD-m").css("display", "block");
            $(".mobile-item").css("background-color", "#e30010");
        });
        $(".navDown-DD-m").mouseleave(function(){
            $(".mobile-d").css("display", "none");
            $(".navDown-DD-m").css("display", "none");
            $(".mobile-item").css("background-color", "rgba(0,0,0,0)");
        });
    }
    mobileItem();



    // International item
    function internationalItem(){
        $(".international-item").mouseenter(function(){
            $(".international-d").css("display", "block");
            $(".navDown-DD-i").css("display", "block");
            $(".international-item").css("background-color", "#e30010");
        });
        $(".international-item").mouseleave(function(){
            $(".international-d").css("display", "none");
            $(".navDown-DD-i").css("display", "none");
            $(".international-item").css("background-color", "rgba(0,0,0,0)");
        });
        $(".navDown-DD-i").mouseenter(function(){
            $(".international-d").css("display", "block");
            $(".navDown-DD-i").css("display", "block");
            $(".international-item").css("background-color", "#e30010");
        });
        $(".navDown-DD-i").mouseleave(function(){
            $(".internationalobile-d").css("display", "none");
            $(".navDown-DD-i").css("display", "none");
            $(".international-item").css("background-color", "rgba(0,0,0,0)");
        });
    }
    internationalItem();


    // Services item
    function servicesItem(){
        $(".services-item").mouseenter(function(){
            $(".services-d").css("display", "block");
            $(".navDown-DD-se").css("display", "block");
            $(".services-item").css("background-color", "#e30010");
        });
        $(".services-item").mouseleave(function(){
            $(".services-d").css("display", "none");
            $(".navDown-DD-se").css("display", "none");
            $(".services-item").css("background-color", "rgba(0,0,0,0)");
        });
        $(".navDown-DD-se").mouseenter(function(){
            $(".services-d").css("display", "block");
            $(".navDown-DD-se").css("display", "block");
            $(".services-item").css("background-color", "#e30010");
        });
        $(".navDown-DD-se").mouseleave(function(){
            $(".services-d").css("display", "none");
            $(".navDown-DD-se").css("display", "none");
            $(".services-item").css("background-color", "rgba(0,0,0,0)");
        });
    }
    servicesItem();


    // Support item
    function supportItem(){
        $(".support-item").mouseenter(function(){
            $(".support-d").css("display", "block");
            $(".navDown-DD-su").css("display", "block");
            $(".support-item").css("background-color", "#e30010");
        });
        $(".support-item").mouseleave(function(){
            $(".support-d").css("display", "none");
            $(".navDown-DD-su").css("display", "none");
            $(".support-item").css("background-color", "rgba(0,0,0,0)");
        });
        $(".navDown-DD-su").mouseenter(function(){
            $(".support-d").css("display", "block");
            $(".navDown-DD-su").css("display", "block");
            $(".support-item").css("background-color", "#e30010");
        });
        $(".navDown-DD-su").mouseleave(function(){
            $(".support-d").css("display", "none");
            $(".navDown-DD-su").css("display", "none");
            $(".support-item").css("background-color", "rgba(0,0,0,0)");
        });
    }
    supportItem();
    
    // ------------------------------------------------------------------------------------------------------
                                        // colapse One form Values

    var fName;
    var fAdd;
    var fAir;
    var fOt;
    var airCus;

    // $("#airCus").click(function(){
    //     airCus = $("#airCus").val();
    //     if(airCus=="Yes")
    //     {
    //         $("#aNum").toggleClass('hide');
    //     }
    //     else{
    //         $("#eNum").toggleClass('hide');
    //     }
    // });

    // $(".airCus").click(function(){
    //     console.log($('input[name="airCus"]'));
    // });
    $("input[name='airCus']").change(function(){
        airCus = $(this).val();
        if(airCus=="Yes")
        {
            $("#aNum").toggleClass('hide');
            $("#eNum").toggleClass('hide');
            $("#prodTable").removeClass('hide');
        }
        else{
            $("#eNum").toggleClass('hide');
            $("#aNum").toggleClass('hide');
            $("#prodTable").removeClass('hide');
        }
    });
    $("#fName").change(function () {
        fName = $("#fName").val();
    });
    $("#fAdd").change(function () {
        fAdd = $("#fAdd").val();
    });
    $("#fAir").change(function () {
        fAir = $("#fAir").val();
        if(fName && fAdd && fAir){
            $("#ColOneN").css("background-color", "#e30010");
            $("#ColOneN").css("color", "white");
        }
    });
    $("#fOt").change(function () {
        fOt = $("#fOt").val();
        console.log(fOt);
    });

    $("#ColOneN").on("click", function(){
        if(fName && fAdd && fAir){
            $("#collapseOne").toggleClass('show');
            $("#collapseTwo").toggleClass('show');
            // $("#colTwoBut").removeAttr("disabled");
            $("#colTwoBut").toggleClass("disabled");            
            // $("#colOneBut").attr("disabled", "true");
            $("#colOneBut").toggleClass("disabled");   
        }
        else{
            $(".sub").html("Please fill all the fields");
        }
    });
    
    $("#ColTwoN").css("background-color", "#e30010");


    $("#ColTwoN").on("click", function(){
        $("#collapseTwo").toggleClass('show');
        $("#collapseThree").toggleClass('show');
        $("#colThreeBut").toggleClass("disabled");        
        $("#colTwoBut").toggleClass("disabled");    
        // $("#colTwoBut").attr("disabled", "true");
        // $("#ColThreeN").css("background-color", "#e30010");
    });


    // // collapse three\
    // $("#ColThreeN").on("click", function(){
    //     $("#collapseThree").toggleClass('show');
    //     $("#colThreeBut").attr("disabled", "true");
    //     // $("#colOneBut").removeAttr("disabled", "true");
    //     $("#colOneBut").toggleClass("disabled");
    //     $(".sucMes").html("Successfully submitted the file");
    //     $("#fName").val(" ");
    //     $("#fAdd").val(" ");
    //     $("#fAir").val(" ");
    //     $("#fOt").val(" ");
    //     $(this).find(":selected").val("-");
    //     $(this).find(":selected").val("-");
    //     $(this).find(":selected").val("-");
    // });

    
    
    var monthly;
    var call;
    var sms;
    
    $('#monthly').on('change', function() {
        monthly = $(this).find(":selected").val();
    });
    $('#call').on('change', function() {
        call = $(this).find(":selected").val();
    });
    $('#sms').on('change', function() {
        sms = $(this).find(":selected").val();
        if(monthly && call && sms){
            $("#ColThreeN").css("background-color", "#e30010");
        }
    });
    
    $("#ColThreeN").on("click", function(){
        if(monthly!=="-" && call!=="-" && sms!=="-"){
            $("#collapseThree").toggleClass('show');
            $("#colThreeBut").toggleClass("disabled");    
                $(".sucMes").html("Successfully submitted the file");
                    $("#colOneBut").toggleClass("disabled");
                $("#fName").val(" ");
                $("#fAdd").val(" ");
                $("#fAir").val(" ");
                $("#fOt").val(" ");
                $(this).find(":selected").val("-");
                $(this).find(":selected").val("-");
                $(this).find(":selected").val("-");
                $('#monthly').val("-");
                $('#call').val("-");
                $('#sms').val("-");
                $("#ColOneN").css("background-color", "#b3b3b3");
                $("#ColOneN").css("color", "white");
                $("#ColThreeN").css("background-color", "#b3b3b3");
                $("#ColThreeN").css("color", "white");
        }
        else{
            $(".sucMes").html("Please fill all the fields");
        }
    });

    
    // var monthly;
    // var call;
    // var sms;
    
    // $('#monthly').on('change', function() {
    //     monthly = $(this).find(":selected").val();
    // });
    // $('#call').on('change', function() {
    //     call = $(this).find(":selected").val();
    // });
    // $('#sms').on('change', function() {
    //     sms = $(this).find(":selected").val();
    //     if(monthly && call && sms){
    //         $("#ColTwoN").css("background-color", "#e30010");
    //     }
    // });
    
    // $("#ColTwoN").on("click", function(){
    //     if(monthly!="-" && call!="-" && sms!="-"){
    //         $("#collapseTwo").toggleClass('show');
    //         $("#collapseThree").toggleClass('show');
    //         // $("#colThreeBut").removeAttr("disabled");
    //         // $("#colThreeBut").removeAttr("disabled", "true");
    //         $("#colThreeBut").toggleClass("disabled");        
    //         $("#colTwoBut").toggleClass("disabled");    
    //         // $("#colTwoBut").attr("disabled", "true");
    //         $("#ColThreeN").css("background-color", "#e30010");
    //     }
    //     else{
    //         $(".sub").html("Please fill all the fields");
    //     }
    // });

    // // collapse three\
    // $("#ColThreeN").on("click", function(){
    //     $("#collapseThree").toggleClass('show');
    //     $("#colThreeBut").attr("disabled", "true");
    //     // $("#colOneBut").removeAttr("disabled", "true");
    //     $("#colOneBut").toggleClass("disabled");
    //     $(".sucMes").html("Successfully submitted the file");
    //     $("#fName").val(" ");
    //     $("#fAdd").val(" ");
    //     $("#fAir").val(" ");
    //     $("#fOt").val(" ");
    //     $(this).find(":selected").val("-");
    //     $(this).find(":selected").val("-");
    //     $(this).find(":selected").val("-");
    // });

    $(".navBut").on("click", function(){
        $("#navDrop").toggleClass("navddVis");
        $("#navDrop").css("positon", "fixed");
    });


  });
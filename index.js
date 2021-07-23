

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

    $("#fName").change(function () {
        fName = $("#fName").val();
    });
    $("#fAdd").change(function () {
        fAdd = $("#fAdd").val();
    });
    $("#fAir").change(function () {
        fAir = $("#fAir").val();
        if(fName && fAdd && fAir){
            $("#ColOneN").css("background-color", "green");
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
            $("#colTwoBut").removeAttr("disabled", "true");
            $("#colOneBut").attr("disabled", "true");
        }
        else{
            $(".sub").html("Please fill all the fields");
        }
    });
    
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
            $("#ColTwoN").css("background-color", "green");
        }
    });
    
    $("#ColTwoN").on("click", function(){
        if(monthly && call && sms){
            $("#collapseTwo").toggleClass('show');
            $("#collapseThree").toggleClass('show');
            $("#colThreeBut").removeAttr("disabled", "true");
            $("#colTwoBut").attr("disabled", "true");
        }
        else{
            $(".sub").html("Please fill all the fields");
        }
    });

    // collapse three

    var fFile;
    var bFile;

    $('.frontFile').change( function(){
        fFile = $(this).val();
        console.log( $(this).val() );
        if(fFile && bFile){
            $("#ColThreeN").css("background-color", "green");
        }
    });
    $('.backFile').change( function(){
        bFile = $(this).val();
        console.log( $(this).val() );
        if(fFile && bFile){
            $("#ColThreeN").css("background-color", "green");
        }
    });
    $("#ColThreeN").on("click", function(){
        if(fFile && bFile){
            $("#collapseThree").toggleClass('show');
            $("#colThreeBut").attr("disabled", "true");
            $(".sucMes").html("Successfully submitted the file");
        }
        else{
            $(".sucMes").html("Please fill all the fields");
        }
    });

    $(".navBut").on("click", function(){
        $("#navDrop").toggleClass("navddVis");
        $("#navDrop").css("positon", "fixed");
    });


  });
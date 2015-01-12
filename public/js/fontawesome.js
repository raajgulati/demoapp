		$(document).ready(function(){
    			$.get("/queryreq",{num: 1}).done(function(result){
      				$("#querycontent").html(result);
      				$("#querypage-selection").bootpag({
            			total: 50,
  						page: 1,
   						maxVisible: 5,
   						leaps:false,
   						next: 'next',
   						prev: 'prev'})
		        		.on("page", function(event, /* page number here */ num){

    						$.get("/queryreq",{num: num}).done(function(result){
    							if (result.indexOf("collapse")==-1) $("#querypage-selection").bootpag({total:num});
								$("#querycontent").html(result);
    						});
        				});
    			});


		        var searchbuttonhandler = function() { 
		        	var inputvalue=$("#search3").val();
		        	var count=0;
		        	$("#searchresultstab").removeClass("hide");
		        	$("#searchresultsli").addClass("active");
		        	$("#searchresults").addClass("active");
		        	$(".dummyclass").removeClass("active");
		        	$("#search3").attr("placeholder","value")
		        	$.get("/querycount",{searchstring: inputvalue}).done(function(result) {
		        		count=parseInt(result);
		        		$.get("/querysearch",{render: 1, searchstring: inputvalue, num: 1}).done(function(result){
      						$("#searchresultscontent").html(result);
		        			$("#searchresultspage-selection").bootpag({
            					total: Math.ceil(count/10),
  								page: 1,
   								maxVisible: 5,
   								leaps:false,
   								next: 'next',
   								prev: 'prev'})
		        				.on("page", function(event, /* page number here */ num){
    								$.get("/querysearch",{searchstring: inputvalue, num: num}).done(function(result){
    									if (result.indexOf("collapse")!=-1) 
										$("#searchresultscontent").html(result);
    							});
        					});
    					});
					});

		        }
		        $("#searchbutton").on("click", searchbuttonhandler);
		        $("#search3").on("keypress",function(event) {if(event.keyCode == 13) $("#searchbutton").click();})

		        $("#postquery").on("click", function (event){
		        	var query=$("#qmessage").val();
		        	var name=$("#qname").val();
		        	var email=$("#qemail").val();
		        	var mobile=$("#qmobile").val();
		        	$.post('/postquery',{query: query, cname: name, email: email, mobile: mobile}).done (function (data){
		        		$("#queryconfirmationmessage").text(data).removeClass("hide");
		        		$("#qmessage").val("");
		        		$("#qname").val("");
		        		$("#qemail").val("");
		        		$("#qmobile").val("");		        		
		        	});

		        });

				$(".faqbutton").on("click",function(e) {
					e.preventDefault();
					$(".faqrulepanel").addClass("hide");
					var classname=$(this).attr("class").split(" ")[0];
					if (classname=="cat-1") $(".faqrulepanel").removeClass("hide");
					else $(".faqrulepanel."+classname).removeClass("hide");
					$("#categoryheading").text($(this).html());
					jQuery('html,body').animate({scrollTop:0},0);

				});

        });
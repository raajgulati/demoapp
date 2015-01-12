		$(document).ready(function() {
			$(".packagename").text($(".headingt.package1").text());
			$("#packagaenameinput").attr("value",$(".packagename").text());

			$(".pbutton").on('click',function(e){
				e.preventDefault();
				var cl=$(this).attr("class").split(" ")[1];
				$(".blink").removeClass("active");
				$(".pheading").addClass("hide");
				$(".pbody").addClass("hide");
				$(".pheading."+cl).removeClass("hide");
				$(".pbody."+cl).removeClass("hide");
				$(".blink."+cl).addClass("active");
				//alert($(".packagename").text());
				//alert($(".headingt."+cl).text());
				$(".packagename").text($(".headingt."+cl).text());
			});
			var validate = function () {
				var flag=true;
				if ($("#name").val()=="") {
					$(".namediv").addClass("has-error"); flag=false;
				} else $(".namediv").removeClass("has-error");
				if ($("#email").val()=="") {
					$(".emaildiv").addClass("has-error"); flag=false;
				} else $(".emaildiv").removeClass("has-error");
				if ($("#mobile").val()=="") {
					$(".mobilediv").addClass("has-error"); flag=false;
				} else $(".mobilediv").removeClass("has-error");
				if ($("#organization").val()=="") {
					$(".orgdiv").addClass("has-error"); flag=false;
				} else $(".orgdiv").removeClass("has-error");
				if ($("#panid").val()=="") {
					$(".paniddiv").addClass("has-error"); flag=false;
				} else $(".paniddiv").removeClass("has-error");
				if ($("#traveldate").val()=="") {
					$(".traveldatediv").addClass("has-error"); flag=false;
				} else $(".traveldatediv").removeClass("has-error");
				if (flag==true) return true;
				$(".alertdiv").text("Please enter the fields marked in red");
				$(".alertdiv").removeClass("alert-info");
				$(".alertdiv").addClass("alert-danger");
				return false;
			};
			$(".modalsubmitbutton").on('click',function(e){
				validate();
				if (validate()==true) {
					$.post("/postpackagedetails",{
						packagename: $(".packagename").text(), name: $("#name").val(), email: $("#email").val(), mobile: $("#mobile").val(), org: $("#organization").val(),
						panid: $("#panid").val(), traveldate: $("#traveldate").val(), adults: $("#adults").val(), children: $("#children").val(), infants: $("#infants").val(),
						message: $("#message").val()
					});
					$("#myModal").modal('hide');
					$("#myModal1").modal('show');
				}
 
			});
		});
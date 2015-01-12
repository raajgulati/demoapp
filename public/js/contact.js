		$(document).ready(function(){

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
				if ($("#message").val()=="") {
					$(".messagediv").addClass("has-error"); flag=false;
				} else $(".messagediv").removeClass("has-error");
				if (flag==true) return true;
				$(".alertdiv").text("Please enter the fields marked in red");
				$(".alertdiv").removeClass("hide");
				return false;
			};
			$(".submitbutton").on('click', function (e){
				if (validate()==true) {
					$(".alertdiv").addClass("hide");
					$("#myModal1").modal('show');
					$.post("/postcontactquery",{
					    name: $("#name").val(), email: $("#email").val(), mobile: $("#mobile").val(), message: $("#message").val()
					});
					$("#name").val("");
					$("#email").val("");
					$("#mobile").val("");
					$("#message").val("");
				}
			});

		});